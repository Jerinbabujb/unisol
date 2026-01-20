import prisma from "../config/prisma.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.headers.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Prisma user lookup by UUID
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        fullName: true,
        email: true,
        avatar: true,
      },
    });

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    // ✅ Attach user info to request
    req.user = { id: user.id, fullName: user.fullName, email: user.email, avatar:user.avatar };

    next();
  } catch (error) {
    console.error("protectRoute error:", error.message);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
