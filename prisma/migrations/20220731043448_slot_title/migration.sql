/*
  Warnings:

  - You are about to drop the column `descHtml` on the `MediaSlot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `MediaSlot` DROP COLUMN `descHtml`,
    ADD COLUMN `description` TEXT NULL,
    ADD COLUMN `name` VARCHAR(100) NULL;
