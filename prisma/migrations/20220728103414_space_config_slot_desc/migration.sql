/*
  Warnings:

  - You are about to alter the column `slotKey` on the `MediaSlot` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `contractAddress` on the `MediaSlot` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `tokenId` on the `MediaSlot` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `ownerAddress` on the `Space` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `title` on the `Space` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `MediaSlot` ADD COLUMN `descHtml` TEXT NULL,
    MODIFY `slotKey` VARCHAR(50) NOT NULL,
    MODIFY `mediaUri` VARCHAR(200) NOT NULL,
    MODIFY `contractAddress` VARCHAR(50) NULL,
    MODIFY `tokenId` VARCHAR(100) NULL;

-- AlterTable
ALTER TABLE `Space` ADD COLUMN `config` TEXT NULL,
    MODIFY `ownerAddress` VARCHAR(50) NOT NULL,
    MODIFY `title` VARCHAR(100) NOT NULL,
    MODIFY `description` VARCHAR(200) NULL;
