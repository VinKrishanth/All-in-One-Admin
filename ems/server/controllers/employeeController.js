import multer from "multer";
import Employee from "../models/Employee.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import path from "path";
import fs from "fs";
import Department from "../models/Department.js";


// Ensure "public/uploads" directory exists
const uploadDir = "public/uploads";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer for Image Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("Saving file to:", uploadDir); // ✅ Debugging
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueFilename = Date.now() + path.extname(file.originalname);
        console.log("Generated Filename:", uniqueFilename); // ✅ Debugging
        cb(null, uniqueFilename);
    }
});

const upload = multer({ storage: storage });

// Add Employee Function
const addEmployee = async (req, res) => {
    try {
        console.log("Received File:", req.file); // ✅ Debugging

        const {
            name, email, employeeId, dob, gender, maritalStatus,
            designation, department, salary, password, role
        } = req.body;

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).json({ success: false, message: 'User already registered as an employee' });
        }

        // Hash Password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create User
        const newUser = new User({
            name,
            email,
            password: hashPassword,
            role,
            profileImage: req.file ? req.file.filename : ""  // Save filename if uploaded
        });

        const savedUser = await newUser.save();

        // Create Employee
        const newEmployee = new Employee({
            userId: savedUser._id,
            employeeId,
            dob,
            gender,
            maritalStatus,
            designation,
            department,
            salary
        });

        await newEmployee.save();

        return res.status(201).json({ success: true, message: "Employee added successfully" });

    } catch (error) {
        console.error("Error adding employee:", error);
        return res.status(500).json({ success: false, error: "Server error while adding employee" });
    }
};

// Fetch Employees with Populated User and Department Details
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find()
            .populate('userId', { password: 0 }) // Exclude password
            .populate('department');

        return res.status(200).json({ success: true, employees });
    } catch (error) {
        console.error("Error fetching employees:", error);
        return res.status(500).json({ success: false, error: "Server error while fetching employees" });
    }
};

const getEmployee = async (req,res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findById({_id: id})
            .populate('userId', { password: 0 }) 
            .populate('department');

        return res.status(200).json({ success: true, employee });
    } catch (error) {
        return res.status(500).json({success: false, error: "get employee server error"})
    }
}

const updateEmployee = async (req,res) => {
    try {
        const { id } = req.params
        const {
            name, maritalStatus,
            designation, department, salary
        } = req.body;

        const employee = await Employee.findById({_id: id})
        if(!employee){
            return res.status(404).json({success: false, message:"employee not found"})
        }

        const user = await User.findById({_id: employee.userId})
        if(!user){
            return res.status(404).json({success: false, message:"user not found"})
        }


        const updateUser = await User.findByIdAndUpdate({_id : employee.userId},{
            name
        })
        const updateEmployee = await Employee.findByIdAndUpdate({_id : id},{
            maritalStatus,
            designation,
            salary,
            department
        })
        if(!updateEmployee  || !updateUser) {
            return res.status(400).json({success: false, message:"update employee or user failed"})
        }

        return res.status(200).json({success: true, message: "employee update" })
    } catch (error) {
        return res.status(500).json({success: false, error: "update employee server error"})
    }
}

 
const fetchEmployeesByDepId =  async (req, res) => {
    try {
        const { id } = req.params;
        const employees = await Employee.find({department: id});

        return res.status(200).json({ success: true, employees });
    } catch (error) {
        return res.status(500).json({success: false, error: "get employeesByDepID server error"})
    }
}


export { addEmployee, upload, getEmployees , getEmployee, updateEmployee, fetchEmployeesByDepId};
