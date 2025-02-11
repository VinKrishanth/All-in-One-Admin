import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import { cardDataStudent } from "../../../utils/NavigationLists";
import MainTitle from "../title/MainTitle";
import Modal from "../modal/Modal";
import { motion } from "framer-motion";
import View from "./View";
import { createStudent, getStudents } from "../../../api/student/studentApi";
import { toast } from "react-toastify";
import { StudentsButton,  columns } from "../../../utils/StudentHelper";
import DateTable from 'react-data-table-component';



export default function StudentList() {
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([]);
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

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getStudents();
        let sno = 1;
        if (response.success && response.students) {
          const data = response.students.map((std) => ({
            id: `std${sno++}`,
            name: std.userId.name,
            email: std.userId.email,
            gender: std.gender,
            dateOfBirth: new Date(std.dateOfBirth).toLocaleDateString(),
            joinDate: new Date(std.joinDate).toLocaleDateString(),
            address: std.address,
            action: <StudentsButton _id={std._id} />,
          }));

          setFilteredStudents(data);
          setStudents(data);
        } else {
          toast.error(response.message || "Failed to fetch students.");
        }
      } catch (error) {
        console.error("Error fetching students:", error);
        toast.error("Something went wrong while fetching students.");
      }
    };

    fetchStudents();
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddStudent = () => {
    setIsModalOpen(true);
  };

  const handleChangeStudent = (event) => {
    const { name, value } = event.target;
    setStudentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStudentSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await createStudent(studentData);
  
      if (response.success) {
        toast.success(response.message);
  
        const newStudent = {
          id: `std${students.length + 1}`,
          name: studentData.firstName + " " + studentData.lastName,
          email: studentData.email,
          gender: studentData.gender,
          dateOfBirth: new Date(studentData.dateOfBirth).toLocaleDateString(),
          joinDate: new Date(studentData.joinDate).toLocaleDateString(),
          address: studentData.address,
          action: <StudentsButton _id={response.student._id} />,
        };
  
        setStudents((prev) => [...prev, newStudent]); // Update student list
        setFilteredStudents((prev) => [...prev, newStudent]); // Update filtered list
  
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
      } else {
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
  
  const handleFilterStudents = (e) => {
    const searchText = e.target.value.toLowerCase();
  
    if (searchText.trim() === "") {
      setFilteredStudents(students); 
    } else {
      const records = students.filter((std) => 
        std.name.toLowerCase().includes(searchText)
      );
      setFilteredStudents(records);
    }
  };
  
  

  return (
    <motion.div
      className="p-8 space-y-4 overflow-hidden w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl font-bold text-gray-800 text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Class Management
      </motion.h1>
      <Cards cardData={cardDataStudent} />
      <div className="pt-8">
        <MainTitle
          label={"Add student"}
          placeholder={"Search student name"}
          onClick={handleAddStudent}
          onChange={handleFilterStudents}
        />
        <div className="overflow-x-auto">
          {/* <motion.table
            className="min-w-full text-sm text-left text-gray-500 mt-8 border-collapse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-2 border-gray-200">
              <tr>
                <th className="px-6 py-3 border-2 whitespace-nowrap hover:bg-gray-200">
                  SNo
                </th>
                <th className="px-6 py-3 border-2 whitespace-nowrap hover:bg-gray-200">
                  Name
                </th>
                <th className="px-6 py-3 border-2 whitespace-nowrap hover:bg-gray-200">
                  Email
                </th>
                <th className="px-6 py-3 border-2 whitespace-nowrap hover:bg-gray-200">
                  Gender
                </th>
                <th className="px-6 py-3 border-2 whitespace-nowrap hover:bg-gray-200">
                  Date of Birth
                </th>
                <th className="px-6 py-3 border-2 whitespace-nowrap hover:bg-gray-200">
                  Address
                </th>
                <th className="px-6 py-3 border-2 whitespace-nowrap hover:bg-gray-200">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((std, index) => (
                <motion.tr
                  key={std.id}
                  className="bg-white border-b"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="px-6 py-3 border-2 break-words hover:bg-gray-100">
                    {std.id}
                  </td>
                  <td className="px-6 py-3 border-2 break-words hover:bg-gray-100">
                    {std.name}
                  </td>
                  <td className="px-6 py-3 border-2 break-words hover:bg-gray-100">
                    {std.email}
                  </td>
                  <td className="px-6 py-3 border-2 break-words hover:bg-gray-100">
                    {std.gender}
                  </td>
                  <td className="px-6 py-3 border-2 break-words hover:bg-gray-100">
                    {std.dateOfBirth}
                  </td>
                  <td className="px-6 py-3 border-2 break-words hover:bg-gray-100">
                    {std.address}
                  </td>
                  <td className="px-6 py-3 border-2 break-words hover:bg-gray-100">
                    {std.action}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table> */}
          <DateTable columns={columns} data={filteredStudents}  pagination/>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        customStyles={true}
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
          <div className="flex justify-end gap-4 ">
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
