import { validateUser, validatePartialUser } from '../schemas/users.js'

// CONTROLADOR: Actúa como intermediario entre la vista y el modelo. Recibe las solicitudes del usuario desde la vista, procesa las acciones requeridas y realiza las operaciones pertinentes sobre el modelo.

// VISTA: Se refiere a la capa de presentación de la aplicación. La vista se encarga de mostrar la información al usuario. Esta puede ser una interfaz de usuario, como una página web, una aplicación móvil o cualquier otra forma de presentar la información al usuario final. La vista se comunica con el controlador para obtener los datos necesarios para mostrarlos al usuario.

export class UserController {
  constructor ({ userModel }) {
    this.UserModel = userModel
  }

  getAll = async (req, res) => {
    try {
      const users = await this.UserModel.getAll()
      // que es lo que renderiza
      res.json(users)
    } catch (error) {
      res.status(500).json({ message: 'Something goes wrong' })
    }
  }

  getById = async (req, res) => {
    // path-to-regex
    try {
      const { id } = req.params
      const user = await this.UserModel.getById({ id })
      if (user) return res.json(user)

      res.status(404).json({ message: 'User not found' })
    } catch (error) {
      res.status(500).json({ message: 'Something goes wrong' })
    }
  }

  create = async (req, res) => {
    try {
      const result = validateUser(req.body)

      if (result.error) {
        // o !result.success
        // 422 unprocesable entity
        // 400 bad request
        return res
          .status(400)
          .json({ message: JSON.parse(result.error.message) })
      }

      const newUser = await this.UserModel.create({ data: result.data })

      res.status(201).json(newUser)
    } catch (error) {
      res.status(500).json({ message: 'Something goes wrong' })
    }
  }

  delete = async (req, res) => {
    try {
      const { id } = req.params

      const result = await this.UserModel.delete({ id })

      if (result === false) {
        return res.status(404).json({ message: 'User not found' })
      }

      return res.json({ message: 'User deleted' })
    } catch (error) {
      res.status(500).json({ message: 'Something goes wrong' })
    }
  }

  update = async (req, res) => {
    try {
      const result = validatePartialUser(req.body)

      if (!result.success) {
        return res
          .status(400)
          .json({ error: JSON.parse(result.error.message) })
      }

      const { id } = req.params

      const updatedUser = await this.UserModel.update({
        id,
        data: result.data
      })

      if (updatedUser === false) {
        return res.status(404).json({ message: 'User not found' })
      }

      return res.json({ message: 'User updated' })
    } catch (error) {
      res.status(500).json({ message: 'Something goes wrong' })
    }
  }
}
