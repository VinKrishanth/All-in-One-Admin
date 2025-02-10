import express from "express";
import {  addStudent, getAllStudents, getStudentById } from "../controllers/studentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// router.get("/", getStudentDetails);
router.post("/add",authMiddleware, addStudent);
router.get("/",authMiddleware, getAllStudents);
router.get("/:id",authMiddleware, getStudentById );

export default router;
