import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBuilding, FaCalendar, FaCogs, FaMoneyBillWave, FaTachometerAlt, FaUser} from 'react-icons/fa';
import { useAuth } from '../../context/authContext';

export default function Sidebar() {
    const isActive = true
    const { user } = useAuth()
  return (
    <div className={`bg-gray-800 text-white space-y-2 h-screen fixed top-0 left-0 bottom-0 w-64`}>
        <div className={`bg-teal-600 h-12 flex items-center justify-center`}>
            <h3 className={`text-2xl text-center font-pacific`}>Employee MS</h3>
        </div>
        <div className='px-4'>
            <NavLink 
                to="/employee-dashboard"
                className={({isActive}) => `${isActive ? 'bg-teal-500 ': ' '} flex justify-start space-x-4   py-2.5 px-4 rounded`}
                end
                >
                <FaTachometerAlt />
                <span>Dashboard</span>
            </NavLink>
            <NavLink to={`/employee-dashboard/profile/${user._id}`}
                className={({isActive}) => `${isActive ? 'bg-teal-500 ': ' '} flex justify-start space-x-4   py-2.5 px-4 rounded`}>
                <FaUser />
                <span>My Profile</span>
            </NavLink>
            <NavLink to="/employee-dashboard/leaves"
                className={`flex justify-start space-x-4   py-2.5 px-4 rounded`}>
                <FaCalendar />
                <span>Leave</span>
            </NavLink>
            <NavLink to={`/employee-dashboard/salary/${user._id}`}
                className={({isActive}) => `${isActive ? 'bg-teal-500 ': ' '} flex justify-start space-x-4   py-2.5 px-4 rounded`}>
                <FaMoneyBillWave />
                <span>Salary</span>
            </NavLink>
            <NavLink to="/employee-dashboard/setting"
                className={({isActive}) => `${isActive ? 'bg-teal-500 ': ' '} flex justify-start space-x-4   py-2.5 px-4 rounded`}>
                <FaCogs />
                <span>Setting</span>
            </NavLink>
        </div>
    </div>
  )
}
