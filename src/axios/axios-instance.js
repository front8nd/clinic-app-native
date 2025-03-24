import axios from "axios";
import { getToken } from "../storage/auth";
import eventBus from "../lib/event-emit";
import guestRoutes from "../lib/guest-routes";

// Axios Instance
const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (!guestRoutes.some((path) => config.url.includes(path)) && token) {
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
      eventBus.emit("unauthorized");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
