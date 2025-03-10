import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaBars, FaTimes } from "react-icons/fa";
import RaavanaaLogo from "../../../assets/logo/RaavanaaLogo.png";
import { navigationList } from "../../../utils/NavigationLists.jsx";
import { useNavigate } from "react-router-dom";

const Hero = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="raavanaa" className="bg-gray-100">
      <header className="bg-white shadow fixed w-full top-0 left-0 z-50 ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={RaavanaaLogo}
              alt="Raavanaa Logo"
              className="mr-2 w-10 h-10"
            />
            <span className="text-2xl font-bold">Raavanaa.</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {navigationList.map((item, index) => (
              <a
                key={index}
                className="text-gray-700 hover:text-red-500"
                href={`#${item.id}`}
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate("/login")}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition hidden md:block">
              Login
            </button>
            <button
              className="md:hidden text-gray-700 text-2xl"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center">
            <img
              src={RaavanaaLogo}
              alt="Raavanaa Logo"
              className="mr-2 w-10 h-10"
            />
            <span className="text-2xl font-bold">Raavanaa.</span>
          </div>
          <button
            className="text-gray-700 text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col p-4">
          <ul className="space-y-4">
            {navigationList.map((item, index) => (
              <li
                key={`nav-${index}`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 text-gray-700 hover:text-red-500 text-lg"
              >
                {item.icon} 
                <a
                  href={`#${item.id}`}
                  className="text-gray-700 hover:text-red-500 text-lg"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="relative w-full h-screen pt-16">
        <div className="absolute inset-0">
          <img
            src={slides[currentSlide].image}
            alt="Hero Background"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scaleY: 0.9 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4"
        >
          <h2 className="text-lg md:text-2xl font-semibold">
            {slides[currentSlide].subtitle}
          </h2>
          <h1 className="text-3xl md:text-6xl font-bold mt-2">
            {slides[currentSlide].title}
          </h1>
          <p className="text-sm md:text-lg mt-4 max-w-2xl">
            {slides[currentSlide].description}
          </p>
          <a
            href={slides[currentSlide].buttonLink}
            className="bg-red-500 text-white px-6 py-3 rounded mt-6 hover:bg-red-600 transition"
          >
            {slides[currentSlide].buttonText}
          </a>
        </motion.div>
        <button
          onClick={prevSlide}
          className="absolute hidden left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute hidden right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Hero;
