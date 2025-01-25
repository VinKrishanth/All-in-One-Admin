import React from 'react'

export default function SummaryCard({icon, text, number, color}) {
  return (
    <div className={`rounded flex bg-white shadow-md`}>
        <div className={`${color} text-3xl flex justify-center items-center text-white px-4`}>
            {icon}
        </div>
        <div className={`pl-4 py-1`}>
            <p className={`text-lg font-semibold`}>{text}</p>
            <p className={`text-xl font-bold`}>{number}</p>
        </div>
    </div>
  )
}
