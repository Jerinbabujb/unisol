/*
  Warnings:

  - You are about to drop the column `content` on the `Message` table. All the data in the column will be lost.
  - Added the required column `text` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "content",
ADD COLUMN     "seen" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "birthday" TIMESTAMP(3),
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "googleId" TEXT,
ADD COLUMN     "interest" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "mood" TEXT,
ADD COLUMN     "purpose" TEXT,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "bio" DROP NOT NULL;

-- CreateTable
CREATE TABLE "song" (
    "id" TEXT NOT NULL,
    "song_name" TEXT NOT NULL,
    "song_url" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "connection" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "connection_pkey" PRIMARY KEY ("id")
);
