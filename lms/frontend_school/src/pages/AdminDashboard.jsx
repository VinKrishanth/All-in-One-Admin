import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { getFormattedDate } from "../utils/DynamicDate";
import { HiBellAlert } from "react-icons/hi2";
import { useAuth } from "../context/AuthContext";
import Profile from "../assets/image/demo-profile.png";
import { motion } from "framer-motion";
import { AdminList } from '../utils/NavigationLists'

export default function AdminDashboard() {
  const { user } = useAuth();
  return (
    <div className="flex flex-col">
      <Sidebar  navList={AdminList}/>
      <div className="sm:pl-64 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className="hidden sm:flex justify-between gap-6 h-10 sm:items-center md:px-8 px-4 py-8 shadow-lg"
        >
         
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-left align-text-top tracking-wide"
          >
            <motion.h2 
              className="lg:text-base text-sm font-semibold text-gray-900 capitalize"
              whileHover={{scale:1.05}}
              transition={{duration:0.3, ease: "easeOut"}}
            >
              Navigate education with Raavavaa.
            </motion.h2>
          </motion.div>


          <div className="flex justify-end lg:gap-6 gap-2 h-10 sm:items-center">
            <motion.p
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-sm transition-all duration-300 ease-linear cursor-pointer"
            >
              {getFormattedDate()}
            </motion.p>

            <div className="flex justify-center items-center space-x-2">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src={Profile}
                className="h-7 w-7 bg-blue-400 rounded-full shadow-md cursor-pointer"
                alt="Current user profile"
              />
              <motion.h2
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="md:inline-block hidden text-sm tracking-wider capitalize cursor-pointer"
              >
                {user.name}
              </motion.h2>
            </div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative flex justify-center items-center cursor-pointer"
            >
              <HiBellAlert className="scale-125" />
              <motion.p
                whileHover={{ scale: 1.1 }}
                className="h-4 w-4 absolute bg-red-500 text-center text-[10px] rounded-full -top-1 -right-1.5 scale-75 cursor-pointer"
              >
                2
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        <Outlet />
      </div>
    </div>
  );
}
