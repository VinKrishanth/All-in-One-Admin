import { LucideMapPin, MailCheckIcon, PhoneCallIcon } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { createContact } from "../../api/contact/contactApi.js";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createContact(contactData);
      if (response.success) {
        toast.success(response.message);
        setContactData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(response.message || "Something went wrong!");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Failed to contact.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row md:items-start justify-center min-h-fit bg-gray-50 p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="md:w-1/2 w-full max-w-lg p-8"
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-gray-700">Connect</h3>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">Get in Touch</h1>
        <p className="text-gray-600 mt-2">
          We’re here to answer your questions and support you.
        </p>

        <div className="mt-6 space-y-4">
          <motion.p
            className="flex items-center space-x-2 text-gray-700"
            whileHover={{ scale: 1.05 }}
          >
            <MailCheckIcon className="text-pink-500" />
            <span>krishanth.cse@gmail.com</span>
          </motion.p>
          <motion.p
            className="flex items-center space-x-2 text-gray-700"
            whileHover={{ scale: 1.05 }}
          >
            <PhoneCallIcon className="text-pink-500" />
            <span>+94 (77) 323-5540</span>
          </motion.p>
          <motion.p
            className="flex items-center space-x-2 text-gray-700"
            whileHover={{ scale: 1.05 }}
          >
            <LucideMapPin className="text-pink-500" />
            <span>Yatiyantota, Sri Lanka.</span>
          </motion.p>
        </div>
      </motion.div>

      {/* Right Section - Form */}
      <motion.div
        className="md:w-1/2 w-full max-w-lg p-8 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }} // Animates when 20% visible
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <motion.input
              value={contactData.name}
              name="name"
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Enter your name"
              whileFocus={{ scale: 1.02 }}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <motion.input
              value={contactData.email}
              name="email"
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Enter your email"
              whileFocus={{ scale: 1.02 }}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <motion.textarea
              value={contactData.message}
              name="message"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              rows="4"
              placeholder="Write your message..."
              whileFocus={{ scale: 1.02 }}
              onChange={handleChange}
            ></motion.textarea>
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-700">I agree to Terms</label>
          </div>

          <div className="flex justify-end">
            <motion.button
              type="submit"
              className="px-8 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
