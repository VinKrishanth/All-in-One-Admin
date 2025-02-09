import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedTextInput({ label, type = "text" }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      {/* Animated Label */}
      <motion.label
        className="absolute left-4 top-1/2 text-gray-500 text-sm bg-white px-1 transition-all z-10"
        initial={{ y: 0, scale: 1 }}
        animate={
          isFocused || value
            ? { y: -10, scale: 0.9, color: "#db2777" }
            : { y: -30, scale: 1, color: "#6b7280" }
        }
      >
        {label}
      </motion.label>

      {/* Input Field */}
      <motion.input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full border-2 border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:outline-none"
        whileFocus={{ scale: 1.02 }}
      />
    </div>
  );
}
