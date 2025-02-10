import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    firstName: { type: String, required: true }, // Added firstName
    lastName: { type: String },
    gender: { type: String, required: true },
    motherName: { type: String, required: true },
    fatherName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    joinDate: { type: Date, required: true },
    address: { type: String, required: true },
    correspondenceAddress: { type: String },
    contactNumber: { type: String },
  },
  { timestamps: true } 
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
