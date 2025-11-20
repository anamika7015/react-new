import  userModel  from "../model/userModel.js";
import user from "../models/userModels.js";

export const register = async(req,res) =>{
    try {
         const {name,email,password} = req.body;
     if(!name || !email || !password){
         return res.json({success:false, message:"All fields are required"});

     }
        const existingUser = await userModel.findOne({email});
        if(!existingUser){
            return res.json({success:false, message:"User already exists"});
        }
        const hashPassword = await bcrypt.hash(password,10);
        const newUser = new userModel({
            name,
            email,
            password: hashPassword
        });
        const response = await newUser.save();
        res.json({success:true, message:"User registered successfully"}, response);
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error in registering user"});
        
    }
}

//login controller

export const login = async(req,res) =>{
    try {
         const {email,password} = req.body;
     if( !email || !password){
         return res.json({success:false, message:"All fields are required"});

     }
        const existingUser = await userModel.findOne({email});
        if(!existingUser){
            return res.json({success:false, message:"User already exists"});
        }
       const matchpassword = await bcrypt.compare(password, existingUser.password);
       if(!matchpassword){
        return res.json({success:false, message:"Invalid credentials"});
       }
         res.json({success:true, message:"User logged in successfully", existingUser});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error in registering user"});
        
    }
}
