import express from 'express'
import DisciplineRoutes from './routes/disciplineRoutes'

const app = express()
app.use(express.json())

app.use(DisciplineRoutes)

export default app
