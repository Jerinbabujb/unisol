import cloudinary from "../lib/cloudinary.js";
import generateToken from "../lib/utils.js";
import bcrypt from 'bcryptjs';
import prisma from "../config/prisma.js"; // Use the shared instance

// Import the matchmaking engine utility
import { updateUserEmbedding } from "../utils/generateEmbedding.js";
const API_KEY = process.env.ASTRO_API;
const BASE_URL = "https://json.freeastrologyapi.com";
const headers = { "Content-Type": "application/json", "x-api-key": API_KEY };

console.log("MY API KEY IS:", process.env.ASTRO_API);
export const signup = async (req, res) => {
    const {
        email, fullName, password, bio, birthday, gender, interest, googleId, avatar,
        mobileNumber, horoscope, primaryNeurotype, status, preferredMatch, mbtiType,
        attachmentStyle, beliefSystem, intentions, experienceLevel, topArtists,
        favoriteGenres, uiTheme, prefferGender, pronouns, cityName, birthTime,
        mood, instagram, facebook, images
    } = req.body;

    try {
        if (!email || !fullName) {
            return res.json({ success: false, message: "Email and Name are required" });
        }

        let hashedPassword = null;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }

        let interestsArray = Array.isArray(interest) ? interest : 
            (typeof interest === "string" ? interest.split(",").map(i => i.trim()).filter(Boolean) : []);

        let finalImages = Array.isArray(images) ? images.map(img => typeof img === 'object' ? img.src : img) : [];

        // --- ASTROLOGY PIPELINE ---
// --- ASTROLOGY PIPELINE ---
        let astroProfile = {};

        if (cityName && birthday) {
            try {
                // 1. Safely parse the frontend date string
                const birthDateObj = new Date(birthday);
                const year = birthDateObj.getFullYear();
                const month = birthDateObj.getMonth() + 1; 
                const day = birthDateObj.getDate(); // Note: V1 uses 'day', not 'date'

                // Safely parse the time string (e.g., "14:30")
                const [hour, minute] = (typeof birthTime === 'string' && birthTime.includes(':')) 
                    ? birthTime.split(':').map(Number) 
                    : [12, 0];

                // 2. Call the new V1 endpoint (Handles Geo and Timezone automatically!)
                const planetsResponse = await fetch('https://api.freeastroapi.com/api/v1/natal/calculate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': process.env.ASTRO_API.trim()
                    },
                    body: JSON.stringify({
                        year, 
                        month, 
                        day, 
                        hour, 
                        minute, 
                        city: cityName 
                    })
                });

                if (!planetsResponse.ok) {
                    throw new Error(`Astrology API V1 failed: ${planetsResponse.status}`);
                }
                
                const astrologyData = await planetsResponse.json();
                console.log("astrology data",astrologyData);
                // 3. Extract core signs from the new V1 response structure
                // Assuming the new API returns a standard 'data' object or planets array
                const planets = astrologyData.data?.planets || astrologyData.planets || astrologyData;

                if (Array.isArray(planets)) {
                    const sun = planets.find(p => p.name === "Sun");
                    const moon = planets.find(p => p.name === "Moon");
                    const ascendant = planets.find(p => p.name === "Ascendant" || p.name === "Asc");

                    astroProfile = {
                        birthTime:birthTime,
                       birthCity: cityName,
    sunSign: sun?.sign_id ? sun.sign_id.charAt(0).toUpperCase() + sun.sign_id.slice(1) : undefined,
    moonSign: moon?.sign_id ? moon.sign_id.charAt(0).toUpperCase() + moon.sign_id.slice(1) : undefined,
    ascendantSign: ascendant?.sign_id ? ascendant.sign_id.charAt(0).toUpperCase() + ascendant.sign_id.slice(1) : undefined,
    sunDegree: sun?.abs_pos,
    moonDegree: moon?.abs_pos,
    ascendantDegree: ascendant?.abs_pos,
    
    // NEW: Save the whole raw JSON response for the frontend!
    fullAstrologyData: astrologyData
                    };
                }

            } catch (astroError) {
                console.error("Astrology V1 Error:", astroError.message || astroError);
                // Fail silently so the user can still register
            }
        }

        // --- UPSERT USER ---
        const user = await prisma.user.upsert({
            where: { email: email },
            update: {
                googleId: googleId || undefined,
                bio: bio || undefined,
                gender: gender || undefined,
                pronouns: pronouns || undefined,
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
                mood: mood || undefined,
                instagram: instagram || undefined,
                facebook: facebook || undefined,
                images: finalImages.length > 0 ? finalImages : undefined,
                ...astroProfile,
           
                profileCompleted: true,
            },
            create: {
                email,
                fullName,
                password: hashedPassword,
                googleId,
                bio,
                pronouns,
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
                prefferGender: prefferGender || undefined,
                mood: mood || null,
                instagram: instagram || null,
                facebook: facebook || null,
                images: finalImages,
                ...astroProfile,
               

                profileCompleted: true,
            },
        });

        const token = generateToken(user.id);

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
        const {
            fullName, avatar, bio, mood, instagram, facebook, interest, images, pronouns,
            // 🔥 NEW PSYCHOLOGY & IDENTITY FIELDS
            mbtiType, attachmentStyle, beliefSystem, horoscope, topArtists, loveLanguages,preferredFont,preferredColor
        } = req.body;
        console.log(req.body);
        const userId = req.user.id;

        // 1. Process Main Avatar
        let profilePicUrl = avatar;
        if (avatar && avatar.startsWith('data:image')) {
            const upload = await cloudinary.uploader.upload(avatar);
            profilePicUrl = upload.secure_url;
        }

        // 2. Process Gallery Images
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

        // 3. Update Database
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                fullName,
                bio,
                mood,
                avatar: profilePicUrl,
                instagram,
                facebook,
                images: uploadedImages,
                pronouns,
                preferredColor,
                preferredFont,
                // Ensure arrays default to empty if undefined
                interest: interest || [],
                topArtists: topArtists || [],
                loveLanguages: loveLanguages || [],
                // Strings
                mbtiType: mbtiType || null,
                attachmentStyle: attachmentStyle || null,
                beliefSystem: beliefSystem || null,
                horoscope: horoscope || null,
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