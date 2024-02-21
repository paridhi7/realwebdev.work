/*
  Warnings:

  - The `mockupImages` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "mockupImages",
ADD COLUMN     "mockupImages" BYTEA;
