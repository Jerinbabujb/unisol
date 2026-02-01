import e from "express";
import { protectRoute } from "../middleware/auth.js";
import { connectionRequest, getMessages, getUserForSidebar, markMessageAsSeen, requestCheck, sendMessage } from "../controllers/messageController.js";


const messageRouter=e.Router();

messageRouter.get("/users",protectRoute,getUserForSidebar);
messageRouter.get("/:id",protectRoute,getMessages);
messageRouter.put("/mark/:id",protectRoute,markMessageAsSeen);
messageRouter.post("/send/:id",protectRoute,sendMessage);
messageRouter.post("/request/:id",protectRoute,connectionRequest);
messageRouter.get("/check/:id", protectRoute,requestCheck);
export default messageRouter;