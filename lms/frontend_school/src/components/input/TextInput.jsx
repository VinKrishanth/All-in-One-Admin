import React from "react";

export default function TextInput({
  label,
  placeholder = "Enter text...",
  value,
  onChange,
  type = "text",
  className = "",
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && <label className="block text-gray-700 text-sm font-medium mb-1">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
      />
    </div>
  );
}
