import { NextFunction, Request, Response } from 'express'
import { ValidationError } from 'yup'
import { prisma } from '../lib/prisma'
import { IDisciplineSchema } from '../models/disciplineModels'

export async function validateAndCheckExistence(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const disciplineData = req.body

  try {
    await IDisciplineSchema.validate(disciplineData, {
      stripUnknown: true,
      abortEarly: false,
    })

    const existingNote = await prisma.resultado.findFirst({
      where: {
        disciplina: disciplineData.disciplina,
        bimestre: disciplineData.bimestre,
      },
    })

    if (existingNote) {
      return res
        .status(400)
        .send({ error: 'Já existe uma nota para esta disciplina no bimestre' })
    }

    next()
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ error: error.errors })
    }
    return res.status(500).json({ error: 'Erro de validação' })
  }
}
