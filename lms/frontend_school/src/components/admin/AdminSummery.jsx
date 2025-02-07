import React from 'react'
import Cards from './Cards'
import AttendancePieChart from '../chart/AttendancePieChart'
import Calendar from './Calendar'
import SchoolTimetable from './SchoolTimetable'

export default function AdminSummery() {
  return (
    <div className='p-8 space-y-4 overflow-hidden'>
      <Cards />
      <div className='hidden md:grid-cols-4 grid-cols-2 gap-4  justify-center items-start w-fit'>
        <SchoolTimetable />
        <AttendancePieChart />
        <Calendar />
      </div>
    </div>
  )
}
