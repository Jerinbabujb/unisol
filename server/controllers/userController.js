import cloudinary from "../lib/cloudinary.js";
import generateToken from "../lib/utils.js";
import bcrypt from 'bcryptjs';
import prisma from "../config/prisma.js"; // Use the shared instance

// Import the matchmaking engine utility
import { updateUserEmbedding } from "../utils/generateEmbedding.js";

export const signup = async (req, res) => {
    const {
        email, fullName, password, bio, birthday, gender, interest, googleId, avatar,
        mobileNumber, horoscope, primaryNeurotype, status, preferredMatch, mbtiType,
        attachmentStyle, beliefSystem, intentions, experienceLevel, topArtists,
        favoriteGenres, uiTheme, prefferGender
    } = req.body;

    try {
        // Validation
        if (!email || !fullName) {
            return res.json({ success: false, message: "Email and Name are required" });
        }

        // Password hashing
        let hashedPassword = null;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }

        // Convert interests safely
        let interestsArray = [];
        if (Array.isArray(interest)) {
            interestsArray = interest;
        } else if (typeof interest === "string") {
            interestsArray = interest.split(",").map((item) => item.trim()).filter(Boolean);
        }

        // UPSERT USER
        const user = await prisma.user.upsert({
            where: { email: email },
            update: {
                googleId: googleId || undefined,
                bio: bio || undefined,
                gender: gender || undefined,
                mobileNumber: mobileNumber || undefined,
                horoscope: horoscope || undefined,
                primaryNeurotype: primaryNeurotype || undefined,
                status: status || undefined,
                preferredMatch: preferredMatch || undefined,
                mbtiType: mbtiType || undefined,
                attachmentStyle: attachmentStyle || undefined,
                beliefSystem: beliefSystem || undefined,
                intentions: intentions || undefined,
                experienceLevel: experienceLevel || undefined,
                topArtists: topArtists || undefined,
                favoriteGenres: favoriteGenres || undefined,
                uiTheme: uiTheme || undefined,
                avatar: avatar || undefined,
                birthday: birthday ? new Date(birthday) : undefined,
                interest: interestsArray,
                prefferGender: prefferGender || undefined,
                profileCompleted: true,
            },
            create: {
                email, fullName, password: hashedPassword, googleId, bio, gender, mobileNumber,
                horoscope, birthday: birthday ? new Date(birthday) : null, interest: interestsArray,
                primaryNeurotype: primaryNeurotype || [], preferredMatch: preferredMatch || [],
                topArtists: topArtists || [], favoriteGenres: favoriteGenres || [], status, mbtiType,
                attachmentStyle, beliefSystem, intentions, experienceLevel, uiTheme, avatar,
                prefferGender: prefferGender || undefined,
                profileCompleted: true,
            },
        });

        // Generate JWT Token
        const token = generateToken(user.id);

        // 🔥 MATCHMAKING TRIGGER: Generate the vector embedding in the background
        // We don't await this so the user gets logged in instantly
        updateUserEmbedding(user.id).catch(err => console.error("Embedding Generation Error:", err));

        res.json({
            success: true,
            userData: user,
            token,
            message: user.googleId ? "Google login successful" : "Account created successfully",
        });

    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password, googleId } = req.body;
        let user = null;

        if (!googleId) {
            user = await prisma.user.findUnique({ where: { email } });
            if (!user) return res.json({ success: false, message: "account doesn't exist" });

            const isPassword = await bcrypt.compare(password, user.password);
            if (!isPassword) return res.json({ success: false, message: "password is not correct" });
        } else {
            user = await prisma.user.findUnique({ where: { googleId } });
            if (!user) return res.json({ success: false, message: "No user found with this Google account. Please sign up first." });
        }

        const token = generateToken(user.id);
        res.json({ success: true, userData: user, token, message: "logged in successfully" });

    } catch (error) {
        console.error("Login Controller Error:", error);
        res.json({ success: false, error: error.message });
    }
};

export const checkAuth = (req, res) => {
    try {
        res.json({ success: true, user: req.user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const { fullName, avatar, bio, mood, instagram, facebook, interest, images } = req.body;
        const userId = req.user.id;

        let profilePicUrl = avatar;
        if (avatar && avatar.startsWith('data:image')) {
            const upload = await cloudinary.uploader.upload(avatar);
            profilePicUrl = upload.secure_url;
        }

        let uploadedImages = [];
        if (Array.isArray(images)) {
            for (const img of images) {
                const src = img.src || img;
                if (typeof src === "string" && src.startsWith("data:image")) {
                    const upload = await cloudinary.uploader.upload(src);
                    uploadedImages.push(upload.secure_url);
                } else {
                    uploadedImages.push(src);
                }
            }
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                fullName,
                bio,
                mood,
                avatar: profilePicUrl,
                instagram,
                facebook,
                interest: interest,
                images: uploadedImages
            },
        });

        // 🔥 MATCHMAKING TRIGGER: Update the vector embedding in the background
        updateUserEmbedding(updatedUser.id).catch(err => console.error("Embedding Update Error:", err));

        res.json({ success: true, user: updatedUser });
    } catch (error) {
        console.error("UPDATE ERROR:", error);
        res.json({ success: false, message: error.message });
    }
};