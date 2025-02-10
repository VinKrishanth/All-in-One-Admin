import React from "react";

export default function FormInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  Icon,
  onClick,
  textHover
}) {
  return (
    <div className="flex flex-col gap-2 relative">
      <label className="text-sm font-medium tracking-wider cursor-pointer">{label} {required && <span className="text-sm text-red-500">*</span>}</label>
      <input
        type={ textHover ? "text" : type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`ring-1 px-4 py-1.5 rounded-md focus:outline-none focus:ring-green-300 text-sm  w-full `}
        readOnly={name ==="role" && true}
      />
      {Icon && <Icon onClick={onClick} className="inline-block h-6 w-6 text-gray-500 absolute right-2 bottom-1 scale-[90%] cursor-pointer " />}
    </div>
  );
}
