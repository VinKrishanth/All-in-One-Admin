import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  status: { 
    type: String, 
    enum: ["pending", "replied"], 
    default: "pending"  
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Contact", contactSchema);
