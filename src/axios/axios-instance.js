import axios from "axios";
import { getToken } from "../storage/auth";
import emitter from "@/lib/event-emit";
import { AUTH_ROUTES } from "@/constants/routes";
import { err } from "react-native-svg";

// Axios Instance
const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (!AUTH_ROUTES.some((path) => config.url.includes(path)) && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      emitter.emit("unauthorized");
      throw new Error("Unauthorized", err);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
