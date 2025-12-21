import cloudinary from "../lib/cloudinary.js";
import generateToken from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from 'bcryptjs';

export const signup = async (req,res)=>{
   const {email, fullName, password, bio}= req.body;

   try{
    if(!email|| !fullName|| !password|| !bio){
        return res.json({success:false,message:"missing details"})
    }
    const user=await User.findOne({email});
    if(user){
        return res.json({success:false,message:"Account already exist"})
    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);

        const newUser= await User.create({
            email,
            fullName,
            password: hashedPassword,
            bio
        });

        const token= generateToken(newUser._id)
        res.json({success:true, userData:newUser,token,message:"account created successfully"})
   }
   catch(error){
    res.json({error});
   }
};



export const login = async (req, res) =>{
   try{
    const {email, password}= req.body;
    
    const user=await User.findOne({email});
     if(!user.email){
        return res.json({success:false,message:"account doesn't exist"})
    }
    const isPassword= await bcrypt.compare(password,user.password);
    if(!isPassword){
        return res.json({success:false,message:"password is not correct"})
    }
    const token= generateToken(user._id)
        res.json({success:true, userData:user,token,message:"logged in sucessfully"})
   }
   catch(error)
   {
    res.json({error});
   }
}


export const checkAuth=(req,res)=>{
    res.json({success:true,user:req.user});
}


export const updateProfile=async (req,res)=>{
    try{
        const {fullName,profilePic,bio}=req.body;
        const userId=req.user._id;

        let updateUser;
        if(!profilePic){
            updateUser=await User.findByIdAndUpdate(userId,{fullName,bio},{new:true});
        }
        else{
            const upload= await cloudinary.uploader.upload(profilePic);

            updateUser=await User.findByIdAndUpdate(userId,{profilePic:upload.secure_url, fullName,bio},{new:true});
        }
        res.json({success:true,user:updateUser});
    }
    catch(error){
        res.json({success:false,message:error.message});
    }
}