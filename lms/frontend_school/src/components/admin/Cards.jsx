import React from "react";
import { motion } from "framer-motion";


const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },  
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 }, 
  }),
};

const Card = ({ title, subtitle, Icon, color, index,  }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index} 
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className={`flex justify-between sm:flex-row flex-col gap-4 items-center sm:py-4  py-5 text-center  sm:px-6 sm:h-24    lg:w-64 sm:w-52 w-32 rounded-lg cursor-pointer transition-all duration-400 ease-linear bg-teal-50 hover:bg-teal-100 hover:scale-105 drop-shadow-md drop-shadow-sky-400`}
    >
      <div className="space-y-0.5">
        <p className="text-sm font-normal tracking-wide capitalize">{title}</p>
        <p className="text-xl font-semibold tracking-wide">{subtitle}</p>
      </div>
      <div className={`px-4 ${color}`}>
        {Icon && <Icon className="sm:scale-[3] scale-[2.5]" />}
      </div>
    </motion.div>
  );
};

export default function Cards({cardData = []}) {


  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className={`grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center items-center gap-8 min-w-fit  `}
    >
      {cardData.map((card, index) => (
        <Card key={index} {...card} index={index} />
      ))}
    </motion.div>
  );
}
