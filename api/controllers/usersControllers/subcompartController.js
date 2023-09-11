import createError from "../../createError.js";
import pool from "../../models/postgres.js";
import { storeSubcompartment } from "../../models/subcompartmentModels/subcompartmentModels.js";
const log = (message)=>{
    return console.log(message)
}
export const subcompartment = (req, res, next)=>{
    
    log(req.body);
    const values =[req.body.conservancy, req.body.county, req.body.fstation,
         req.body.subcompart,req.body.remarks]

    pool.query(storeSubcompartment, values,  (err, data)=> {
            if (err) {
                log(err);
                return next(createError(500, "Something Went Wrong subcompart"))
            };

           //sendConfirmationEmail(user, genToken)
        res.status(200).json("Register Succesful. Confirmation Message subcomaprtment") 

        });
   
}