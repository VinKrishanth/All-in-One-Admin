import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from "./config/mongodb.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

connectDB()
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
