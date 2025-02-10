import React from "react";

export default function DateField({ label, name, value, onChange,required }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium tracking-wider cursor-pointer">{label}{required && <span className="text-sm text-red-500 pl-1">*</span>}</label>
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        className="ring-1 px-4 py-1.5 rounded-md focus:outline-none focus:ring-green-300 text-sm w-full bg-white"
      />
    </div>
  );
}
