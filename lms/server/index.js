import express from 'express'
import cors from 'cors'
import connectDB from "./config/connectionDB.js"
import authRouter from "./routers/authRouter.js"
import classRoutes from "./routers/classRoutes.js";
import contactRoutes from "./routers/contactRoutes.js";
import studentRouter from "./routers/studentRouter.js";

const app = express()
// app.use(cors())
app.use(cors({
  origin: 'https://raavanaa-tutorial.vercel.app', 
  credentials: true, 
}))

app.use(express.json())
app.use(express.static('public/uploads'))

connectDB()

// routes
app.use('/api/auth', authRouter)
app.use("/api/classes", classRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/student", studentRouter);
app.use('/api/notices', noticeRouter); 


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
