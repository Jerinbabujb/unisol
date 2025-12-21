import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.js";
import User from "../models/User.js";
import { io, userSocketMap } from "../server.js";



export const getUserForSidebar =async(req,res)=>{
    try{
        const userId=req.user._id;
        const filterdUser=await User.find({_id:{$ne: userId}}).select("-password");
        const unseenMessages={}
        const promises=filterdUser.map(async(user)=>{
            const messages= await Message.find({senderId:user._id,recieverId:userId,seen:false})
            if(messages.length>0)
                unseenMessages[user._id]=messages.length;
        });
        await Promise.all(promises);
        res.json({success:true,users:filterdUser,unseenMessages})
    }
    catch(error){
        console.log(error.message);
                res.json({success:false,messge:error.message})

    }
}


export const getMessages= async(req,res)=>{
    try{
        const {id:selectedUserId}=req.params;
        const myId= req.user._id;
        const messages= await Message.find({
            $or:[
                {senderId:selectedUserId,recieverId:myId},
                {senderId:myId,recieverId:selectedUserId}
            ]
        })
        await Message.updateMany({senderId:selectedUserId,recieverId:myId},{seen:true})
        res.json({success:true, messages})
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}


export const markMessageAsSeen=async(req,res)=>{
    try{
        const {id}=req.params;
        await Message.findByIdAndUpdate(id,{seen:true})
        res.json({success:true})
    }
      catch(error){
        res.json({success:false,message:error.message})
    }
    
}



export const sendMessage=async(req,res)=>{
    try{
        const {text,image}=req.body;
        const recieverId=req.params.id;
        const senderId=req.user._id;

        let imageUrl;
        if(image){
            const uploadResponse=await cloudinary.uploader.upload(image);
            imageUrl= uploadResponse.secure_url;
        }

      const newMessage=  await Message.create({
        senderId,
        recieverId,
        text,
        image:imageUrl
      });
      const  receiverSocketId=userSocketMap[recieverId];
      if(receiverSocketId) {io.to(receiverSocketId).emit("newMessage",newMessage)}
      res.json({success:true,newMessage});
      

    }
          catch(error){
        res.json({success:false,message:error.message})
    }
}