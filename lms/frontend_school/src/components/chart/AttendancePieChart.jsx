import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";

const AttendancePieChart = ({ attendance = 75, absence = 25 }) => {
  const data = [
    { name: "Present", value: attendance },
    { name: "Absent", value: absence },
  ];

  const COLORS = ["#22C55E", "#EF4444"]; 

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 bg-white rounded-lg drop-shadow-md md:w-64  w-56"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.h2
        className="text-lg font-semibold mb-4 text-gray-700"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Attendance Summary
      </motion.h2>

      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
          animationBegin={300}
          animationDuration={1000}
          animationEasing="ease-out"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </motion.div>
  );
};

export default AttendancePieChart;
