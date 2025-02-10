import React from "react";

export default function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  label2
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-medium tracking-wider cursor-pointer ">{label}{required && <span className="text-sm text-red-500 pl-1">*</span>}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="ring-1 px-4 py-2 rounded-md focus:outline-none focus:ring-green-300 text-sm bg-white w-full overflow-hidden max-h-20"
      >
        <option value="" disabled >
          {label2}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value} >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
