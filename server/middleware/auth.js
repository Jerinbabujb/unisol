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
        bio: true,
        mood: true,
        instagram: true,
        facebook: true,
        interest: true,
        images: true,
        Age: true,


        // 🔥 NEW FIELDS ADDED HERE
        gender: true,
        prefferGender: true,
        horoscope: true,
        mbtiType: true,
        attachmentStyle: true,
        humanDesign: true,
        loveLanguages: true,
        primaryNeurotype: true,
        topArtists: true,
        favoriteGenres: true,
        beliefSystem: true,
      },
    });

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    // ✅ Attach user info to request
    // Since we used 'select' above to filter out sensitive data (like passwords),
    // we can safely pass the entire 'user' object here without writing it all out manually.
    req.user = user;

    next();
  } catch (error) {
    console.error("protectRoute error:", error.message);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};