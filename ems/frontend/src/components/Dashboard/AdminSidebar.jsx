import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBuilding, FaCalendar, FaCogs, FaMoneyBillWave, FaTachometerAlt, FaUser} from 'react-icons/fa';

export default function AdminSidebar() {
    const isActive = true
  return (
    <div className={`bg-gray-800 text-white space-y-2 h-screen fixed top-0 left-0 bottom-0 w-64`}>
        <div className={`bg-teal-600 h-12 flex items-center justify-center`}>
            <h3 className={`text-2xl text-center font-pacific`}>Employee MS</h3>
        </div>
        <div className='px-4'>
            <NavLink 
                to="/admin-dashboard"
                className={({isActive}) => `${isActive ? 'bg-teal-500 ': ' '} flex justify-start space-x-4   py-2.5 px-4 rounded`}
                end
                >
                <FaTachometerAlt />
                <span>Dashboard</span>
            </NavLink>
            <NavLink to="/admin-dashboard/employees" 
className={({isActive}) => `${isActive ? 'bg-teal-500 ': ' '} flex justify-start space-x-4   py-2.5 px-4 rounded`}>
                <FaUser />
                <span>Employee</span>
            </NavLink>
            <NavLink to="/admin-dashboard/departments"
                className={({isActive}) => `${isActive ? 'bg-teal-500 ': ' '} flex justify-start space-x-4   py-2.5 px-4 rounded`}>
                <FaBuilding />
                <span>Department</span>
            </NavLink>
            <NavLink to="/admin-dashboard"
                className={`flex justify-start space-x-4   py-2.5 px-4 rounded`}>
                <FaCalendar />
                <span>Leave</span>
            </NavLink>
            <NavLink to="/admin-dashboard/salary/add"
                className={({isActive}) => `${isActive ? 'bg-teal-500 ': ' '} flex justify-start space-x-4   py-2.5 px-4 rounded`}>
                <FaMoneyBillWave />
                <span>Salary</span>
            </NavLink>
            <NavLink to="/admin-dashboard"
                className={`flex justify-start space-x-4   py-2.5 px-4 rounded`}>
                <FaCogs />
                <span>Setting</span>
            </NavLink>
        </div>
    </div>
  )
}
