import userModel from "../models/userModels.js";
import bcrypt from "bcryptjs"

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        if (!name || !email || !password) {
            return res.json({ success: false, message: "all fields required" })
        }
        const existUser = await userModel.findOne({ email });
        if (existUser) {
            return res.json({ success: false, message: "user already exist" })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await userModel({
            name,
            email,
            password: hashPassword
        })
        const response = await newUser.save();
        res.json({ success: true, message: " user successfully registerd ", response })


    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


//login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        if (!email || !password) {
            return res.json({ success: false, message: "all fields required" })
        }
        const existUser = await userModel.findOne({ email });
        if (!existUser) {
            return res.json({ success: false, message: "user not exist" })
        }
        const matchPassword = await bcrypt.compare(password, existUser.password)
        if (!matchPassword) {
            return res.json({ success: false, message: "invalid credential" })
        }
        res.json({ success: true, message: "user login successfully" })


    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export { register, login }
