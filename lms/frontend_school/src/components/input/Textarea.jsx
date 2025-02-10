import React from "react";

export default function Textarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  isChecked
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium tracking-wider cursor-pointer">{label}{required && <span className="text-sm text-red-500 pl-1">*</span>}</label>
      <textarea
        rows={"2"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`ring-2 px-4 py-1.5 rounded-md focus:outline-none focus:ring-green-300 text-sm  w-full h-20 resize-none ${isChecked && 'readonly bg-sky-200'}`}
      />
    </div>
  );
}
