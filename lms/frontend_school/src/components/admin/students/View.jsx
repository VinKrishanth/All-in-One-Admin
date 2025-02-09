import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedTextInput from "../../input/AnimatedTextInput";
import FormInput from "../../input/FormInput";

export default function View() {
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChangeStudent = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleStudentSubmit = (e) => {};

  return (
    <motion.form
      className="space-y-4 p-4 bg-white rounded-lg w-full "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleStudentSubmit}
    >
      <div className={`grid sm:grid-cols-2 gap-2  max-w-2xl`}>
        <FormInput 

        />
      </div>
    </motion.form>
  );
}
