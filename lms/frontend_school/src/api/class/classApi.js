import apiClient from "../apiClient.js";

// 🔹 Create Class
export const createClass = async (classData) => {
  try {
    const response = await apiClient.post("/classes/add", classData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 🔹 Get All Classes
export const getClasses = async () => {
  try {
    const response = await apiClient.get("/classes");
    return response.data;
  } catch (error) {
    console.error("fetch class data : " ,error);
    throw error;
  }
};

// 🔹 Update Class
export const updateClass = async (classId, updatedData) => {
  try {
    const response = await apiClient.put(`/classes/${classId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 🔹 Delete Class
export const deleteClass = async (classId) => {
  try {
    await apiClient.delete(`/classes/${classId}`);
    return { message: "Class deleted successfully" };
  } catch (error) {
    throw error;
  }
};
