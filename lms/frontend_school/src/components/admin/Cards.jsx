import React from "react";
import { PiStudentDuotone } from "react-icons/pi";
import { FaChalkboardTeacher, FaAward } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { motion } from "framer-motion";

// Card Animation Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },  // Start position
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 }, // Staggered delay
  }),
};

const Card = ({ title, subtitle, Icon, color, index }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index} 
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="flex justify-between items-center py-4 px-6 h-24 md:w-64 w-52 rounded-lg cursor-pointer transition-all duration-400 ease-linear bg-teal-50 hover:bg-teal-100 hover:scale-105 drop-shadow-md drop-shadow-sky-400"
    >
      <div className="space-y-0.5">
        <p className="text-sm font-normal tracking-wide capitalize">{title}</p>
        <p className="text-xl font-semibold tracking-wide">{subtitle}</p>
      </div>
      <div className={`px-4 ${color}`}>
        {Icon && <Icon className="scale-[3]" />}
      </div>
    </motion.div>
  );
};

export default function Cards() {
  const cardData = [
    { title: "Students", subtitle: "1500", Icon: PiStudentDuotone, color: "text-blue-600" },
    { title: "Teachers", subtitle: "75", Icon: FaChalkboardTeacher, color: "text-purple-500" },
    { title: "Awards", subtitle: "210", Icon: FaAward, color: "text-orange-400" },
    { title: "Books", subtitle: "3.5k", Icon: FaBookAtlas, color: "text-green-600" },
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="grid lg:grid-cols-4 grid-cols-2 gap-8 min-w-fit justify-center"
    >
      {cardData.map((card, index) => (
        <Card key={index} {...card} index={index} />
      ))}
    </motion.div>
  );
}
