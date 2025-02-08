import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  ChevronDown,
  BookOpen,
  Layout,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MainHome() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <div className="min-h-screen bg-teal-800">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 py-4 flex items-center justify-between relative z-50"
      >
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <GraduationCap className="w-8 h-8 text-white" />
            <span className="ml-2 text-2xl font-cursive text-white">Logo</span>
          </div>
          <div className="hidden sm:flex items-center space-x-6">
            {["Home Page", "Tutorials", "Categories"].map((item) => (
              <a key={item} href="#" className="text-white hover:text-gray-200">
                {item}
              </a>
            ))}
            <div className="relative group">
              <button className="flex items-center text-white hover:text-gray-200">
                More Info
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white rounded-lg shadow-lg py-2 mt-2">
                {["About Us", "Contact", "FAQ"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden sm:block px-4 py-2 text-white hover:text-gray-200">
            Join
          </button>
          <button
             onClick={()=>{navigate(`/login`)}}
            className="hidden sm:block px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
          >
            Login
          </button>
          <button
            className="sm:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
          className="sm:hidden fixed inset-0 bg-teal-800 z-40 flex flex-col items-center justify-start space-y-8 pt-20"
        >
          {["Home Page", "Tutorials", "Categories", "More Info"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-xl hover:text-gray-200"
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col space-y-4 mt-8">
            <button className="px-8 py-2 text-white border-2 border-white rounded-full hover:bg-white hover:text-teal-800 transition-colors">
              Join
            </button>
            <button
              onClick={()=>{navigate(`/login`)}}
              className="px-8 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
            >
              Login
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.main
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6"
      >
        <div className="absolute inset-0">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Modern architecture"
            className="w-full h-[85vh] object-cover"
          />
          <div className="absolute inset-0 bg-teal-800/80"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
            Unlock Your Potential with Our Tutorials
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 max-w-2xl">
            Discover a world of knowledge at your fingertips. Our Tutorial
            Management System empowers you to learn anytime, anywhere.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-6 sm:px-8 py-3 bg-white text-teal-800 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Learn
            </button>
            <button className="px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors flex items-center justify-center">
              <Layout className="w-5 h-5 mr-2" />
              Join
            </button>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
}
