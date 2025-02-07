import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'
import Loader from '../components/Loader/Loader'

export default function PrivateRoutes({ children }) {
    const { user, loading } = useAuth()

    if (loading) {
        return <Loader />
    }

    return user ? children : <Navigate to="/login" />
}
