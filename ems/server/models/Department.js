import mongoose from "mongoose"

const departmentSchema =  mongoose.Schema({
    dep_name: {type: String, required: true},
    description: {type: String},
    createAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

const Department = mongoose.model('Department', departmentSchema)
export default Department