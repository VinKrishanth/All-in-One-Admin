import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns, DepartmentButtons } from "../../utils/DepartmentHelper.jsx";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

export default function DepartmentList() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredDepartments, setFilteredDepartments] = useState([]);

  useEffect(() => { 
    const fetchDepartments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/api/department",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          let sno = 1;
          const data = await response.data.department.map((dep) => ({
            _id: dep._id,
            sno: sno++,
            dep_name: dep.dep_name,
            action: <DepartmentButtons _id={dep._id}  onDepartmentDelete={onDepartmentDelete}/>
          }));
          setDepartments(data);
          setFilteredDepartments(data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }finally{
        setLoading(false);
      }
    };
    fetchDepartments();

  }, []);

  const onDepartmentDelete = async (id) => {
    const updatedData = departments.filter(dep => dep._id !== id); 
    setDepartments(updatedData);
    setFilteredDepartments(updatedData); 
  };


  const filterDepartments = (e) => {
    const searchText = e.target.value.toLowerCase();
    
    const records = departments.filter((dep) => 
      dep.dep_name.toLowerCase().includes(searchText)
    );
  
    setFilteredDepartments(records);
  };
  

  return (
    <>{loading ? <Loader /> : 
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Department</h3>
      </div>
      <div className={`flex justify-between items-center`}>
        <input
          type="text"
          placeholder="search By Dep Name"
          className="px-4 py-0.5 border"
          onChange={filterDepartments}
        />
        <Link
          to="/admin-dashboard/add-department"
          className="px-4 py-1 bg-teal-600 rounded text-white"
        >
          Add New Department
        </Link>
      </div>
      <div className="mt-5">
        {/* <DataTable columns={columns} data={filteredDepartments}  pagination/> */}
      </div>
    </div>
    }</>
  );
}
