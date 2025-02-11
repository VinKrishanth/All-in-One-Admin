import React, { useState } from "react";
import { motion } from "framer-motion";
import FormInput from "../../input/FormInput";
import StudentProfile from "../students/StudentProfile";

export default function TeacherList() {
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    department: "",
    subjects: "",
  });

  const handleChange = (event) => {
    setStudentData({ ...studentData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", studentData);
  };
  return (
    <motion.div
      initial={{ x: 0, y: -200 }}
      animate={{ y: 0 }}
      transition={``}
      className="p-8 space-y-4 overflow-hidden w-full"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring" }}
        whileHover={{ scale: 1.15, duration: 0.5 }}
        className="text-3xl font-bold text-gray-800  text-center mb-8 cursor-pointer"
      >
        Teacher Management
      </motion.h1>
      {/* <StudentProfile /> */}
    </motion.div>
  );
}
