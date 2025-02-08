import React, { useState } from "react";
import Cards from "../Cards";
import { cardDataStudent } from "../../../utils/NavigationLists";
import MainTitle from "../title/MainTitle";
import Modal from "../modal/Modal";
import { motion } from "framer-motion";
import TextInput from "../../input/TextInput";
import View from "./View";

export default function StudentList() {
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [classData, setClassData] = useState({
    className: "",
    classSection: "",
  });

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddStudent = () => {
    setIsModalOpen(true);
  };

  const handleChangeStudent = (event) => {
    const { name, value } = event.target;
    setClassData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilterClass = (event) => {
    setFilterClass(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setClassData({ className: "", classSection: "" });
      handleCloseModal();
    } catch (error) {
      console.error("Error adding class:", error);
    }
  };

  return (
    <div className="p-8 space-y-4 overflow-hidden w-full">
      <h1 className="text-3xl font-bold text-gray-800  text-center mb-8">
        Class Management
      </h1>
      <Cards cardData={cardDataStudent} />
      <div className="pt-8">
        <MainTitle
          label={"Add student"}
          placeholder={"Search student name"}
          onClick={handleAddStudent}
          onChange={handleFilterClass}
        />
        <table className="w-full text-sm text-left text-gray-500 mt-8">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-2 border-gray-200 ">
            <tr>
              <th className="px-6 py-3 uppercase border-2">SNo </th>
              <th className="px-6 py-3 uppercase border-2">Emp ID </th>
              <th className="px-6 py-3 uppercase border-2">Salary </th>
              <th className="px-6 py-3 uppercase border-2">Allowance </th>
              <th className="px-6 py-3 uppercase border-2">Deduction </th>
              <th className="px-6 py-3 uppercase border-2">Total </th>
              <th className="px-6 py-3 uppercase border-2">Pay Date </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((salary) => (
              <tr key={salary._id} className="bg-white border-b">
                <td className="px-6 py-3">{sno++}</td>
                <td className="px-6 py-3">{salary.employeeId.employeeId}</td>
                <td className="px-6 py-3">{salary.basicSalary}</td>
                <td className="px-6 py-3">{salary.allowances}</td>
                <td className="px-6 py-3">{salary.deductions}</td>
                <td className="px-6 py-3">{salary.netSalary}</td>
                <td className="px-6 py-3">
                  {new Date(salary.payDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={isModalOpen}
        customStyles={true}
        onClose={handleCloseModal}
        header={<h2 className="text-center">Add New Class</h2>}
        body={<View onChange={handleChangeStudent} onSubmit={handleSubmit}/> }
        footer={
          <div className="flex justify-end gap-4">
            <motion.button
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              onClick={handleCloseModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
            >
              Add Class
            </motion.button>
          </div>
        }
      />
    </div>
  );
}
