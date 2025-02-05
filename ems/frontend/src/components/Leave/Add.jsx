import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Add() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [leave, setLeave] = useState({
        userId: user._id,
        leaveType: '',
        startDate:'',
        endDate: '', 
        reason: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLeave((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5000/api/leave/add",
                leave,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            if (response.data.success) {
                navigate("/employee-dashboard/leaves");
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error);
            }
        }
    };

    return (
        <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
            <h2 className='text-2xl font-bold mb-6'>Request for Leave</h2>
            <form className='space-y-5' onSubmit={handleSubmit}>
                <div className='space-y-2'>
                    <label className='block text-sm font-medium text-gray-700'>Leave Type</label>
                    <select 
                        className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                        name='leaveType'
                        value={leave.leaveType}
                        onChange={handleChange}
                        required
                    >
                        <option value=''>Select Leave Type</option>
                        <option value='Sick Leave'>Sick Leave</option>
                        <option value='Vacation Leave'>Vacation Leave</option>
                        <option value='Maternity Leave'>Maternity Leave</option>
                        <option value='Paternity Leave'>Paternity Leave</option>
                    </select>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                        <label className='block text-sm font-medium text-gray-700'>From Date</label>
                        <input
                            name='startDate'
                            type='date'
                            value={leave.startDate}
                            onChange={handleChange}
                            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                            required
                        />
                    </div>
                    <div className='space-y-2'>
                        <label className='block text-sm font-medium text-gray-700'>To Date</label>
                        <input
                            name='endDate'
                            type='date'
                            value={leave.endDate}
                            onChange={handleChange}
                            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                            required
                        />
                    </div>
                </div>

                <div className='space-y-2'>
                    <label className='block text-sm font-medium text-gray-700'>Description</label>
                    <textarea
                        rows='4'
                        name='reason'
                        placeholder='Reason for leave'
                        onChange={handleChange}
                        className='w-full border p-2 border-gray-300 rounded-md'
                        value={leave.reason}
                        required
                    ></textarea>
                </div>

                <div className='flex justify-end py-4'>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
