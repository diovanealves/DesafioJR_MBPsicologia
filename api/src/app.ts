import cors from 'cors'
import express from 'express'
import DisciplineRoutes from './routes/disciplineRoutes'

const app = express()
app.use(express.json())
app.use(cors())

app.use(DisciplineRoutes)

export default app
