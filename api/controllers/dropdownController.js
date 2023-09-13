// import { conservancylist } from "../models/dropdownModels/dropdown"
import createError from "../createError.js";
import { conservancylist, countylist } from "../models/dropdownModels/dropdown.js";
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

export const getCounty = async (req, res, next)=>{
    const conservancy_id = req.params.conservancy_id
    try {
        const {rows} = await pool.query(countylist, [conservancy_id] );

        return res.status(200).json(rows)
    } catch (error) {
        next(createError(500, "Something Went Wrong"))
    }
}