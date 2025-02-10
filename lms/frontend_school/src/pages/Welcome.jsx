import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import RaavanaaLogo from "../assets/logo/RaavanaaLogo.png";
import StartLoader from "../components/Loader/StartLoader";

export default function Welcome() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-950 to-blue-900 opacity-90">
      <div className="relative overflow-hidden ">
        <div className="absolute inset-0 " />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex justify-center mb-6 sm:mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-yellow-400 p-2 sm:p-2 rounded-md ring-2 ring-yellow-400 cursor-pointer">
                <motion.div
                  className="w-14 h-14 rounded overflow-hidden ring-2 ring-blue-400 flex items-center justify-center bg-white"
                  animate={{ scale: [1, 1.05, 1] }} // Scale up and down
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }} // Infinite smooth animation
                >
                  <img
                    src={RaavanaaLogo}
                    alt="Tutorial logo"
                    className="scale-125 w-12 h-12 rounded-full"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-white mb-4 sm:mb-6 px-4 font-pacific font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Welcome to Raavanaa Tutorial
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto px-4 tracking-wider "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Streamline your school's administration with our comprehensive
              management system.
            </motion.p>
            <motion.div
              className="flex  justify-center px-4 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <StartLoader />
            </motion.div>
            <motion.div
              className="flex  justify-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.11 }}
            >
              <motion.button
                initial={{ opacity: 0, y: 30 ,scale: 0.2 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.11 }}
                onClick={handleNext}
                className="bg-white text-blue-950 px-6 sm:px-8 md:py-2.5 sm:py-2 py-1.5  text-center  rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center text-sm sm:text-base"
              >
                Next
                <ChevronRight className=" h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
