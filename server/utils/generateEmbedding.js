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
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return;

  // Create a rich "Identity String"
  const profileText = `
        Bio: ${user.bio || ""}
        Interests: ${user.interest ? user.interest.join(", ") : ""}
        Mood: ${user.mood || ""}
        MBTI: ${user.mbtiType || ""}
        Attachment Style: ${user.attachmentStyle || ""}
        Love Languages: ${user.loveLanguages ? user.loveLanguages.join(", ") : ""}
        Human Design: ${user.humanDesign || ""}
    `;

  const extractor = await PipelineSingleton.getInstance();
  const output = await extractor(profileText, { pooling: 'mean', normalize: true });
  const embeddingString = `[${Array.from(output.data).join(',')}]`;

  await prisma.$executeRawUnsafe(`
        UPDATE "User" SET embedding = '${embeddingString}'::vector WHERE id = '${userId}'
    `);
}