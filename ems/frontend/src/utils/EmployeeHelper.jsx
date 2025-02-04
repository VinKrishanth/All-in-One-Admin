import axios from "axios";
import { useNavigate } from "react-router-dom";

export const fetchDepartments = async () => {
    let departments;
    try {
        const response = await axios.get("http://localhost:5000/api/department", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

    if (response.data.success) {
        departments = response.data.department;
    }
    } catch (error) {
        console.error("Error fetching departments:", error.response?.data?.error || error.message);
        return [];
    }
    return departments;
};

// employees for salary form
export const getEmployees = async (id) => {
    let employees;
    try {
        const response = await axios.get(`http://localhost:5000/api/employee/department/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response.data);
    if (response.data.success) {
        employees = response.data.employees;
    }
    } catch (error) {
        console.error("Error fetching departments:", error.response?.data?.error || error.message);
        return [];
    }
    return employees;
};


export const columns = [
    {
      name: "S No",
      selector: (row) => row.sno,
      width: "70px",
    },
    {
      name: "Name ",
      selector: (row) => row.name,
      sortable: true,
      width: "100px",
    },
    {
      name: "Image ",
      selector: (row) => row.profileImage,
      width: "90px",
    },
    {
      name: "Department ",
      selector: (row) => row.dep_name,
      width: "120px",
    },
    {
      name: "DOB ",
      selector: (row) => row.dob,
      sortable: true,
      width: "130px",
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

export const EmployeeButtons = ({ _id , onDepartmentDelete}) => {
    const navigate = useNavigate(); 
    

  return (
    <div className="flex space-x-3 ">
        <button 
         className="px-3 py-1 bg-teal-600 text-white"
         onClick={()=> navigate(`/admin-dashboard/employees/${_id}`)}
        >
            View
        </button>
        <button 
         className="px-3 py-1 bg-green-600 text-white"
         onClick={()=> navigate(`/admin-dashboard/employees/edit/${_id}`)}
        >
            Edit
        </button>
        <button 
         className="px-3 py-1 bg-yellow-600 text-white"
         onClick={()=> navigate(`/admin-dashboard/employees/salary/${_id}`)}
        >
            Salary
        </button>
      <button 
        className="px-3 py-1 bg-red-600 text-white"
        >Leave</button>
    </div>
  );
};