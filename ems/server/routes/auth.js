import express from 'express'
import { login ,verify } from '../controllers/authController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const routes = express.Router()

routes.post('/login', login );
routes.get('/verify', authMiddleware, verify );


export default routes