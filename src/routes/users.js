import { Router } from 'express'
import { UserController } from '../controllers/users.js'

// creamos el enrutado con Router e importamos el controlador

export const createUserRouter = ({ userModel }) => {
  const usersRouter = Router()
  const userController = new UserController({ userModel })

  usersRouter.get('/', userController.getAll)
  usersRouter.post('/', userController.create)

  usersRouter.get('/:id', userController.getById)
  usersRouter.delete('/:id', userController.delete)
  usersRouter.patch('/:id', userController.update)

  return usersRouter
}
