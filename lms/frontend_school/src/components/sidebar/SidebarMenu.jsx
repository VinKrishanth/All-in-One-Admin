import React from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function SidebarMenu({navList = []}) {
  const location = useLocation();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
      className="space-y-2 overflow-hidden"
    >
      {navList.map(({ title, path, icon: Icon }, index) => (
        <motion.div key={index} variants={itemVariants}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `flex items-center p-2 text-white rounded-lg group 
              ${isActive ? "bg-sb-secondary-dark " : ""}
              ${
                location.pathname !== path &&
                "hover:scale-110 hover:translate-x-2 transition-all duration-200 ease-in-out"
              }`
            }
            end
          >
            <motion.span
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {Icon && <Icon className="w-5 h-5" />}
            </motion.span>
            <motion.span
              whileHover={{ x: 3 }}
              transition={{ duration: 0.15 }}
              className="ms-5 tracking-wider font-normal"
            >
              {title}
            </motion.span>
          </NavLink>
        </motion.div>
      ))}
    </motion.div>
  );
}
