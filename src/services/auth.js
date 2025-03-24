import axiosInstance from "@/axios/axios-instance";

export const Login = async (payload) => {
  try {
    const response = await axiosInstance.post("/login", payload);
    return response.data;
  } catch (error) {
    throw new Error(error?.message || "Login failed");
  }
};
