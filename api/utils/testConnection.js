import pool from "../models/postgres.js";

export const testDatabase = async ()=>{
    try {
        await pool.connect();
        console.log('Connected to PostgreSQL database!');
    } catch (error) {
        console.log(error)
    }
}




