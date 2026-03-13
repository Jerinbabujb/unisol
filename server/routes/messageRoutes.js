import e from "express";
import { protectRoute } from "../middleware/auth.js";
import { allSongs, connectionRequest, freindRequestCheck, getMessages, getUserForSidebar, getUsers, markMessageAsSeen, privacy, privacyCheck, privacyToggle, requestCheck, sendMessage } from "../controllers/messageController.js";


const messageRouter=e.Router();

messageRouter.get("/users",protectRoute,getUserForSidebar);
messageRouter.get("/all-users",protectRoute,getUsers);
messageRouter.get("/songs",protectRoute,allSongs);
messageRouter.get("/freind-request",protectRoute,freindRequestCheck);
messageRouter.post("/request",protectRoute,connectionRequest);
messageRouter.get("/:id",protectRoute,getMessages);
messageRouter.put("/mark/:id",protectRoute,markMessageAsSeen);
messageRouter.post("/send/:id",protectRoute,sendMessage);
messageRouter.post("/request/:id",protectRoute,connectionRequest);
messageRouter.get("/check/:id", protectRoute,requestCheck);
messageRouter.post("/privacy/:id",protectRoute,privacy);
messageRouter.get("/privacycheck/:id",protectRoute,privacyCheck);
messageRouter.get("/privacytoggle/:id",protectRoute,privacyToggle);
export default messageRouter;