import prisma from '../config/prisma.js';
import { pipeline } from '@xenova/transformers';


// Create a singleton to hold the embedding pipeline
class PipelineSingleton {
    static task = 'feature-extraction';
    static model = 'Xenova/all-MiniLM-L6-v2';
    static instance = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            this.instance = await pipeline(this.task, this.model, { progress_callback });
        }
        return this.instance;
    }
}

export async function updateUserEmbedding(userId) {
    // 1. Fetch user data
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) return;

    // 2. Create the "vibe" string
    const profileText = `
    Bio: ${user.bio || ""}
    Interests: ${user.interests ? user.interests.join(", ") : ""}
    Neurotype: ${user.primaryNeurotype ? user.primaryNeurotype.join(", ") : ""}
  `;

    // 3. Get the pipeline instance and generate the vector locally
    const extractor = await PipelineSingleton.getInstance();
    const output = await extractor(profileText, { pooling: 'mean', normalize: true });

    // Extract the raw array of 384 numbers
    const embeddingArray = Array.from(output.data);

    // 4. Save to Supabase
    // We format the array as a string literal '[0.1, 0.2, ...]' for pgvector
    const embeddingString = `[${embeddingArray.join(',')}]`;

    await prisma.$executeRawUnsafe(`
    UPDATE "User" 
    SET embedding = '${embeddingString}'::vector 
    WHERE id = '${userId}'
  `);
}