// import { conservancylist } from "../models/dropdownModels/dropdown"
import { conservancylist } from "../models/dropdownModels/dropdown.js";
import pool from "../models/postgres.js";



export const getConservancy =(req, res)=>{

    pool.query(conservancylist, (err, data)=>{
        if (err){
            console.log(err)
            res.status(500).json("Something Went Wrong. Try Later")
        }
        console.log(data)
        return res.status(200).json(data.rows)
    })
}