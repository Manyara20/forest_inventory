import express from 'express';
import dotenv from 'dotenv'
import pool from './models/postgres.js';
import userRoutes from './routes/userRoutes/userRoutes.js'

const app = express();
dotenv.config();

app.use(express.json());

const port = process.env.port || 8000

pool.connect((err, client, done) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to PostgreSQL database!');
      done(); 
    }
  });

  app.use(userRoutes)

app.listen(port, ()=>{
    console.log(`Backend Running Succesfully on port ${port}`)
})