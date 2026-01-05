import cloudinary from "../lib/cloudinary.js";
import generateToken from "../lib/utils.js";
import bcrypt from 'bcryptjs';
import prisma from "../config/prisma.js"; // Use the shared instance

export const signup = async (req, res) => {
    const { email, fullName, password, bio } = req.body;

    try {
        if (!email || !fullName || !password || !bio) {
            return res.json({ success: false, message: "missing details" });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.json({ success: false, message: "Account already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user in Prisma
        const newUser = await prisma.user.create({
            data: {
                fullName, // Make sure this matches your schema.prisma field name!
                email,
                password: hashedPassword,
                bio
            }
        });

        const token = generateToken(newUser.id); // Prisma uses .id, not ._id
        res.json({ success: true, userData: newUser, token, message: "account created successfully" });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.json({ success: false, message: "account doesn't exist" });
        }

        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.json({ success: false, message: "password is not correct" });
        }

        const token = generateToken(user.id);
        res.json({ success: true, userData: user, token, message: "logged in successfully" });
    } catch (error) {
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
        const { fullName, profilePic, bio } = req.body;
        const userId = req.user.id; // Use .id instead of ._id

        let profilePicUrl = profilePic;
        if (profilePic && profilePic.startsWith('data:image')) {
            const upload = await cloudinary.uploader.upload(profilePic);
            profilePicUrl = upload.secure_url;
        }

        // Convert Mongoose findByIdAndUpdate to Prisma update
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { 
                fullName, 
                bio, 
                profilePic: profilePicUrl 
            },
        });

        res.json({ success: true, user: updatedUser });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};