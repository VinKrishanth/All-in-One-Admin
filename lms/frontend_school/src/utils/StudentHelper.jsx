import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { TiEye } from "react-icons/ti";

// Reusable header cell component
const HeaderCell = ({ children, width }) => (
  <div className={`${headerStyle} w-[${width}] text-center`}>
    {children}
  </div>
);

const cellStyle = "border-gray-300 p-1 text-sm";
const headerStyle = "border border-gray-400 bg-gray-200 p-2 text-sm font-semibold text-center";

export const columns = [
  {
    name: "S No",
    selector: (row) => row.id,
    cell: (row) => <div className={`${cellStyle} w-[50px] text-center`}>{row.id}</div>,
    header: () => <HeaderCell width="50px">S No</HeaderCell>,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    cell: (row) => <div className={`${cellStyle} w-[200px]`}>{row.name}</div>,
    header: () => <HeaderCell width="200px">Name</HeaderCell>,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
    cell: (row) => <div className={`${cellStyle} w-[180px]`}>{row.email}</div>,
    header: () => <HeaderCell width="180px">Email</HeaderCell>,
  },
  {
    name: "Gender",
    selector: (row) => row.gender,
    cell: (row) => (
      <div
        className={`${cellStyle} w-[80px] ${
          row.gender === "Male"
            ? "text-blue-600"
            : row.gender === "Female"
            ? "text-pink-600"
            : "text-purple-600"
        }`}
      >
        {row.gender}
      </div>
    ),
    header: () => <HeaderCell width="80px">Gender</HeaderCell>,
  },
  {
    name: "DOB",
    selector: (row) => row.dateOfBirth,
    cell: (row) => <div className={`${cellStyle} w-[100px]`}>{row.dateOfBirth}</div>,
    header: () => <HeaderCell width="100px">DOB</HeaderCell>,
  },
  {
    name: "Joined",
    selector: (row) => row.joinDate,
    cell: (row) => <div className={`${cellStyle} w-[100px]`}>{row.joinDate}</div>,
    header: () => <HeaderCell width="100px">Joined</HeaderCell>,
  },
  {
    name: "Address",
    selector: (row) => row.address,
    cell: (row) => <div className={`${cellStyle} w-[200px] truncate`}>{row.address}</div>,
    header: () => <HeaderCell width="200px">Address</HeaderCell>,
  },
  {
    name: "Action",
    selector: (row) => row.action,
    cell: (row) => <StudentsButton _id={row.id} />,
    header: () => <HeaderCell width="100px">Action</HeaderCell>,
  },
];

// Reusable button actions for each row
export const StudentsButton = ({ _id }) => {
  return (
    <div className="flex space-x-1 justify-center items-center">
      <button
        onClick={() => console.log("View Student ID:", _id)}
        className="p-1 bg-gray-200 hover:bg-gray-300 rounded-md transition-all"
      >
        <TiEye className="text-blue-500 text-sm" />
      </button>
      <button
        onClick={() => console.log("Edit Student ID:", _id)}
        className="p-1 bg-gray-200 hover:bg-gray-300 rounded-md transition-all"
      >
        <FiEdit className="text-green-500 text-sm" />
      </button>
      <button
        onClick={() => console.log("Delete Student ID:", _id)}
        className="p-1 bg-gray-200 hover:bg-gray-300 rounded-md transition-all"
      >
        <RiDeleteBinFill className="text-red-500 text-sm" />
      </button>
    </div>
  );
};

// Custom table styles for better presentation
export const customStyles = {
  headRow: {
    style: {
      position: "sticky",
      top: 0,
      backgroundColor: "#f8f9fa",
      zIndex: 10,
      fontWeight: "bold",
      borderBottom: "2px solid #ddd",
    },
  },
  headCells: {
    style: {
      padding: "10px",
      textAlign: "center",
      fontSize: "14px",
      borderRight: "1px solid #ddd",
    },
  },
  rows: {
    style: {
      fontSize: "12px",
      textAlign: "right",
    },
  },
  cells: {
    style: {
      padding: "8px 4px",
      textAlign: "left",
      fontSize: "12px",
      borderRight: "1px solid #ddd",
    },
  },
};
