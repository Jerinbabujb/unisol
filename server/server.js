import express from "express";
import "dotenv/config";
import cors from 'cors';
import http from 'http';
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";
import gamesRouter from "./routes/gamesRoutes.js";

const app=express();
const server= http.createServer(app);

export const io=new Server(server,{
    cors:{origin:"*"}
})

export const userSocketMap = {};

io.on("connection", (socket) => {
  const userId = socket.handshake.auth?.userId;

 console.log("user connected",userId);

    if(userId) userSocketMap[userId]=socket.id;
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("🔴 USER DISCONNECTED:", userId);
    io.emit("getOnlineUsers",Object.keys(userSocketMap));
    if (userId) delete userSocketMap[userId];
  });
  /* ---------------- MUSIC INVITE ---------------- */
socket.on("music-invite", ({ to, songUrl, songName }) => {
  const receiverSocketId = userSocketMap[to];

  if (receiverSocketId) {
    io.to(receiverSocketId).emit("music-invite", {
      from: userId,
      songUrl:songUrl,
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
});


app.use(express.json( {limit:"4mb"}));
app.use(cors());
app.use("/api/status", (req,res)=>
res.send("server is live"));

app.use("/api/auth",userRouter);
app.use("/api/messages",messageRouter);
app.use("/api/games/",gamesRouter);
const port=process.env.PORT || 5000;

server.listen(port,()=>console.log("server is running on "+port))



