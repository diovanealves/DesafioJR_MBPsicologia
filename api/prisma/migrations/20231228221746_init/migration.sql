-- CreateEnum
CREATE TYPE "TipoBimestre" AS ENUM ('Primeiro', 'Segundo', 'Terceiro', 'Quarto');

-- CreateEnum
CREATE TYPE "TipoDisciplina" AS ENUM ('Biologia', 'Artes', 'Geografia', 'Sociologia');

-- CreateTable
CREATE TABLE "Resultado" (
    "id" TEXT NOT NULL,
    "bimestre" "TipoBimestre" NOT NULL,
    "disciplina" "TipoDisciplina" NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resultado_pkey" PRIMARY KEY ("id")
);
