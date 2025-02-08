import React from "react";

export default function TextInput({
  label,
  placeholder = "Enter text...",
  value,
  onChange,
  type = "text",
  className = "",
  name
}) {
  return (
    <div className={`w-full ${className} flex  justify-between items-center`}>
      {label && <label className="inline-block text-gray-700 text-sm font-medium mb-1 w-32">{label}</label>}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-2 border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 flex-grow"
      />
    </div>
  );
}
