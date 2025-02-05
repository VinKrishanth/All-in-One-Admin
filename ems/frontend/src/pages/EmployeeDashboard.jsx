import React from 'react'
import Sidebar from '../components/EmployeeDashboard/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Dashboard/Navbar'
import { useAuth } from '../context/authContext'

export default function EmployeeDashboard() {
  const { user } = useAuth()

  return (
    <div className={`flex `}>
      <Sidebar />
      <div className={`flex-1 ml-64 bg-gray-200 h-screen`}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}
