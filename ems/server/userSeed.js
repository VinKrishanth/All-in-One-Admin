import User from './models/User.js'
import bcrypt from 'bcryptjs'
import connectDB from "./config/mongodb.js"

const userRegister = async () => {
    connectDB();
    try {
        const hashPassword = await bcrypt.hash("admin",10)
        const newUser = new User({
            name: "admin",
            email: "admin@example.com",
            password: hashPassword,
            role: "admin"
        })
        await newUser.save()
    } catch (error) {
        console.log(error)
    }
}

userRegister();