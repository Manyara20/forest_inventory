import createError from "../../createError.js";
import { searchSubcompartment, storeSubcompartment } from "../../models/plantationmgtModels/subcompartmentModels.js";
import pool from "../../models/postgres.js";

const log = (message)=>{
    return console.log(message)
}
export const management_insert = (req, res, next)=>{
    
    log(req.body);
    const values =[req.body.conservancy, req.body.county, req.body.station,
         req.body.sub_compartment,req.body.species,req.body.xcordinate,
         req.body.ycordinate,req.body.area,req.body.planting_year,req.body.density,
         req.body.mdbh,req.body.mht,req.body.age,req.body.remarks]

    pool.query(storeSubcompartment, values,  (err, data)=> {
            if (err) {
                log(err);
                return next(createError(500, "Something Went Wrong subcompart"))
            };

           //sendConfirmationEmail(user, genToken)
        res.status(200).json("Register Succesful. Confirmation Message subcomaprtment") 

        });
    }


    //get subcompartments

    export const searchManagement = async (req, res, next)=>{
        console.log(req.query.subcompartment)
        try {
            const {rows}= await pool.query(searchSubcompartment, [req.query.station, req.query.subcompartment])
            return res.status(200).json(rows)
        } catch (error) {
            console.log(error)
            next(createError(500, "Something Went Wrong"))
        }
    }