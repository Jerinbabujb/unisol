import prisma from "../config/prisma.js";
import cloudinary from "../lib/cloudinary.js";

import { io, userSocketMap } from "../server.js";



export const getUserForSidebar = async (req, res) => {
  try {
    const userId = req.user.id;
    const getUsers= await prisma.connection.findMany({
      where:{
        OR:[
          {senderId:userId},
          {receiverId:userId}
        ]
        
      },
      select:{
          senderId:true,
          receiverId:true
        }
    });
    const ids=getUsers.map(id=>
      id.senderId===userId?id.receiverId:id.senderId
    );
    // 1. Get all users except logged-in user
    const users = await prisma.user.findMany({
      where: {
        id: { in:ids }
      },
      select: {
        id: true,
        fullName: true,
        avatar: true,
        bio: true,
        mood:true,
        instagram:true,
        facebook:true,
        interest:true
      }
    });

    // Count unseen messages per user
    const unseenMessages = {};

    await Promise.all(
      users.map(async (user) => {
        const count = await prisma.message.count({
          where: {
            senderId: user.id,
            receiverId: userId,
            seen: false
          }
        });

        if (count > 0) {
          unseenMessages[user.id] = count;
        }
      })
    );

    res.json({
      success: true,
      users,
      unseenMessages
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


export const allSongs = async (req,res) => {
  try{
    const songs= await prisma.song.findMany({
      select:{
      id:true,
      song_name:true,
      song_url:true,
      duration:true
      },
    })
   res.status(200).json({ success: true, songs: songs || [] });
  }
  catch(error){
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getMessages = async (req, res) => {
  try {
    const selectedUserId = req.params.id;
    const myId = req.user.id;

    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: selectedUserId, receiverId: myId },
          { senderId: myId, receiverId: selectedUserId }
        ]
      },
      orderBy: { createdAt: "asc" }
    });

    await prisma.message.updateMany({
      where: {
        senderId: selectedUserId,
        receiverId: myId,
        seen: false
      },
      data: { seen: true }
    });

    res.json({ success: true, messages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



export const markMessageAsSeen = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.message.update({
      where: { id },
      data: { seen: true }
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



export const connectionRequest = async (req, res) => {
  try {

    // 1. Match your variable names exactly to your schema fields
    const senderId = req.user.id;
    const receiverId = req.params.id;
    let {status} = req.body;
    console.log(senderId);
    console.log("backedn :", status);
    let updateStatus=null;
    let request=null;
    // 2. Check for existing request
    const existingRequest = await prisma.connection.findFirst({
      where: {
        OR: [
          { senderId: receiverId, receiverId: senderId }
        ]
      }
    });
    const connectionId = existingRequest?.id

    if (existingRequest) {
      updateStatus=await prisma.connection.update({
        where: {id:connectionId},
        data:{
        status:status
        }
      })
    }
   else{
    

    // 3. Create the record
    request = await prisma.connection.create({
      data: {
        senderId: senderId,
        receiverId: receiverId,
        status: status
      }
    });
  }

    res.json({ success: true, request, updateStatus});
  } catch (error) {
    // CRITICAL: This will print the actual error to your terminal
    console.error("PRISMA ERROR:", error); 
    res.status(500).json({ success: false, message: error.message });
  }
};

export const requestCheck = async(req,res) =>{
  try{
    const senderId= req.user.id;
    const receiverId = req.params.id;
    console.log(receiverId);
    const request = await prisma.connection.findFirst({
      where:{
        OR:[
          { senderId: senderId, receiverId: receiverId },
          { senderId: receiverId, receiverId: senderId }
        ]
      }
    });
    if(request){
      return res.json({success:true, recerverId:request.receiverId, senderId:request.senderId, request})
    }
  }
  catch (error) {
    // CRITICAL: This will print the actual error to your terminal
    console.error("PRISMA ERROR:", error); 
    res.status(500).json({ success: false, message: error.message });
  }
}


export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const receiverId = req.params.id;
    const senderId = req.user.id;

    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = await prisma.message.create({
      data: {
        senderId,
        receiverId,
        text,
        image: imageUrl
      }
    });

    const receiverSocketId = userSocketMap[receiverId];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.json({ success: true, newMessage });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const privacy=async(req,res)=>{
    try{
        const {field,state}=req.body;
        const senderId=req.user.id;
        const receiverId= req.params.id;
        const privacy= await prisma.privacy.upsert({
            where:{
                senderId_receiverId:{senderId,receiverId}
            },
            update:{
              [field]:state
            },
            create:{
              senderId,
              receiverId,
              [field]:state,
              instagramPreference: field === "instagramPreference" ? state : false,
    facebookPreference: field === "facebookPreference" ? state : false
            }
          });

            res.json({success:true,privacy})
        }
    
    catch (error) {
        console.error("UPDATE ERROR:", error);
        res.json({ success: false, message: error.message });
    }
}

export const privacyCheck=async(req,res)=>{
  try{
    const senderId=req.user.id;
    const receiverId=req.params.id;
    const privacyCheck= await prisma.privacy.findUnique({
      where:{
        senderId_receiverId:{senderId:receiverId,receiverId:senderId}
      },
      select:{
        senderId:true,
        receiverId:true,
        instagramPreference:true,
        facebookPreference:true
      }
    })
    res.json({success:true,privacyCheck,senderId,receiverId})
  }
  catch (error) {
        console.error("UPDATE ERROR:", error);
        res.json({ success: false, message: error.message });
    }
}
export const privacyToggle=async(req,res)=>{
  try{
    const senderId=req.user.id;
    const receiverId=req.params.id;
    const privacyToggle= await prisma.privacy.findUnique({
      where:{
        senderId_receiverId:{senderId,receiverId}
      },
      select:{
        senderId:true,
        receiverId:true,
        instagramPreference:true,
        facebookPreference:true
      }
    })
    res.json({success:true,privacyToggle,senderId,receiverId})
  }
  catch (error) {
        console.error("UPDATE ERROR:", error);
        res.json({ success: false, message: error.message });
    }
}

