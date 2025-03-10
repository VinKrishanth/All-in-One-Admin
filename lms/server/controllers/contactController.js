import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});



if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
  console.error("Missing required environment variables for email configuration.");
  process.exit(1);
}


export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    let errors = [];

    if (!name) {
      errors.push("Name field is required");
    }
    if (!email) {
      errors.push("Email field is required");
    }
    if (!message) {
      errors.push("Message field is required");
    }

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // Save Contact Data to Database
    const newContact = new Contact({ name, email, message, status: "pending" });
    await newContact.save();

    // Path to Company Logo
    const logoPath = path.resolve(__dirname, "../assets/RaavanaaLogo.png");

    // Send Email to Admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    // Auto-Reply Email to User
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Us!",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out! We have received your message and will get back to you shortly.</p>
        <p>If you have any urgent inquiries, feel free to reply to this email.</p>
        <br>
        <p>Best Regards,</p>
        <p>Kosftinnovation</p>
        <p>Yatiyantota, Sri Lanka</p>
      `,
      attachments: [{ filename: "RaavanaaLogo.png", path: logoPath }],
    });

    res.status(200).json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;

    // Find contact and update status
    const contact = await Contact.findByIdAndUpdate(id, { status: "replied" }, { new: true });

    if (!contact) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }

    res.status(200).json({ success: true, message: "Contact status updated", contact });
  } catch (error) {
    console.error("Error updating contact status:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
