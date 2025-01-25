import express from 'express'
import cors from 'cors'
import connectDB from "./config/mongodb.js"
import authRouter from "./routes/auth.js"
import verify from "./routes/auth.js"
import authMiddleware from "./middleware/authMiddleware.js"

const app = express()
app.use(cors())
app.use(express.json())

connectDB()
app.use('/api/auth', authRouter)
app.use('/api/auth', authMiddleware, verify)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
