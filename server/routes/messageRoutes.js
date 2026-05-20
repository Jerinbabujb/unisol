import e from "express";
import { protectRoute } from "../middleware/auth.js";
import { allSongs, blockedUser, blockingUser, connectionRequest, createRoom, freindRequestCheck, getMessages, getprivateRoom, getPrivateRoomMessages, getRoomMessages, getUserForSidebar, getUsers, getUsersFromIds, globalRoom, globalRoomJoin, globalRoomMembers, globalRoomSendMessage, joinPrivateRoom, markMessageAsSeen, privacy, privacyCheck, privacyToggle, privateRoomInvite, privateRoomMembers, privateRoomSendMessage, requestCheck, sendMessage, unBlockingUser, userGlobalRoomExists } from "../controllers/messageController.js";


const messageRouter = e.Router();

messageRouter.get("/users", protectRoute, getUserForSidebar);
messageRouter.get("/all-users", protectRoute, getUsers);
messageRouter.get("/songs", protectRoute, allSongs);
messageRouter.get("/freind-request", protectRoute, freindRequestCheck);
messageRouter.post("/request", protectRoute, connectionRequest);
messageRouter.get("/global-rooms", protectRoute, globalRoom);
messageRouter.post("/joining", protectRoute, globalRoomJoin);
messageRouter.get('/exists', protectRoute, userGlobalRoomExists);
messageRouter.post('/members-lists', protectRoute, globalRoomMembers);
messageRouter.post('/global-send', protectRoute, globalRoomSendMessage);
messageRouter.post('/get-messages', protectRoute, getRoomMessages);
messageRouter.post('/create-room', protectRoute, createRoom);
messageRouter.get('/private-room', protectRoute, getprivateRoom);
messageRouter.post('/private-room-members', protectRoute, privateRoomMembers);
messageRouter.post('/private-room-send', protectRoute, privateRoomSendMessage);
messageRouter.post('/get-private-room-messages', protectRoute, getPrivateRoomMessages);
messageRouter.post('/join-private-room', protectRoute, joinPrivateRoom);
messageRouter.post('/private-room-invite', protectRoute, privateRoomInvite);
messageRouter.post("/blocking", protectRoute, blockingUser);
messageRouter.get("/blocked-users", protectRoute, blockedUser);
messageRouter.post("/unblocking", protectRoute, unBlockingUser);
messageRouter.post("/users-from-ids", protectRoute, getUsersFromIds);
messageRouter.get("/:id", protectRoute, getMessages);
messageRouter.put("/mark/:id", protectRoute, markMessageAsSeen);
messageRouter.post("/send/:id", protectRoute, sendMessage);
messageRouter.post("/request/:id", protectRoute, connectionRequest);
messageRouter.get("/check/:id", protectRoute, requestCheck);
messageRouter.post("/privacy/:id", protectRoute, privacy);
messageRouter.get("/privacycheck/:id", protectRoute, privacyCheck);
messageRouter.get("/privacytoggle/:id", protectRoute, privacyToggle);
export default messageRouter;