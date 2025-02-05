import mongoose, { Schema } from "mongoose";

const leaveSchema = new Schema({
    employeeId : { type: Schema.Types.ObjectId, ref: 'Employee', required: true},
    leaveType: { type: String, 
        required: true, 
        enum : [ "Paternity Leave", "Maternity Leave", "Vacation Leave", "Sick Leave"]
    },
    startDate: { type: Date, required: true},
    endDate: { type: Date, required: true},
    reason: { type: String, required: true},
    status: { 
        type: String, 
        default: "Pending", 
        enum: ["Pending", "Approved", "Denied"]
    },
    appliedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Leave = mongoose.model('Leave', leaveSchema);
export default Leave;