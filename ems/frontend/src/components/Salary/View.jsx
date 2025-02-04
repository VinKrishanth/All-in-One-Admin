import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function View() {
  const [salaries, setSalaries] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filteredSalaries, setFilteredSalaries] = useState([]);
  const { id } = useParams()
  let sno = 1;

  useEffect(() => {
    const fetchSalaries = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/salary/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response.data)
        if (response.data.success) {
            setSalaries(response.data.salary); 
            setFilteredSalaries(response.data.salary);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchSalaries();
  }, []);

  const filterSalaries = (e) => {
    const filterRecords = e.target.value.toLowerCase();
    const records = salaries.filter((salary) => 
        salary.employeeId.toLowerCase().includes(filterRecords) 
    );
    filterSalaries(records);
  };
  

  return (
    <>
        {
            filteredSalaries === null ? (
                <div>Loading...</div>
            ): (
                <div className="p-6">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold">Salary History</h3>
                    </div>
                    <div className={`flex justify-end items-center`}>
                        <input
                        type="text"
                        placeholder="search By Emp ID"
                        className="px-4 py-0.5 border"
                        onChange={filterSalaries}
                        />
                    </div>

                        <table className="w-full text-sm text-left text-gray-500 mt-8">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-2 border-gray-200 ">
                                <tr>
                                    <th className="px-6 py-3 uppercase border-2">SNo </th>
                                    <th className="px-6 py-3 uppercase border-2">Emp ID </th>
                                    <th className="px-6 py-3 uppercase border-2">Salary </th>
                                    <th className="px-6 py-3 uppercase border-2">Allowance </th>
                                    <th className="px-6 py-3 uppercase border-2">Deduction </th>
                                    <th className="px-6 py-3 uppercase border-2">Total </th>
                                    <th className="px-6 py-3 uppercase border-2">Pay Date </th>
                                </tr>
                            </thead>
                            <tbody>
                            {filteredSalaries.map((salary) => (
                                <tr key={salary._id} className="bg-white border-b">
                                    <td className="px-6 py-3">{sno++}</td>
                                    <td className="px-6 py-3">{salary.employeeId.employeeId}</td>
                                    <td className="px-6 py-3">{salary.basicSalary}</td>
                                    <td className="px-6 py-3">{salary.allowances}</td>
                                    <td className="px-6 py-3">{salary.deductions}</td>
                                    <td className="px-6 py-3">{salary.netSalary}</td>
                                    <td className="px-6 py-3">
                                    {new Date(salary.payDate).toLocaleDateString()}
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredSalaries.length === 0 && <div className="p-2 bg-gray-300">
                                    <p colSpan={8}  className="flex justify-center items-center w-full text-center">No records</p>
                                </div>}
                </div>
                )
            }
    </>
  );
}
