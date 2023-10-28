import { createPool } from 'mysql2/promise'
// CONEXION A MYSQL

// SI NO POSEES UNA BASE DE DATOS MYSQL EN LA NUBE, CREA UNA DE PRUEBA
// INSTALANDO MYSQL EN TU EQUIPO
import {
  DB_PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE
} from '../../config.js'

export const con = createPool(
  {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
  }
)
