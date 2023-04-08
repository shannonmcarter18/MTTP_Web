-- CreateTable
CREATE TABLE "student_responses" (
    "cuid" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL DEFAULT '',
    "lastName" TEXT NOT NULL DEFAULT '',
    "phoneNumber" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "address" TEXT NOT NULL DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "student_responses_email_key" ON "student_responses"("email");

-- CreateIndex
CREATE UNIQUE INDEX "student_responses_dateOfBirth_key" ON "student_responses"("dateOfBirth");
