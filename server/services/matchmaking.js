import prisma from '../config/prisma.js';

export async function getMatchesForUser(currentUserId, limit = 20) {
    const currentUser = await prisma.user.findUnique({
        where: { id: currentUserId }
    });

    if (!currentUser) throw new Error("User not found");

    const userEmbeddingResult = await prisma.$queryRaw`
        SELECT embedding::text FROM "User" WHERE id = ${currentUserId}
    `;

    if (!userEmbeddingResult.length || !userEmbeddingResult[0].embedding) {
        return [];
    }

    const embeddingString = userEmbeddingResult[0].embedding;

    // 🔥 FIX: Convert preference to lowercase immediately
    let genderFilter = [];
    const pref = currentUser.prefferGender ? currentUser.prefferGender.toLowerCase() : null;

    if (pref === "woman" || pref === "female") {
        genderFilter = ["woman", "female"];
    } else if (pref === "man" || pref === "male") {
        genderFilter = ["man", "male"];
    } else if (pref === "everyone" || !pref) {
        genderFilter = ["woman", "female", "man", "male", "non-binary", "other"];
    } else {
        genderFilter = [pref];
    }

    // 🔥 FIX: Use LOWER("gender") in the SQL query so capitalization doesn't matter
    const matches = await prisma.$queryRaw`
        SELECT 
            id, "fullName", avatar, bio, interest, mood, gender, horoscope,
            "mbtiType", "attachmentStyle", "humanDesign", "loveLanguages", 
            "primaryNeurotype", "topArtists", "favoriteGenres", images,
            ROUND((1 - (embedding <=> ${embeddingString}::vector))::numeric * 100, 1) as match_percentage
        FROM "User"
        WHERE id != ${currentUserId} 
          AND embedding IS NOT NULL
          AND LOWER("gender") = ANY(${genderFilter})
        ORDER BY embedding <=> ${embeddingString}::vector ASC
        LIMIT ${limit}
    `;

    return matches.map(match => {
        const reasons = [];
        if (match.mbtiType && match.mbtiType === currentUser.mbtiType) reasons.push(`Both ${match.mbtiType}`);

        const commonInterests = (match.interest || []).filter(i => (currentUser.interest || []).includes(i));
        if (commonInterests.length > 0) reasons.push(`Shared love for ${commonInterests[0]}`);

        if (match.attachmentStyle && match.attachmentStyle === currentUser.attachmentStyle) reasons.push(`Matched ${match.attachmentStyle} Styles`);

        const commonNeuro = (match.primaryNeurotype || []).filter(n => (currentUser.primaryNeurotype || []).includes(n));
        if (commonNeuro.length > 0) reasons.push("Neuro-kin connection");

        return {
            ...match,
            matchReason: reasons.slice(0, 2).join(" • ") || "High Resonance"
        };
    });
}