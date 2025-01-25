import express from 'express'
import { login ,verify } from '../controllers/authController.js';

const routes = express.Router()

routes.post('/login', login );
routes.post('/verify', verify );


export default routes