import React from 'react'
import { useAuth } from '../context/authContext'
import AdminSidebar from '../components/Dashboard/AdminSidebar'
import Navbar from '../components/Dashboard/Navbar'
import { Outlet } from 'react-router-dom'

export default function AdminDashboard() {
  const { user } = useAuth()

  return (
    <div className={`flex `}>
      <AdminSidebar />
      <div className={`flex-1 ml-64 bg-gray-200 h-screen`}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}
