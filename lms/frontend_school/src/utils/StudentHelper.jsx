import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { TiEye } from "react-icons/ti";


export const columns = [
  {
    name: "S No",
    selector: (row) => row.id,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Gender",
    selector: (row) => row.gender,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.dateOfBirth,
  },
  {
    name: "Joined Date",
    selector: (row) => row.joinDate,
  },
  {
    name: "Address",
    selector: (row) => row.address,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const StudentsButton = ({ _id }) => {
  return (
    <div className="flex space-x-3 ">
      <button
        onClick={() => {
          console.log("Student ID: ", _id);
        }}
      >
        <TiEye className="scale-125"/>
      </button>
      <button
        onClick={() => {
          console.log("Student ID: ", _id);
        }}
      >
        <FiEdit />
      </button>
      <button
        onClick={() => {
          console.log("Student ID: ", _id);
        }}
      >
        <RiDeleteBinFill />
      </button>
    </div>
  );
};
