import React, { useEffect, useState, useCallback } from "react";
import Cards from "../Cards";
import { cardDataStudent } from "../../../utils/NavigationLists";
import MainTitle from "../title/MainTitle";
import Modal from "../modal/Modal";
import { motion } from "framer-motion";
import View from "./View";
import { createStudent, getStudents } from "../../../api/student/studentApi";
import { toast } from "react-toastify";
import { StudentsButton, columns, customStyles } from "../../../utils/StudentHelper";
import DataTable from "react-data-table-component";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    motherName: "",
    fatherName: "",
    dateOfBirth: "",
    role: "student",
    joinDate: "",
    password: "",
    address: "",
    correspondenceAddress: "",
    contactNumber: "",
  });

  // Fetch Students Data
  const fetchStudents = useCallback(async () => {
    try {
      const response = await getStudents();
      if (response.success && response.students) {
        const formattedStudents = response.students.map((std, index) => ({
          id: `std${index + 1}`,
          name: std.userId.name,
          email: std.userId.email,
          gender: std.gender,
          dateOfBirth: new Date(std.dateOfBirth).toLocaleDateString(),
          joinDate: new Date(std.joinDate).toLocaleDateString(),
          address: std.address,
          action: <StudentsButton _id={std._id} />,
        }));
        setStudents(formattedStudents);
        setFilteredStudents(formattedStudents);
      } else {
        toast.error(response.message || "Failed to fetch students.");
      }
    } catch (error) {
      console.error("Error fetching students:", error);
      toast.error("Something went wrong while fetching students.");
    }
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  // Close Modal
  const handleCloseModal = () => setIsModalOpen(false);

  // Open Add Student Modal
  const handleAddStudent = () => setIsModalOpen(true);

  // Handle Input Change
  const handleChangeStudent = (event) => {
    const { name, value } = event.target;
    setStudentData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Student Submit
  const handleStudentSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await createStudent(studentData);

      if (response.success) {
        toast.success(response.message);

        const newStudent = {
          id: `std${students.length + 1}`,
          name: `${studentData.firstName} ${studentData.lastName}`,
          email: studentData.email,
          gender: studentData.gender,
          dateOfBirth: new Date(studentData.dateOfBirth).toLocaleDateString(),
          joinDate: new Date(studentData.joinDate).toLocaleDateString(),
          address: studentData.address,
          action: <StudentsButton _id={response.student._id} />,
        };

        setStudents((prev) => [...prev, newStudent]);
        setFilteredStudents((prev) => [...prev, newStudent]);

        // Reset Form
        setStudentData({
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          motherName: "",
          fatherName: "",
          dateOfBirth: "",
          role: "student",
          joinDate: "",
          password: "",
          address: "",
          correspondenceAddress: "",
          contactNumber: "",
          profileImage: "",
        });

        handleCloseModal();
      }else {
        if (Array.isArray(response.message)) {
          response.message.forEach((err) => toast.error(err));
        } else {
          toast.error(response.message || "Something went wrong!");
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        if (Array.isArray(error.response.data.message)) {
          error.response.data.message.forEach((err) => toast.error(err));
        } else {
          toast.error(error.response.data.message || "Failed to contact.");
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };



  // Filter Students
  const handleFilterStudents = (e) => {
    const searchText = e.target.value.toLowerCase();
    setFilteredStudents(
      searchText.trim()
        ? students.filter((std) => std.name.toLowerCase().includes(searchText))
        : students
    );
  };

  return (
    <motion.div
      className="p-8 space-y-4 overflow-hidden w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <motion.h1
        className="text-3xl font-bold text-gray-800 text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Students Management
      </motion.h1>

      {/* Cards */}
      <Cards cardData={cardDataStudent} />

      {/* Student Table */}
      <div className="pt-8">
        <MainTitle
          label="Add student"
          placeholder="Search student name"
          onClick={handleAddStudent}
          onChange={handleFilterStudents}
        />
        <div className="overflow-x-auto border border-gray-300 rounded-lg">
          <div className="max-h-[500px] overflow-y-auto">
            <DataTable
              columns={columns}
              data={filteredStudents}
              pagination
              customStyles={customStyles}
            />
          </div>
        </div>
      </div>

      {/* Add Student Modal */}
      <Modal
        isOpen={isModalOpen}
        customStyles
        onClose={handleCloseModal}
        header={<h2 className="text-center">Add New Student</h2>}
        body={
          <View
            studentData={studentData}
            setStudentData={setStudentData}
            handleChangeStudent={handleChangeStudent}
            handleStudentSubmit={handleStudentSubmit}
          />
        }
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
              onClick={handleStudentSubmit}
            >
              Add Student
            </motion.button>
          </div>
        }
      />
    </motion.div>
  );
}
