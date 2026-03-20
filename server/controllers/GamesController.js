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