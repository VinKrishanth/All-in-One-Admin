import apiClient from "../apiClient.js";

export const createNotice = async (contactData) => {
  try {
    const response = await apiClient.post("/notices/add", contactData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
