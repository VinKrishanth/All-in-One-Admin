import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaSpinner } from "react-icons/fa"; // Import the icon
import ContactInfo from "./ContactInfo";
import { createContact } from "../../../api/contact/contactApi.js";
import { toast } from "react-toastify";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
    policy: "",
  });

  const [loading, setLoading] = useState(false); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); 

    try {
      const response = await createContact(contactData);

      if (response.success) {
        toast.success(response.message);
        setContactData({ name: "", email: "", message: "", policy: false });
      } else {
        if (response.errors && Array.isArray(response.errors)) {
          response.errors.forEach((error) => toast.error(error));
        } else {
          toast.error(response.message || "Something went wrong!");
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        if (Array.isArray(error.response.data.errors)) {
          error.response.data.errors.forEach((err) => toast.error(err));
        } else {
          toast.error(error.response.data.message || "Failed to contact.");
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false); 
    }
  };

  return (
    <motion.section
      id="contact"
      className="max-w-7xl mx-auto p-6 lg:flex lg:space-x-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ marginTop: "10px" }}
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg lg:w-1/2 mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-orange-600 text-lg font-semibold">Get in Touch</h2>
        <h1 className="text-4xl font-bold mt-2">Let's Chat, Reach Out to Us</h1>
        <p className="text-gray-600 mt-4">
          Have questions or feedback? We're here to help. Send us a message, and
          we'll respond within 24 hours.
        </p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              First Name
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="name"
              name="name"
              placeholder="First name"
              type="text"
              value={contactData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="email"
              name="email"
              placeholder="Email address"
              type="email"
              value={contactData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="message"
              name="message"
              placeholder="Leave us a message"
              rows="4"
              value={contactData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-start">
            <input
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              id="privacy-policy"
              name="policy"
              type="checkbox"
              checked={contactData.policy}
              onChange={(e) =>
                setContactData((prevData) => ({
                  ...prevData,
                  policy: e.target.checked,
                }))
              }
            />
            <label
              className="ml-3 text-sm font-medium text-gray-700"
              htmlFor="privacy-policy"
            >
              I agree to our friendly
              <a
                className="text-indigo-600 hover:text-indigo-500 pl-2"
                href="#contact"
              >
                privacy policy
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading} 
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? (
                <span className="px-2"><FaSpinner className="animate-spin text-white " /> </span>
              ) : (
                <span className="px-2"><FaPaperPlane className="text-white" /></span> 
              )}
              {loading ? " Sending..." : "Send Message"} 
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        className="mt-8 lg:mt-0 lg:w-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          alt="A person smiling and looking at their phone"
          className="rounded-lg shadow-lg mt-20"
          height="400"
          width="400"
          src="https://storage.googleapis.com/a1aa/image/1rgdGEdXwbG8Xlk4jmdPsUtbWHY5DCrYNf4lRCLyhMw.jpg"
        />
        <ContactInfo />
      </motion.div>
    </motion.section>
  );
};

export default Contact;
