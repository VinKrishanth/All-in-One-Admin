import apiClient from "../apiClient.js";

export const createContact = async (contactData) => {
  try {
    const response = await apiClient.post("/contact/add", contactData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
