import express from 'express'
import cors from 'cors'
import connectDB from "./config/mongodb.js"
import authRouter from "./routes/auth.js"
import departmentRouter from "./routes/department.js"
import employeeRouter from "./routes/employee.js"
import leaveRouter from "./routes/Leave.js"
import settingRouter from "./routes/Setting.js"
import verify from "./routes/auth.js"
import authMiddleware from "./middleware/authMiddleware.js"
import salaryRouter from "./routes/salary.js"

const app = express()
app.use(cors())
app.use(express.json())
// we can use frontend uploads folder
app.use(express.static('public/uploads'))

connectDB()
app.use('/api/auth', authRouter)
app.use('/api/auth', authMiddleware, verify)
app.use('/api/department', departmentRouter)
app.use('/api/employee', employeeRouter)
app.use('/api/salary', salaryRouter)
app.use('/api/leave', leaveRouter)
app.use('/api/setting', settingRouter)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
