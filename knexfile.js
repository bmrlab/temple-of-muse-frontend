const { loadEnvConfig } = require('@next/env')

const dev = process.env.NODE_ENV !== 'production'
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = loadEnvConfig('./', dev).combinedEnv

// import type { Knex } from 'knex'
// config: Knex.Config
module.exports = {
  client: 'mysql',
  connection: {
    host : MYSQL_HOST || '',
    port : +(MYSQL_PORT || '3306'),
    user : MYSQL_USER || '',
    password : MYSQL_PASSWORD || '',
    database : MYSQL_DATABASE || '',
  },
  migrations: {
    directory: './lib/db/migrations',
  },
  seeds: {
    directory: './lib/db/seeds',
  },
}
