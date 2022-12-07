-- CreateTable
CREATE TABLE "Authors" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "picture" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,

    CONSTRAINT "Authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Papers" (
    "id" SERIAL NOT NULL,
    "authorEmail" TEXT NOT NULL,
    "category" VARCHAR NOT NULL,
    "title" VARCHAR NOT NULL,
    "summary" VARCHAR NOT NULL,
    "firstParagraph" VARCHAR NOT NULL,
    "body" VARCHAR NOT NULL,

    CONSTRAINT "Papers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Authors_email_key" ON "Authors"("email");

-- AddForeignKey
ALTER TABLE "Papers" ADD CONSTRAINT "Papers_authorEmail_fkey" FOREIGN KEY ("authorEmail") REFERENCES "Authors"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
