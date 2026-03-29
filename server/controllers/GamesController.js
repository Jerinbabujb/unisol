import prisma from "../config/prisma.js";


export const getGames=async(req,res)=>{
    try{
        const games= await prisma.games.findMany({
            select:{
                id:true,
                icon:true,
                name:true
            }
        })
        res.json({success:true,games})
    }
    catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}


export const emojiCharades=async(req,res)=>{
    try{
        const questions=await prisma.EmojiCharades.findMany({
            select:{
                id:true,
                questions:true,
                answer:true
            }
        })
        res.json({success:true,questions})
    }
    catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}


export const getUser=async(req,res)=>{
    try{
        const {userId}= req.query;
        const user= await prisma.User.findFirst({
            where:{id:userId},
            select:{
                fullName:true,
                avatar:true
            }
        });
        res.json({success:true,user});
    }
    catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}


export const emojiCharadesAnswers=async(req,res)=>{
    try{
        const currentUserId = req.user.id;
        const {userId}= req.body;
        const {answers}= req.body;
        const {score}=req.body;
        
        const existing= await prisma.Scoring.findUnique({
            where:{
                senderId_receiverId:{
                    senderId:currentUserId,receiverId:userId
                }
            }
        });
        const isSender= existing?.senderId===currentUserId;
        let updateData={};
        let createData={
            senderId:currentUserId,
                receiverId:userId,
                senderAnswer:[],
                receiverAnswer:[],
                senderScore:0,
                receiverScore:0
        };
        if(answers){
        if(isSender){
            updateData.senderAnswer={
                push:answers,
            };
            updateData.senderScore={
               set:score,
            }
            createData.senderAnswer=[answers]
        }
        else{
            updateData.receiverAnswer={
                push:answers
            };
        }
    }
        console.log("req.body",req.body);
        const updateAnswer=await prisma.Scoring.upsert({
            where:{
                senderId_receiverId:{
                senderId:currentUserId,receiverId:userId
                }
            },
            update:updateData,
            create:createData
        })
        res.json({success:true,updateAnswer});
    }
    catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}


export const emojiCharadesScore=async(req,res)=>{
    try{
        const senderId=req.user.id;
        const {userId}= req.params;
        const scores=await prisma.Scoring.findFirst({
            where:{
                senderId:senderId,receiverId:userId
            },
            select:{
                id:true,
                senderScore:true,
                receiverScore:true,
                senderAnswer:true,
                receiverAnswer:true
            }
        });
        res.json({success:true,scores})
    }
    catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}