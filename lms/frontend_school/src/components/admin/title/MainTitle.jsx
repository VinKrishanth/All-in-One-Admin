import React from "react";

export default function MainTitle({ placeholder, onChange, label, onClick }) {
  return (
    <div className="p-6 bg-white rounded-lg pt-8">
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
        <input
          type="text"
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
          onChange={onChange}
        />

        <button
          onClick={onClick}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          {label}
        </button>
      </div>
    </div>
  );
}
