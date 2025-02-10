import apiClient from "../apiClient.js";

export const createStudent = async (studentData) => {
  try {
    const response = await apiClient.post("/student/add", studentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getStudents = async () => {
  try {
    const response = await apiClient.get("/student");
    return response.data;
  } catch (error) {
    console.error("fetch class data : ", error);
    throw error;
  }
};