/*
  Warnings:

  - Made the column `isLoggedIn` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isLoggedIn" SET NOT NULL;
