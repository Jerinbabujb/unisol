import e from "express";
import { protectRoute } from "../middleware/auth.js";
import { emojiCharades, emojiCharadesAnswers, emojiCharadesScore, getGames, getUser } from "../controllers/GamesController.js";


const gamesRouter=e.Router();

gamesRouter.get("/games-list",getGames);
gamesRouter.get("/emoji-charades-questions",protectRoute,emojiCharades);
gamesRouter.get("/get-user",protectRoute,getUser);
gamesRouter.post("/post-answers",protectRoute,emojiCharadesAnswers);
gamesRouter.get("get-scores",protectRoute,emojiCharadesScore);

export default gamesRouter;