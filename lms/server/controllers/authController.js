import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let errors = [];
        if (!email) errors.push("Email  Field is required");
        if (!password) errors.push("Password Field is required");

        if (errors.length > 0) {
            return res.status(400).json({ success: false, message: errors });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid Password' });
        }

        const token = jwt.sign({_id: user._id , role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({
            success:true, 
            message: 'Login successful',
            token, 
            user:{_id: user._id, name: user.name,  role: user.role}
        });
    } catch (error) {
        res.status(500).json({success:false, message:error.message});
    }
}

const verify = (req, res) => {
    return res.status(200).json({success:true, user:req.user});
}

export { login, verify }