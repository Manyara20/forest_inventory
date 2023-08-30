import dotenv from 'dotenv'
import pg from "pg";
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.POST_USER,
  host: process.env.POST_HOST,
  database: process.env.POST_DB_NAME,
  password: process.env.POST_PASSWORD,
  port: process.env.POST_PORT,
})

export default pool;