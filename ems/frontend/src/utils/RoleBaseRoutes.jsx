import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'
import Loader from '../components/Loader/Loader'

export default function RoleBaseRoutes({children, requiredRole}) {
    const { user, loading} = useAuth()
    if(loading){
      return  <Loader />
    }

    if(!requiredRole.includes(user.role)){
        <Navigate to="/unauthorized" />
    }

    return user? children : <Navigate to="/login" />
}
