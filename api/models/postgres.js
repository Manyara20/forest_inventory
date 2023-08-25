import * as pg from 'pg'
import dotenv from 'dotenv'
dotenv.config();

const { Pool } = pg.default

const pool = new Pool({
  user: process.env.POST_USER,
  host: process.env.POST_HOST,
  database: process.env.POST_DB_NAME,
  password: process.env.POST_PASSWORD,
  port: process.env.POST_PORT,
})

export default pool;