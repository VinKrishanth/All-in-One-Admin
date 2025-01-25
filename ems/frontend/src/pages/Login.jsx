import axios from 'axios';
import React, { useState } from 'react'
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const inputDataChange =  (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const formSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                formData
            );
            if(response.data.success){
                login(response.data.user);
                localStorage.setItem("token", response.data.token);
                if(response.data.user.role === 'admin') {
                    navigate('/admin-dashboard');
                }else{
                    navigate('/employee-dashboard');
                }
            }
        } catch (error) {
            if(error.response && !error.response.data.success) {
                setError(error.response.data.message);
            } else {
                setError('Server Error');
            }
    
        }
    };
  return (
    <div className='flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6'>
        <h2 className='font-pacific text-3xl text-white'>Employee Management System</h2>
        <div className='border shadow p-6 w-80 bg-white'>
            <h2 className='text-2xl font-bold mb-4'>Login</h2>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <form onSubmit={formSubmit}>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-gray-700'>Email</label>
                    <input 
                        name='email'
                        value={formData.email}
                        onChange={inputDataChange}
                        type='email' 
                        placeholder='Enter Email' 
                        className='w-full px-3 py-2 border' 
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-gray-700'>Password</label>
                    <input 
                        name='password'
                        value={formData.password}
                        onChange={inputDataChange}
                        type='password' 
                        placeholder='******'
                        className='w-full px-3 py-2 border' 
                    />
                </div>
                <div className='mb-4 flex items-center justify-between'>
                    <label className='inline-flex items-center'>
                        <input type='checkbox' className='form-checkbox' />
                        <span className='ml-2 text-gray-700'>Remember Me</span>
                    </label>
                    <a href='#' className='text-sm text-teal-600'>Forgot Password?</a>
                </div>
                <div className='mb-4'>
                    <button 
                        type='submit'
                        className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    >Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}
