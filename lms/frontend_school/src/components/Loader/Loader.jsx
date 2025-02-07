import React from 'react'

export default function Loader() {
  return (
    <div className={`flex justify-center items-center h-screen w-screen `}>
        <div className="relative w-10 h-10 animate-[spin988_2s_linear_infinite]">
            <div className="absolute top-0 left-0 w-3 h-3 bg-red-800 rounded-full" />
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-800 rounded-full" />
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-blue-800 rounded-full" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-full" />
        </div>
    </div>
  )
}
