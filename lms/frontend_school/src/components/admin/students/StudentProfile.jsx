import React, { useState } from "react";
import StdProfile from "../../../assets/image/student-profile.png";
import FormInput from "../../input/FormInput";
import DateField from "../../input/DateField";
import SelectField from "../../input/SelectField";
import Textarea from "../../input/Textarea";

export default function StudentProfile() {
  const [studentData, setStudentData] = useState({
    firstName: "Krishanth",
    lastName: "",
    email: "krishanth@gmail.com",
    gender: "male",
    motherName: "Eashvari",
    fatherName: "Vinayagamoorthi",
    dateOfBirth: "2024-10-30",
    role: "student",
    joinDate: "2018-01-02",
    address: "P/267, Panawatte No-04, Yatiyantota",
    correspondenceAddress: "P/267, Panawatte No-04, Yatiyantota",
    contactNumber: "0773235540",
  });

  const handleChangeStudent = (e) => {};
  return (
    <div className="m-64 ">
      <h1 className="text-3xl tracking-wider font-normal mb-8">
        Student Profile
      </h1>
      <div className="space-y-4">
        <div className="flex justify-center items-center mb-8">
          <img
            src={StdProfile}
            alt="Student Profile"
            className="h-36 w-36 border-2 rounded-xl drop-shadow-md cursor-pointer"
          />
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
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
          <SelectField
            label="Gender"
            name="gender"
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
          />
          <FormInput
            label="Mother's Name"
            name="motherName"
            value={studentData.motherName}
            onChange={handleChangeStudent}
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
          <Textarea
            label="Permanent Address"
            name="address"
            value={studentData.address}
            onChange={handleChangeStudent}
            required
          />
        </div>
      </div>
    </div>
  );
}
