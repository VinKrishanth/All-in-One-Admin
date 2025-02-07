import React, { useState } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { FcPrevious, FcNext } from "react-icons/fc";

const holidays = [
  "2025-01-01",
  "2025-04-14", 
  "2025-05-01", 
  "2025-12-25",
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const today = dayjs().format("YYYY-MM-DD");

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const daysInMonth = endOfMonth.date();
  
  // Adjust first day of the week to Monday (0 = Sunday, 1 = Monday)
  const firstDayOfWeek = (startOfMonth.day() + 6) % 7;

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const days = Array.from({ length: firstDayOfWeek }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  return (
    <motion.div
      className="w-64 bg-white drop-shadow-md rounded-lg p-4 flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Month Navigation */}
      <div className="flex justify-between w-full mb-2">
        <h2 className="text-sm font-semibold text-gray-700">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <div className="font-semibold space-x-2">
          <button onClick={prevMonth} className="text-gray-600 hover:text-gray-800">
            <FcPrevious />
          </button>
          <button onClick={nextMonth} className="text-gray-600 hover:text-gray-800">
            <FcNext />
          </button>
        </div>
      </div>

      {/* Days of the Week (Starting from Monday) */}
      <div className="grid grid-cols-7 gap-1 w-full text-center text-gray-600 text-xs font-semibold">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className={day === "Sat" || day === "Sun" ? "text-red-500" : ""}>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1 w-full text-center mt-1">
        {days.map((day, index) => {
          if (!day) return <div key={index} />;

          const dayDate = currentDate.date(day).format("YYYY-MM-DD");
          const isWeekend = dayjs(dayDate).day() === 6 || dayjs(dayDate).day() === 0;
          const isHoliday = holidays.includes(dayDate);
          const isToday = dayDate === today;

          return (
            <motion.div
              key={index}
              className={`p-2 text-xs font-medium rounded-full cursor-pointer transition duration-300 
                hover:bg-blue-500 hover:text-white flex items-center justify-center
                ${isToday ? "bg-blue-500 text-white" : ""}
                ${isWeekend || isHoliday ? "text-red-500 font-bold" : ""}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.02 }}
              style={{ width: "30px", height: "30px" }} // Ensures a round shape
            >
              {day}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Calendar;
