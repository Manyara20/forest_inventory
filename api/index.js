import express from 'express';
import dotenv from 'dotenv'
import pool from './models/postgres.js';
import cors from 'cors'
import userRoutes from './routes/userRoutes/userRoutes.js'
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { testDatabase } from './utils/testConnection.js';
import ConnectPg from 'connect-pg-simple';


//import RedisStore from "connect-redis"
//import { redisClient, tryRedisConnection } from './models/redisConfig.js';


const app = express();
dotenv.config();

let pgSession = ConnectPg(session);

//redis 
//const store = new RedisStore({ client: redisClient });

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
    store: new pgSession({pool: pool, tableName: 'session'}),
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

//test connection

await testDatabase();
//await tryRedisConnection();

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