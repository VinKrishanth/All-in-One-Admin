import Student from "../models/Student.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

export const addStudent = async (req, res) => {
  try {
    const { firstName, lastName, email, password, gender, motherName, fatherName, dateOfBirth, address, contactNumber, joinDate } = req.body;

    // Collect validation errors
    let errors = [];

    if (!firstName) errors.push("First Name is required");
    if (!email) errors.push("Email is required");
    if (!password) errors.push("Password is required");
    if (!gender) errors.push("Gender is required");
    if (!motherName) errors.push("Mother's Name is required");
    if (!fatherName) errors.push("Father's Name is required");
    if (!dateOfBirth) errors.push("Date of Birth is required");
    if (!joinDate) errors.push("Joining Date is required");
    if (!address) errors.push("Permanent Address is required");

    // If there are errors, return them in a single response
    if (errors.length > 0) {
      return res.status(400).json({ success: false, message: errors });
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User entry
    const newUser = new User({
      name: firstName,
      email,
      password: hashedPassword,
      role: "student",
    });

    const savedUser = await newUser.save();

    // Create Student entry with the User's ID
    const newStudent = new Student({
      userId: savedUser._id,
      firstName,
      lastName,
      gender,
      joinDate,
      motherName,
      fatherName,
      dateOfBirth,
      address,
      contactNumber,
    });

    const savedStudent = await newStudent.save();

    res.status(201).json({ success: true, message: "Student added successfully", student: savedStudent });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding student", error });
  }
};



//  GET ALL STUDENTS WITH USER DETAILS
export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().populate("userId", "-password"); // Exclude password field
        return res.status(200).json({ success: true, students: students });
    } catch (error) {
        console.error("Error fetching students:", error);
        return res.status(500).json({ success: false, message: "Server error while fetching students" });
    }
};

//  GET A SINGLE STUDENT BY ID WITH USER DETAILS
export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id).populate("userId", "-password");

        if (!student) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }

        return res.status(200).json({ success: true, student });
    } catch (error) {
        console.error("Error fetching student:", error);
        return res.status(500).json({ success: false, message: "Server error while fetching student" });
    }
};

