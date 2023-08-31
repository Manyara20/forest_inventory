import express from 'express';
import dotenv from 'dotenv'
import pool from './models/postgres.js';
import cors from 'cors'
import userRoutes from './routes/userRoutes/userRoutes.js'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cors({origin: "http://localhost:5173",})
);

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.json());
app.use(cookieParser());

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

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).json(errorMessage);
});


app.listen(port, ()=>{
    console.log(`Backend Running Succesfully on port ${port}`)
})