import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:3000',
  'https://movies.com',
  'https://midu.dev'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})

// MIDDLEWARES:  los middlewares son capas de software que se colocan entre la lógica principal de la API y el servidor subyacente. Estas herramientas son esenciales para realizar tareas específicas como el enrutamiento, la autenticación, la autorización, el registro (logging), la validación de datos y otras funciones, que son cruciales en la operación de un API.
