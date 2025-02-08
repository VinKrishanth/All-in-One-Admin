import React from "react";
import { motion } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 1.5, ease: "easeOut" } },
};

export default function IconButton({ Icon, label, onClick }) {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={listVariants}
    >
      <motion.button
        onClick={onClick}
        className={`flex items-center px-2 text-white rounded-lg mx-1`}
        variants={itemVariants}
      >
        {Icon && <Icon className="w-5 h-5 scale-125" />}
        <p className="ms-5 tracking-wider font-normal">{label}</p>
      </motion.button>
    </motion.div>
  );
}
