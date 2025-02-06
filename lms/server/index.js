import express from 'express'
import cors from 'cors'
import connectDB from "./config/connectionDB.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public/uploads'))

connectDB()



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
