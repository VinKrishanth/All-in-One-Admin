import express from "express";
import { sendContactEmail } from "../controllers/contactController.js";

const router = express.Router();

// Contact Form Route
router.post("/add", sendContactEmail);

export default router;
