import prisma from "../config/prisma.js";
import cloudinary from "../lib/cloudinary.js";

import { io, userSocketMap } from "../server.js";



export const getUserForSidebar = async (req, res) => {
  try {
    const userId = req.user.id;

    // 1. Get all users except logged-in user
    const users = await prisma.user.findMany({
      where: {
        id: { not: userId }
      },
      select: {
        id: true,
        fullName: true,
        avatar: true,
        bio: true
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
