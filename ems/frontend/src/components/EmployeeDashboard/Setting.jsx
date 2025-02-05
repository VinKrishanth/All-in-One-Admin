import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext';
import axios from 'axios';

export default function Setting() {
  const navigate = useNavigate();

  const { user } = useAuth();
  const [ setting, setSetting ] = useState({
    userId : user._id,
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [ error, setError ] = useState(null);
  const handleChange =  (event) => {
    const { name, value } = event.target;
    setSetting((prev) => ({...prev, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if( setting.confirmPassword !== setting.newPassword){
      setError("Passwords do not match");
    }else{
      try {
        const response = await axios.put(
          "http://localhost:5000/api/setting/change-password",
          setting,
          {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
          }
      );
        if (response.data.success) {
          navigate('/admin-dashboard/employees')
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          setError(error.response.data.message);
        } 
      }
    }

  }

  return (
    <div className='max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96'>
      <h2 className='text-2xl font-bold mb-6'>Change Password</h2>
      <p className='text-red-500'>{error}</p>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>
            Old Password
          </label>
          <input
            placeholder='old password'
            type='password'
            name='oldPassword'
            className='w-full px-3 py-2 text-gray-700 rounded-md border-2 border-black'
            value={setting.oldPassword}
            onChange={handleChange}
          />
        </div>
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>
            New Password
          </label>
          <input
            placeholder='new password'
            type='password'
            name='newPassword'
            className='w-full px-3 py-2 text-gray-700 rounded-md border-2 border-black'
            value={setting.newPassword}
            onChange={handleChange}
          />
        </div>
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>
            Confirm Password
          </label>
          <input
            placeholder='confirm password'
            type='password'
            name='confirmPassword'
            className='w-full px-3 py-2 text-gray-700 rounded-md border-2 border-black'
            value={setting.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button 
          type='submit'
          className='w-full mt-6 bg-teal-600 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded-md'
        >
          Change Password
        </button>
      </form>
    </div>
  )
}
