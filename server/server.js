import express from "express";
import "dotenv/config";
import cors from 'cors';
import http from 'http';
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";
import gamesRouter from "./routes/gamesRoutes.js";
import prisma from "./config/prisma.js";
import { text } from "stream/consumers";

const app = express();
const server = http.createServer(app);

export const io = new Server(server, {
  cors: { origin: "*" }
})

export const userSocketMap = {};

io.on("connection", (socket) => {
  const userId = socket.handshake.auth?.userId;

  console.log("user connected", userId);

  if (userId) userSocketMap[userId] = socket.id;
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("🔴 USER DISCONNECTED:", userId);
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    if (userId) delete userSocketMap[userId];
  });
  /* ---------------- MUSIC INVITE ---------------- */
  socket.on("music-invite", ({ to, songUrl, songName }) => {
    const receiverSocketId = userSocketMap[to];

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("music-invite", {
        from: userId,
        songUrl: songUrl,
        songName,
      });
    }
  });
  socket.on("music-accepted", ({ to, songUrl }) => {
    const receiverSocketId = userSocketMap[to];

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("music-start", {
        songUrl,
        startTime: Date.now(),
        from: userId,
      });
    }
  });
  socket.on("music-sync", ({ to, action, currentTime }) => {
    const receiverSocketId = userSocketMap[to];

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("music-sync", {
        action,
        currentTime
      });
    }
  });
  socket.on("music-rejected", ({ to }) => {
    const receiverSocketId = userSocketMap[to];

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("music-rejected");
    }
  });

  /* ---------------- CALL USER ---------------- */
  socket.on("call-user", ({ to, name, offer, type }) => {
    console.log("📞 CALL USER MAP:", userSocketMap);
    console.log("📞 CALLING TO:", to);

    const receiverSocketId = userSocketMap[to];

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("incoming-call", {
        from: userId,
        name,
        offer,
        type,
      });
    } else {
      console.log("❌ RECEIVER OFFLINE:", to);
    }
  });


  /* ---------------- GROUP CHAT  ---------------- */

  socket.on('join-room', (roomid) => {
    socket.join(roomid);
    console.log("user joined room", roomid);
  });
  socket.on("send_room_message", async ({ roomId, senderId, text }) => {
    const message = await prisma.globalChatMessage.create({
      data: {
        roomId,
        senderId,
        text
      }
    });
    io.to(roomId).emit("new_room_message", message);
  })

  /*---Video Stream ---*/

  socket.on("video-invite",({to, videoUrl})=>{
    const receiverSocketId=userSocketMap[userId];
    if(receiverSocketId){
      io.to(receiverSocketId).emit("video-invite",{
        from:userId,
        videoUrl
      })
    }
  })

  socket.on("video-accept",({to,videoUrl})=>{
    const receiverSocketId= userSocketMap[userId];
    if(receiverSocketId){
      io.to(receiverSocketId).emit("video-accpet",{
        from:userId,
        startTime:Date.now(),
        videoUrl
      })
    }
  });
  socket.on("video-reject",({to})=>{
    const receiverSocketId=userSocketMap[userId];
    if(receiverSocketId){
      io.to(receiverSocketId).emit("video-reject");
    }
  });
  socket.on("video-sync",({to,action,currentTime})=>{
    const receiverSocketId= userSocketMap[userId];
    if(receiverSocketId){
      io.to(receiverSocketId).emit("video-sync",{
        action,
        currentTime
      })
    }
  })

});


app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors());
app.use("/api/status", (req, res) =>
  res.send("server is live"));

app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);
app.use("/api/games", gamesRouter);
const port = process.env.PORT || 5000;

server.listen(port, () => console.log("server is running on " + port))



