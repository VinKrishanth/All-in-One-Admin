import express from "express";
import {
  getClasses,
  createClass,
  updateClass,
  deleteClass,
} from "../controllers/classController.js";

const router = express.Router();

router.get("/", getClasses);
router.post("/add", createClass);
router.put("/:id", updateClass);
router.delete("/:id", deleteClass);

export default router;
