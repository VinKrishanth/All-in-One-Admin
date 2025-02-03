import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddDepartment() {
  const [formdata, setFormData] = useState({
    dep_name: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const formSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/department/add",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/departments");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <div
      className={`max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96`}
    >
      <h3 className="text-2xl font-bold mb-6">Add Department</h3>
      <form className="space-y-4" onSubmit={formSubmit}>
        <div>
          <label
            htmlFor="dep_name"
            className="text-sm font-medium text-gray-700"
          >
            Department Name
          </label>
          <input
            value={formdata.dep_name}
            name="dep_name"
            type="text"
            id="dep_name"
            placeholder="Enter Department Name"
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            value={formSubmit.description}
            name="description"
            onChange={handleChange}
            type="text"
            id="description"
            placeholder="Description"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Department
        </button>
      </form>
    </div>
  );
}
