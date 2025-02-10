import React from "react";

export default function Checkbox({ label, name, checked, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-green-500 cursor-pointer"
      />
      <label className="text-xs font-medium cursor-pointer tracking-wider">{label}</label>
    </div>
  );
}
