import { Knex, knex } from 'knex'
import config from '../../knexfile'

/**
 * To ensure the connection is cached across hot-reloads in development
 * see https://github.com/vercel/next.js/blob/canary/examples/with-knex/knex/index.js
 */
let cached: {
  instance?: Knex<any, unknown[]>
} = (global as any).mysql
if (!cached) cached = (global as any).mysql = {}

export function getKnex() {
  if (!cached.instance) {
    cached.instance = knex(config)
  }
  return cached.instance
}
