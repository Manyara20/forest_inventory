import createError from "../../createError.js";
// import { deletesubcompartment, searchSubcompartment } from "../../models/plantationmgtModels/subcompartmentModels.js";
import pool from "../../models/postgres.js";
import { deleteWorkflow, searchWorkflowq, storeWorkflow, updateWorkflow } from "../../models/workflowModels/workflowModel.js";

const log = (message)=>{
    return console.log(message)
}
export const workflow_insert = (req, res, next)=>{
    console.log('nimefika kwa controller')
  
    const values =[req.body.name]

    pool.query(storeWorkflow, values,  (err, data)=> {
            if (err) {
                log(err);
                return next(createError(500, "Something Went Wrong subcompart"))
            };

           //sendConfirmationEmail(user, genToken)
           console.log(req.body.workflowname)
        res.status(200).json("Register Succesful. Confirmation Message workflow") 

        });
    }

    export const searchWorkflow = async (req, res, next)=>{
        console.log('searching')
        console.log(req.query.name)
        try {
            const {rows}= await pool.query(searchWorkflowq, [req.query.name])
            return res.status(200).json(rows)
        } catch (error) {
            console.log(error)
            next(createError(500, "Something Went Wrong"))
        }
    }

    export const editWorkflow = async (req, res, next)=>{
        console.log(req.body)
        console.log(req.params.id)
        const values = [req.body.name, req.params.id]
        try {
            await pool.query(updateWorkflow, values)
            return res.status(200).json("Update Succesfully")
        } catch (error) {
            log(error)
            return next(createError(500, "Something Went Wrong"))
        }
    }
    export const deleteworkflow = async (req, res, next)=>{   
        console.log('deletieen')   
        console.log(req.params.id)   
        const values = [req.params.id]
        try {
            await pool.query(deleteWorkflow, values)
            return res.status(200).json("Update Succesfully")
        } catch (error) {
            log(error)
            return next(createError(500, "Something Went Wrong"))
        }
    }