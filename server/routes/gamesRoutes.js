import e from "express";
import { protectRoute } from "../middleware/auth.js";
import { emojiCharades, getGames, getUser } from "../controllers/GamesController.js";


const gamesRouter=e.Router();

gamesRouter.get("/games-list",protectRoute,getGames);
gamesRouter.get("/emoji-charades-questions",protectRoute,emojiCharades);
gamesRouter.get("/get-user",protectRoute,getUser);

export default gamesRouter;