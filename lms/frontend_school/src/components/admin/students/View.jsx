import React, { useState } from "react";
import { motion } from "framer-motion";
import FormInput from "../../input/FormInput";
import SelectField from "../../input/SelectField";
import DateField from "../../input/DateField";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Textarea from "../../input/Textarea";
import Checkbox from "../../input/Checkbox";

export default function StudentForm({
  studentData,
  handleChangeStudent,
  handleStudentSubmit,
}) {
  const [textHover, setTextHover] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handlePassword = () => setTextHover(!textHover);

  return (
    <motion.form
      className="bg-white rounded-lg px-6 md:p-10 flex flex-col max-w-4xl mx-auto "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleStudentSubmit}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormInput
            label="First Name"
            name="firstName"
            value={studentData.firstName}
            onChange={handleChangeStudent}
            required
          />
          <FormInput
            label="Last Name"
            name="lastName"
            value={studentData.lastName}
            onChange={handleChangeStudent}
          />
          <DateField
            label="Date of Birth"
            name="dateOfBirth"
            value={studentData.dateOfBirth}
            onChange={handleChangeStudent}
            required
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={studentData.email}
            onChange={handleChangeStudent}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type={textHover ? "text" : "password"}
            value={studentData.password}
            onChange={handleChangeStudent}
            required
            Icon={textHover ? FaRegEye : FaRegEyeSlash}
            textHover={textHover}
            onClick={handlePassword}
          />
          <SelectField
            label="Gender"
            name="gender"
            required={true}
            value={studentData.gender}
            onChange={handleChangeStudent}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
          />
          <FormInput
            label="Father's Name"
            name="fatherName"
            value={studentData.fatherName}
            onChange={handleChangeStudent}
            required={true}
          />
          <FormInput
            label="Mother's Name"
            name="motherName"
            value={studentData.motherName}
            onChange={handleChangeStudent}
            required={true}
          />
          <DateField
            label="Joining Date"
            name="joinDate"
            value={studentData.joinDate}
            onChange={handleChangeStudent}
            required
          />
          <FormInput
            label="Phone Number"
            name="contactNumber"
            value={studentData.contactNumber}
            onChange={handleChangeStudent}
          />
          <div className="flex flex-col gap-4">
            <Textarea
              label="Permanent Address"
              name="address"
              value={studentData.address}
              onChange={handleChangeStudent}
              required
            />
            <Checkbox
              label="Same As Permanent Address"
              name="sameAddress"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
          </div>
          <Textarea
            label="Correspondence Address"
            name="correspondenceAddress"
            value={
              isChecked
                ? studentData.address
                : studentData.correspondenceAddress
            }
            onChange={handleChangeStudent}
          />
        </div>
      </motion.div>
    </motion.form>
  );
}
