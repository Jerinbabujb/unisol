import cloudinary from "../lib/cloudinary.js";
import generateToken from "../lib/utils.js";
import bcrypt from 'bcryptjs';
import prisma from "../config/prisma.js"; // Use the shared instance

export const signup = async (req, res) => {
    const { email, fullName, password, bio, birthday, gender, interest, googleId, avatar } = req.body;

    try {
        // Validation: Google users don't require a password
        if (!email || !fullName) {
            return res.json({ success: false, message: "Email and Name are required" });
        }

        // 1. Password Hashing (only if password exists)
        let hashedPassword = null;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }

        // 2. Use UPSERT to handle both new and returning Google users
        const user = await prisma.user.upsert({
            where: { email: email },
            update: {
                // If they are logging in via Google, link their Google ID to existing email
                googleId: googleId || undefined, 
                bio: bio || undefined,
                gender: gender || undefined,
            },
            create: {
                email,
                fullName,
                password: hashedPassword, // Will be null for Google users
                googleId,
                bio,
                gender,
                birthday: birthday ? new Date(birthday) : null,
                interest,
            }
        });

        // 3. Generate Token and Respond
        const token = generateToken(user.id);
        res.json({ 
            success: true, 
            userData: user, 
            token, 
            message: user.googleId ? "Google login successful" : "Account created successfully" 
        });

    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
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
        const { fullName, avatar, bio } = req.body;
        const userId = req.user.id; // Use .id instead of ._id

        let profilePicUrl = avatar;
        if (avatar && avatar.startsWith('data:image')) {
            const upload = await cloudinary.uploader.upload(avatar);
            profilePicUrl = upload.secure_url;
        }

        // Convert Mongoose findByIdAndUpdate to Prisma update
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { 
                fullName, 
                bio, 
                avatar: profilePicUrl 
            },
        });

        res.json({ success: true, user: updatedUser });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};