/*
  Warnings:

  - You are about to drop the `SellerCourse` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sellerId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SellerCourse" DROP CONSTRAINT "SellerCourse_courseId_fkey";

-- DropForeignKey
ALTER TABLE "SellerCourse" DROP CONSTRAINT "SellerCourse_sellerId_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "sellerId" INTEGER NOT NULL,
ALTER COLUMN "imageUrl" DROP NOT NULL;

-- DropTable
DROP TABLE "SellerCourse";

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
