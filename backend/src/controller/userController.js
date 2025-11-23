import userModel from "../models/userModels.js";
import bcrypt from "bcryptjs"
import genToken from "../utils/token.js";

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

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel({
            name,
            email,
            password: hashPassword
        })

        await newUser.save();

        const token = await genToken(newUser._id)

        res.cookie("token", token ,{
            httpOnly: true
        })
        res.json({ success: true, message: " user successfully registerd " })



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
        const token = await genToken(matchPassword._id)
        res.cookie("token", token ,{
            httpOnly: true
        })
        res.json({ success: true, message: "user login successfully", token})

        

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const logout  = async (req,res)=>{
    try {
        await res.clearCookie("token")
        return  res.json({success:true , message:"logout succsfully"})
    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

export { register, login, logout }
