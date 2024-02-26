/*
  Warnings:

  - You are about to drop the column `upvoteCount` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "upvoteCount",
ADD COLUMN     "upvotes" INTEGER NOT NULL DEFAULT 0;
