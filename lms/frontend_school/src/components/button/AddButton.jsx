import React from "react";

export default function AddButton({ label = "Add", onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 ${className}`}
    >
      {label}
    </button>
  );
}
