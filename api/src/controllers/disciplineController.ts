import { TipoBimestre } from '@prisma/client'
import { Request, Response } from 'express'
import { prisma } from '../lib/prisma'

export default class DisciplineController {
  async get(req: Request, res: Response) {
    try {
      const result = await prisma.resultado.findMany()
      return res.send(result)
    } catch (error) {
      return res
        .status(404)
        .send({ error: 'Erro interno no servidor ao buscar as notas' })
    }
  }

  async getByBimester(req: Request, res: Response) {
    const { bimester } = req.params
    try {
      const result = await prisma.resultado.findMany({
        where: {
          bimestre: bimester as TipoBimestre,
        },
      })
      return res.send(result)
    } catch (error) {
      return res
        .status(500)
        .send({ error: 'Erro ao fazer a busca por bimestre' })
    }
  }

  async create(req: Request, res: Response) {
    const disciplineData = req.body
    try {
      const newNote = await prisma.resultado.create({
        data: disciplineData,
      })

      return res.status(201).json(newNote)
    } catch (err) {
      return res
        .status(500)
        .json({ err: 'Erro interno no servidor ao criar nota.' })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params

      await prisma.resultado.delete({
        where: { id },
      })
      return res.status(204).send()
    } catch (error) {
      return res
        .status(500)
        .send({ error: 'Erro interno no servidor ao excluir o nota' })
    }
  }
}
