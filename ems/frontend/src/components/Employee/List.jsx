import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EmployeeButtons, columns } from "../../utils/EmployeeHelper";
import DataTable from "react-data-table-component";
import axios from "axios";

export default function List() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/employee", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.data.success) {
          let sno = 1;
          const data = await response.data.employees.map((emp) => ({
            _id: emp._id,
            sno: sno++,
            dep_name: emp.department.dep_name,
            name: emp.userId.name,
            dob: new Date(emp.dob).toLocaleDateString(),
            profileImage: (
              <img
                className="rounded-full object-cover min-w-10 min-h-10 max-w-10"
                src={`http://localhost:5000/${emp.userId.profileImage}`}
                alt="Profile"
              />
            ),
            action: <EmployeeButtons _id={emp._id} />,
          }));
          setEmployees(data);
          setFilteredEmployees(data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const handleFilter = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const records = employees.filter((emp) => 
      emp.name.toLowerCase().includes(searchValue) 
    );
    setFilteredEmployees(records);
  };
  

  return (
    <div className="p-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Employee</h3>
      </div>
      <div className={`flex justify-between items-center`}>
        <input
          type="text"
          placeholder="search By name"
          className="px-4 py-0.5 border"
          onChange={handleFilter}
        />
        <Link
          to="/admin-dashboard/add-employee"
          className="px-4 py-1 bg-teal-600 rounded text-white"
        >
          Add New Employee
        </Link>
      </div>
      <div className="pt-6">
        <DataTable columns={columns} data={filteredEmployees}  pagination/>
      </div>
    </div>
  );
}
