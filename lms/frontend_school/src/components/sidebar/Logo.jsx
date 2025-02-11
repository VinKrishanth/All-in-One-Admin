import { motion } from "framer-motion";
import RaavanaaLogo from "../../assets/logo/RaavanaaLogo.png";


export default function AnimatedHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center items-center py-6 border-b-2 relative"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col justify-center items-center space-y-6"
      >
        <motion.img
          src={RaavanaaLogo}
          alt="Raavanaa Tutorial"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="h-12 w-12 scale-150 object-contain rounded-full ring-2 ring-sb-secondary-dark m-0.5 cursor-pointer"
        />
        <motion.h2
          whileHover={{ scale: 1.05, color: "#facc15" }}
          transition={{ duration: 0.3 }}
          className="text-gray-900-500 text-xl tracking-wider leading-5 capitalize cursor-pointer z-10 text-white font-pacific font-normal"
        >
          Ravana Tutorial
        </motion.h2>
      </motion.div>
    </motion.div>
  );
}
