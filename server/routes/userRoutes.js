import e from "express";
import { checkAuth, login, signup, updateProfile } from "../controllers/userController.js";
import { protectRoute } from "../middleware/auth.js";

const userRouter=e.Router();

userRouter.post('/signup',signup)
userRouter.post('/login',login)
userRouter.put('/update-profile',protectRoute, updateProfile)
userRouter.get('/check',protectRoute, checkAuth)


export default userRouter;