import Department from "../models/Department.js"


const getDepartments = async (req,res) => {
    try {
        const department = await Department.find()
        return res.status(200).json({success: true, department})
    } catch (error) {
        return res.status(500).json({success: false, error: "get department server error"})
    }
}

const addDepartment = async (req, res) => {
    try {
        const { dep_name, description } = req.body 
        const newDepartment = new Department({
            dep_name,
            description
        })
        await newDepartment.save()
        return res.status(201).json({success: true, department: newDepartment})
    } catch (error) {
        return res.status(500).json({success: false, error: "add department server error"})
    }
}

const getDepartment = async (req,res) => {
    try {
        const { id } = req.params
        const department = await Department.findById({_id : id})
        return res.status(200).json({success: true, department})
    } catch (error) {
        return res.status(500).json({success: false, error: "get department server error"})
    }
}

const updateDepartment = async (req,res) => {
    try {
        const { id } = req.params
        const { dep_name, description } = req.body
        const updateDepartment = await Department.findByIdAndUpdate({_id : id},{
            dep_name, 
            description
        })
        return res.status(200).json({success: true, updateDepartment})
    } catch (error) {
        return res.status(500).json({success: false, error: "update department server error"})
    }
}
const deleteDepartment = async (req,res) => {
    try {
        const { id } = req.params
        const deleteDepartment = await Department.findByIdAndDelete({_id : id})
        return res.status(200).json({success: true, deleteDepartment})
    } catch (error) {
        return res.status(500).json({success: false, error: "Delete department server error"})
    }
}

export { addDepartment, getDepartments, getDepartment, updateDepartment, deleteDepartment } 