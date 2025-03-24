import axiosInstance from "@/axios/axios-instance";

export const users = async () => {
  try {
    const response = await axiosInstance.get(`/users`);
    return response.data;
  } catch (error) {
    throw new Error(error?.message || "An error occurred while fetching users");
  }
};
