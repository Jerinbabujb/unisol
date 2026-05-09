import prisma from '../config/prisma.js';

export async function getMatchesForUser(currentUserId, limit = 20) {
    // 1. Fetch current user's vector AND their preferred gender
    // Notice we added "prefferGender" to the SELECT statement
    const currentUser = await prisma.$queryRaw`
        SELECT id, embedding::text, "prefferGender"
        FROM "User" 
        WHERE id = ${currentUserId}
    `;

    if (!currentUser.length || !currentUser[0].embedding) {
        throw new Error("User embedding not found. Please complete profile.");
    }

    const embeddingString = currentUser[0].embedding;
    // Extract the preferred gender from the database result
    const preferredGender = currentUser[0].prefferGender;

    // 2. Fetch matches using pgvector
    // Notice we are using backticks right after $queryRaw (no parentheses)
    const matches = await prisma.$queryRaw`
        SELECT 
            id, 
            "fullName", 
            avatar,
            bio, 
            mood,
            instagram,
            facebook,
            interest,
            images,
            -- Calculate percentage match (Cosine Similarity)
            ROUND((1 - (embedding <=> ${embeddingString}::vector))::numeric * 100, 1) as match_percentage
        FROM "User"
        WHERE 
            id != ${currentUserId}
            AND embedding IS NOT NULL
            -- Wrap column name in quotes, and use the variable we extracted above
            AND "prefferGender" != ${preferredGender} 
        ORDER BY 
            embedding <=> ${embeddingString}::vector ASC
        LIMIT ${limit}
    `;

    return matches;
}