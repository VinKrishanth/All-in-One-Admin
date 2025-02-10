import React from "react";

export default function StartLoader() {
  return (
    <div className="flex justify-center items-center h-fit space-x-4 my-4">
      <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce-custom"></div>
      <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce-custom [animation-delay:0.2s]"></div>
      <div className="w-4 h-4 rounded-full bg-yellow-500 animate-bounce-custom [animation-delay:0.4s]"></div>
      <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce-custom [animation-delay:0.6s]"></div>
    </div>
  );
}
