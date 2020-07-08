import express, { Router } from 'express' // Módulo de rotas do express
import appointmentsRouter from './appointments.routes'
import usersRouter from './users.routes'
import sessionsRouter from './sessions.routes'
import uploadConfig from '../config/upload'

const routers = Router()

routers.use('/files', express.static(uploadConfig.directory))
routers.use('/appointments', appointmentsRouter)
routers.use('/users', usersRouter)
routers.use('/sessions', sessionsRouter)

export default routers
