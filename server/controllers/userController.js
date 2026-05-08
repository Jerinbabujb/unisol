import cloudinary from "../lib/cloudinary.js";
import generateToken from "../lib/utils.js";
import bcrypt from 'bcryptjs';
import prisma from "../config/prisma.js"; // Use the shared instance



export const signup = async (req, res) => {
    const {
        email,
        fullName,
        password,
        bio,
        birthday,
        gender,
        interest,
        googleId,
        avatar,

        // New Fields
        mobileNumber,
        horoscope,
        primaryNeurotype,
        status,
        preferredMatch,
        mbtiType,
        attachmentStyle,
        beliefSystem,
        intentions,
        experienceLevel,
        topArtists,
        favoriteGenres,
        uiTheme,
    } = req.body;

    try {
        // Validation
        if (!email || !fullName) {
            return res.json({
                success: false,
                message: "Email and Name are required",
            });
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
            interestsArray = interest
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean);
        }

        // UPSERT USER
        const user = await prisma.user.upsert({
            where: {
                email: email,
            },

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
                profileCompleted: true,
            },

            create: {
                email,
                fullName,
                password: hashedPassword,
                googleId,

                bio,
                gender,
                mobileNumber,
                horoscope,

                birthday: birthday ? new Date(birthday) : null,

                interest: interestsArray,

                primaryNeurotype: primaryNeurotype || [],
                preferredMatch: preferredMatch || [],
                topArtists: topArtists || [],
                favoriteGenres: favoriteGenres || [],

                status,
                mbtiType,
                attachmentStyle,
                beliefSystem,
                intentions,
                experienceLevel,
                uiTheme,

                avatar,

                profileCompleted: true,
            },
        });

        // Generate JWT Token
        const token = generateToken(user.id);

        res.json({
            success: true,
            userData: user,
            token,
            message: user.googleId
                ? "Google login successful"
                : "Account created successfully",
        });

    } catch (error) {
        console.error("Signup Error:", error);

        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password, googleId } = req.body;
        let user = null; // 1. Initialize once

        if (!googleId) {
            // Standard Email/Password Login
            user = await prisma.user.findUnique({ where: { email } }); // 2. Assign (no 'const')

            if (!user) {
                return res.json({ success: false, message: "account doesn't exist" });
            }

            const isPassword = await bcrypt.compare(password, user.password);
            if (!isPassword) {
                return res.json({ success: false, message: "password is not correct" });
            }
        }
        else {
            // 3. Google Login logic - Assign to the outer 'user' variable
            user = await prisma.user.findUnique({ where: { googleId } });

            if (!user) {
                return res.json({
                    success: false,
                    message: "No user found with this Google account. Please sign up first."
                });
            }
        }

        // Now 'user' is accessible here!
        const token = generateToken(user.id);
        res.json({
            success: true,
            userData: user,
            token,
            message: "logged in successfully"
        });

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
        const userId = req.user.id; // Use .id instead of ._id

        let profilePicUrl = avatar;
        if (avatar && avatar.startsWith('data:image')) {
            const upload = await cloudinary.uploader.upload(avatar);
            profilePicUrl = upload.secure_url;
        }
        let uploadedImages = [];

        if (Array.isArray(images)) {
            for (const img of images) {
                const src = img.src || img; // handle both object or string

                if (typeof src === "string" && src.startsWith("data:image")) {
                    const upload = await cloudinary.uploader.upload(src);
                    uploadedImages.push(upload.secure_url);
                } else {
                    uploadedImages.push(src);
                }
            }
        }
        console.log("Updating user ID:", uploadedImages);
        console.log("Mood received:", interest);

        // Convert Mongoose findByIdAndUpdate to Prisma update
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

        res.json({ success: true, user: updatedUser });
    } catch (error) {
        console.error("UPDATE ERROR:", error);
        res.json({ success: false, message: error.message });
    }
};

