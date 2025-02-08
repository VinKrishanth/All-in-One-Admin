import React, { useEffect, useState } from "react";
import { classCardData } from "../../utils/NavigationLists";
import ClassCard from "./cards/ClassCard";
import MainTitle from "./title/MainTitle";
import DataTable from "react-data-table-component";
import { ClassButtons, columns } from "../../utils/ClassHelper";
import Modal from "./modal/Modal";
import { motion } from "framer-motion";
import TextInput from "../input/TextInput";
import {
  createClass,
  getClasses,
  updateClass,
  deleteClass,
} from "../../api/class/classApi.js";
import { toast } from "react-toastify";

export default function Class() {
  const [filterClass, setFilterClass] = useState("");
  const [classes, setClasses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [classData, setClassData] = useState({
    className: "",
    classSection: "",
  });

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await getClasses();
        console.log(response);
        if(response.success){
          let sno = 1;
          const data = response.message.map((cls) => ({
            _id: cls._id,
            sno: sno++,
            className: cls.className,
            classSection: cls.classSection,
            action: <ClassButtons _id={cls._id} onDelete={deleteClass} />,
          }));
          setClasses(data);
          console.log(data);
        }
      } catch (error) {
        toast.error("Failed to fetch classes!");
      }
    };

    fetchClasses();
  }, []);

  const handleAddClass = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterClass = (event) => {
    setFilterClass(event.target.value);
  };

  const handleChangeClass = (event) => {
    const { name, value } = event.target;
    setClassData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await createClass(classData);

      if (response.success) {
        toast.success(response.message);
        setClassData({ className: "", classSection: "" });
        handleCloseModal();
      } else {
        toast.error(response.message || "Something went wrong!");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Failed to add class.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="p-8 space-y-4 overflow-hidden w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Class Management
      </h1>
      <ClassCard cardData={classCardData} />
      <div>
        <MainTitle
          label={"Add class"}
          placeholder={"Search class name"}
          onClick={handleAddClass}
          onChange={handleFilterClass}
        />
        <div className="mt-5">
          <DataTable columns={columns} data={classes} pagination  />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        header={<h2 className="text-center">Add New Class</h2>}
        body={
          <motion.form
            className="space-y-4 p-4 bg-white rounded-lg w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
          >
            <TextInput
              name="className"
              label="Class Name"
              placeholder="Enter class name"
              value={classData.className}
              onChange={handleChangeClass}
              className="w-full"
            />
            <TextInput
              name="classSection"
              label="Class Section"
              placeholder="Enter class section"
              value={classData.classSection}
              onChange={handleChangeClass}
              className="w-full"
            />
          </motion.form>
        }
        footer={
          <div className="flex justify-end gap-4">
            <motion.button
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              onClick={handleCloseModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
            >
              Add Class
            </motion.button>
          </div>
        }
      />
    </div>
  );
}
