import React from "react";
import Cards from "./Cards";
import AttendancePieChart from "../chart/AttendancePieChart";
import Calendar from "./Calendar";
import SchoolTimetable from "./SchoolTimetable";
import { cardData } from "../../utils/NavigationLists";
import { motion } from "framer-motion";

export default function AdminSummery() {
  return (
    <div className="p-8 space-y-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, type: "fade" }}
        className="mb-8 overflow-hidden"
      >
        <motion.h1
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ duration:0.8, delay: 0.3, type: "fade" }}
          whileHover={{ duration:0.3, delay: 0.3, type:"easeOut", scale: 1.05}}
          className=" md:text-3xl text-2xl text-center tracking-wider font-bold cursor-pointer"
        >
          Welcome to your dashboard, Raavanaa Tutorial
        </motion.h1>
      </motion.div>
      <Cards cardData={cardData} />
      <div className="hidden md:grid-cols-4 grid-cols-2 gap-4  justify-center items-start w-fit">
        <SchoolTimetable />
        <AttendancePieChart />
        <Calendar />
      </div>
    </div>
  );
}
