/*
  Warnings:

  - You are about to drop the `MockupImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MockupImage" DROP CONSTRAINT "MockupImage_postId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "mockupImages" TEXT;

-- DropTable
DROP TABLE "MockupImage";
