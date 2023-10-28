import express, { json } from 'express'
import { createUserRouter } from './src/routes/users.js'
import { corsMiddleware } from './src/middlewares/cors.js'
import { PORT } from './config.js'
import 'dotenv/config'

// archivo de configuracion de la aplicacion
export const createApp = ({ userModel }) => {
  const app = express()

  // deshabilitar por seguridad ya que revela el tipo de servidor usado (express)
  app.disable('x-powered-by')
  // habilitamos el formato json en el servidor
  app.use(json())
  // cors -  "Cross-Origin Resource Sharing"
  app.use(corsMiddleware(/* origins */))
  // servir html -> no mas es para realizar pruebas, esto en la practica
  // -> el cliente se sirve en un host aparte
  app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html')
  })

  // todos lo recursos de usuario se identifican con /users
  app.use('/users', createUserRouter({ userModel }))
  // 404
  app.use((req, res, next) => {
    res.status(404).json({ message: 'endpoint not found' })
  })

  app.listen(PORT, () => console.log(`server listening in http://localhost:${PORT}`))
}
