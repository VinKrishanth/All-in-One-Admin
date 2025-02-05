import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import axios from "axios";


export default function List() {
    const {user} = useAuth()
    const [leaves, setLeaves] = useState([]);
    const [filteredSalaries, setFilteredSalaries] = useState([]);
    let sno = 1;
    useEffect(() => {
      const fetchLeaves = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/leave/${user._id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          if (response.data.success) {
                setLeaves(response.data.leaves); 
              setFilteredSalaries(response.data.salary);
          }
        } catch (error) {
          if (error.response && !error.response.data.success) {
            alert(error.response.data.error);
          }
        } 
      };
      fetchLeaves();
    }, []);
  
    const filterSalaries = (e) => {
      const filterRecords = e.target.value.toLowerCase();
      const records = salaries.filter((salary) => 
          salary.employeeId.toLowerCase().includes(filterRecords) 
      );
      filterSalaries(records);
    };
  
    
  return (
    <div className="p-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Leave</h3>
      </div>
      <div className={`flex justify-between items-center`}>
        <input
          type="text"
          placeholder="search By Dep Name"
          className="px-4 py-0.5 border"
        />
        <Link
          to="/employee-dashboard/add-leave"
          className="px-4 py-1 bg-teal-600 rounded text-white"
        >
          Add New Leave
        </Link>
      </div>
      <div className="pt-6">
        <table className="w-full text-sm text-left text-gray-500 mt-8">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-2 border-gray-200 ">
            <tr>
              <th className="px-6 py-3 uppercase border-2">SNo </th>
              <th className="px-6 py-3 uppercase border-2">Leave Type </th>
              <th className="px-6 py-3 uppercase border-2">From </th>
              <th className="px-6 py-3 uppercase border-2">To </th>
              <th className="px-6 py-3 uppercase border-2">Description </th>
              <th className="px-6 py-3 uppercase border-2">Applied Date </th>
              <th className="px-6 py-3 uppercase border-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave._id} className="bg-white border-b">
                <td className="px-6 py-3">{sno++}</td>
                <td className="px-6 py-3">{leave.leaveType}</td>
                <td className="px-6 py-3">
                  {new Date(leave.startDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-3">
                  {new Date(leave.endDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-3">
                  {leave.reason}
                </td>
                <td className="px-6 py-3">
                  {new Date(leave.appliedAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-3">
                  {leave.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {leaves.length === 0 && (
          <div className="p-2 bg-gray-300">
            <p
              colSpan={8}
              className="flex justify-center items-center w-full text-center"
            >
              No records
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
