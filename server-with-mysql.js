import { UserModel } from './src/models/mysql/user.js'
import { createApp } from './app.js'

// inyeccion de dependencia del modelo
// para creacion de servidores para distintas bases de datos
createApp({ userModel: UserModel })
