import z from 'zod'
// usamos zod para validacion de los datos procesados

// El schema puede describir la estructura de los datos que se envían y se reciben a través de la API.

const userSchena = z.object({
  name: z.string({
    invalid_type_error: 'user must be a string',
    required_error: 'user is required'
  }),
  password: z.string({
    invalid_type_error: 'password must be a string',
    required_error: 'password is required'
  }),
  email: z.string({
    invalid_type_error: 'email must be a string',
    required_error: 'email is required'
  }).email()
})

export function validateUser (object) {
//   return movieSchena.parse(object)
// mas facil de validar si da error
  return userSchena.safeParse(object)
}

export function validatePartialUser (object) {
  return userSchena.partial().safeParse(object)
}
