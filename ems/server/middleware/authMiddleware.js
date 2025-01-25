import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const verifyUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(token){
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if(!decoded){
                return res.status(403).json({ success: false, message: 'Invalid Token' });
            }

            const user = await User.findById({_id: decoded._id}).select('-password');

            if(!user){
                return res.status(404).json({ success: false, message: 'User not found' });
            }
            req.user = user;
            next();
        } else {
            return res.status(403).json({ success: false, message: 'No token provided.' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
}

export default verifyUser;