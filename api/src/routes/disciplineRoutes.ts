import { Router } from 'express'
import DisciplineController from '../controllers/disciplineController'
import { validateAndCheckExistence } from '../middleware/validateAndCheckExistence'

const router = Router()
const disciplineController = new DisciplineController()

router.post(
  '/disciplina',
  validateAndCheckExistence,
  disciplineController.create.bind(disciplineController),
)

router.get('/disciplina', disciplineController.get.bind(disciplineController))

router.get(
  '/disciplina/:bimester/busca',
  disciplineController.getByBimester.bind(disciplineController),
)

router.delete(
  '/disciplina/:id',
  disciplineController.delete.bind(disciplineController),
)

export default router
