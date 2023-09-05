import express from 'express';
import dotenv from 'dotenv'
import pool from './models/postgres.js';
import cors from 'cors'
import userRoutes from './routes/userRoutes/userRoutes.js'
import cookieParser from 'cookie-parser';
import session from 'express-session';
import RedisStore from "connect-redis"
import Redis from 'ioredis';
//import http from 'http';


const app = express();
dotenv.config();

//redis 

const redisClient = new Redis({
  port: 6379, 
  host: "127.0.1.1",
});

const store = new RedisStore({ client: redisClient });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cors({origin: "http://localhost:5173",})
);

app.use(express.json());

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    credentials: true,
    name: "sid",
    store: store,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
      httpOnly: true,
      expires: 1000 * 60 * 60 * 24 * 7,
      sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
    },
  })
);

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

redisClient.set("samson", "chege");

//routes

app.use(userRoutes)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).json(errorMessage);
});


app.listen(port, ()=>{
    console.log(`Backend Running Succesfully on port ${port}`)
})