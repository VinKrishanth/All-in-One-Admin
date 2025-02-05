import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addLeave, getLeave } from '../controllers/LeaveController.js';


const router = express.Router();

router.post('/add', authMiddleware, addLeave) 
router.get('/:id', authMiddleware, getLeave) 


export default router
