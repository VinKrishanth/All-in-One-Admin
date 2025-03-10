// import multer from "multer";
// import Notice from "../models/Notice.js";
// import fs from "fs";
// import path from "path";

// // Define the upload directory
// const uploadDir = "public/uploads/notices";

// // Ensure the upload directory exists, create it if it doesn't
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Configure storage for multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadDir);
//     },
//     filename: (req, file, cb) => {
//         const uniqueFilename = Date.now() + path.extname(file.originalname);
//         cb(null, uniqueFilename);
//     }
// });

// // Set file upload middleware with validation
// const uploadMiddleware = multer({
//     storage: storage,
//     limits: { fileSize: 10 * 1024 * 1024 }, // 10MB file size limit
//     fileFilter: (req, file, cb) => {
//         const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
//         if (!allowedTypes.includes(file.mimetype)) {
//             return cb(new Error("Invalid file type. Only JPEG, PNG, and PDF are allowed."));
//         }
//         cb(null, true);
//     }
// });

// // Add a new notice
// const addNotice = async (req, res) => {
//     try {
//         console.log("Received File:", req.file); // Log the file details

//         const { linkType, status, dateTime, type, title, notice, url } = req.body;

//         // Create a new notice document
//         const newNotice = new Notice({
//             linkType,
//             status: status || "pending",
//             dateTime,
//             type,
//             title,
//             notice,
//             url: linkType === "url" ? url : null,
//             attachment: req.file ? req.file.filename : null
//         });

//         // Save the notice to the database
//         await newNotice.save();

//         return res.status(201).json({ success: true, message: "Notice added successfully" });
//     } catch (error) {
//         console.error("Error adding notice:", error);
//         return res.status(500).json({ success: false, error: "Server error while adding notice" });
//     }
// };

// // Export the middleware and controller function
// export { uploadMiddleware, addNotice };
