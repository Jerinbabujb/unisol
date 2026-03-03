-- CreateTable
CREATE TABLE "privacy" (
    "id" TEXT NOT NULL,
    "instagram" BOOLEAN NOT NULL DEFAULT false,
    "facebook" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "privacy_pkey" PRIMARY KEY ("id")
);
