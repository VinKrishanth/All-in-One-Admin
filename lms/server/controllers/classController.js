import Class from "../models/Class.js";

// 🔹 Get All Classes
export const getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json({
      success: true,
      message: classes
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching classes" });
  }
};

export const createClass = async (req, res) => {
  try {
    const { className, classSection } = req.body;

    // 🔹 Validation: Check if className or classSection is empty
    if (!className) {
      return res.status(400).json({
        success: false,
        message: "Class name is required",
      });
    }
    if (!classSection) {
      return res.status(400).json({
        success: false,
        message: "Class section is required",
      });
    }

    // 🔹 Check if class already exists (optional)
    const existingClass = await Class.findOne({ className, classSection });
    if (existingClass) {
      return res.status(400).json({
        success: false,
        message: "Class with this name and section already exists",
      });
    }

    // 🔹 Create and save the new class
    const newClass = new Class({ className, classSection });
    await newClass.save();

    res.status(201).json({
      success: true,
      message: "Class created successfully",
      data: newClass,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};




// 🔹 Update Class
export const updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClass = await Class.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedClass);
  } catch (error) {
    res.status(400).json({ message: "Error updating class" });
  }
};

// 🔹 Delete Class
export const deleteClass = async (req, res) => {
  try {
    const { id } = req.params;
    await Class.findByIdAndDelete(id);
    res.json({ message: "Class deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting class" });
  }
};
