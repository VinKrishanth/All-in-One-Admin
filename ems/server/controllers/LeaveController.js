import Employee from "../models/Employee.js"
import Leave from "../models/Leave.js"

const getLeave = async (req, res) => {
    try {
        const {id} = req.params;
        const employee = await Employee.findOne({userId: id})

        const leaves = await Leave.find({employeeId: employee._id})

        return res.status(200).json({ success: true, leaves })
    } catch (error) {
        return res.status(500).json({ success:false ,error:  "Error get salary"})
    }
}
const addLeave = async (req, res) => {
    try {
        const { userId, leaveType, startDate, endDate, reason} = req.body
        const employee = await Employee.findOne({ userId})
        const newLeave = new Leave({
            employeeId: employee._id,
            leaveType,
            startDate,
            endDate,
            reason
        })

        await newLeave.save()
        return res.status(201).json({ success: true})
    } catch (error) {
        return res.status(500).json({ success:false ,error:  "leave add server error"})
    }
}

export { addLeave, getLeave }