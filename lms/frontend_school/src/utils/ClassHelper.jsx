import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { TiEye } from "react-icons/ti";

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
  },
  {
    name: "Class Name",
    selector: (row) => row.className,
    sortable: true,
  },
  {
    name: "Section Name",
    selector: (row) => row.classSection,
    sortable: true,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const customStyles = {
  headCells: {
    style: "bg-blue-600 text-white font-semibold text-lg p-3",
  },
  cells: {
    style: "py-3 px-4 border-b border-gray-300",
  },
  rows: {
    style: "hover:bg-gray-100 transition-all",
  },
  pagination: {
    style: "bg-gray-200 py-2 px-4 rounded-md",
  },
};

export const ClassButtons = ({ _id, onDepartmentDelete }) => {
  const navigate = useNavigate();

  // const handleDelete = async (id) => {
  //   const confirm = window.confirm('Are you sure you want to delete');
  //   if (confirm) {
  //     try {
  //       const response = await axios.delete(
  //         `http://localhost:5000/api/department/${id}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         }
  //       );
  //       if (response.data.success) {
  //         onDepartmentDelete(id);
  //       }
  //     } catch (error) {
  //       if (error.response && !error.response.data.success) {
  //         alert(error.response.data.error);
  //       }
  //     }
  //   }
  // }

  return (
    <div className="flex space-x-3 ">
      <button
        // onClick={() => navigate(`/admin-dashboard/department/${_id}`)}
      >
        <TiEye />
      </button>
      <button
        // onClick={() => navigate(`/admin-dashboard/department/${_id}`)}
      >
        <FiEdit />
      </button>
      <button
        // onClick={() => handleDelete(_id)}
      >
        <RiDeleteBinFill />
      </button>
    </div>
  );
};

