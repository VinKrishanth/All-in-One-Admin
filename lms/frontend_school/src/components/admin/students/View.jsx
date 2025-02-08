import React from "react";
import { motion } from "framer-motion";
import TextInput from "../../input/TextInput";

export default function View(onSubmit, onChange) {
  return (
    <motion.form
      className="space-y-4 p-4 bg-white rounded-lg w-full "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onSubmit={onSubmit}
    >
      <div className="grid sm:grid-cols-2 gap-2 w-full">
        <TextInput
            name="firstName"
            placeholder="First Name"
            value={``}
            onChange={onChange}
            className="w-full"
        />
        <TextInput
            name="firstName"
            placeholder="First Name"
            value={``}
            onChange={onChange}
            className="w-full"
        />
      </div>
    </motion.form>
  );
}
