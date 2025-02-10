import React, { useState } from "react";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RaavanaaLogo from "../assets/logo/RaavanaaLogo.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const inputDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/login`, formData);
      if (response.data.success) {
        toast.success(response.message)
        login(response.data.user, response.data.token);
        switch (response.data.user.role) {
          case "admin":
            navigate("/admin-dashboard");
            break;
          case "teacher":
            navigate("/teacher-dashboard");
            break;
          case "student":
            navigate("/student-dashboard");
            break;
          default:
            navigate("/");
        }
      }else {
        if (Array.isArray(response.message)) {
          response.message.forEach((err) => toast.error(err));
        } else {
          toast.error(response.message || "Something went wrong!");
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        if (Array.isArray(error.response.data.message)) {
          error.response.data.message.forEach((err) => toast.error(err));
        } else {
          toast.error(error.response.data.message || "Failed to contact.");
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <div>
          <div className="flex justify-center">
            <div className="bg-yellow-400 p-2 sm:p-2 rounded-md ring-2 ring-yellow-400 cursor-pointer">
              <motion.div
                className="w-14 h-14 rounded overflow-hidden ring-2 ring-blue-400 flex items-center justify-center bg-white"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                <img
                  src={RaavanaaLogo}
                  alt="Tutorial logo"
                  className="scale-125 w-12 h-12 rounded-full"
                />
              </motion.div>
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to access your Raavanaa tutorial management dashboard
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={formSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={inputDataChange}
                  className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={inputDataChange}
                  className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950 sm:text-sm"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-950 focus:ring-blue-950 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-blue-950 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-colors"
            >
              Login
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/home"
              className="font-medium text-blue-950 hover:text-blue-800"
            >
              Home
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
