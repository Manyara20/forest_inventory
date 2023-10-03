import createError from "../../createError.js";
import pool from "../../models/postgres.js";
import { searchuser, storeUser } from "../../models/userModels/userModels.js";
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const log = (message)=>{
    return console.log(message)
}
export const createUser = (req, res, next)=>{

    const q ={text: 'SELECT * FROM users WHERE email= $1',
              values: [req.body.email.trim()],}

    pool.query(q, (err, data)=>{
        if (err) {
            log(err);
            return next(createError(500, "Something Went Wrong"))
        }

        if (data.rows.length>0){
            return next(createError(409, "Email Already Exists"))
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const values =[req.body.fullname, req.body.email, req.body.kfs_no, req.body.phone, hashedPassword]

        //storeUser IS AN SQL QUERRY DEFINED IN THE USER MODELS
        
        pool.query(storeUser, values,  (err, data)=> {
            if (err) {
                log(err);
                return next(createError(500, "Something Went Wrong"))
            };

            const q ={text: 'SELECT * FROM users WHERE email= $1',
                values: [req.body.email],}

            pool.query(q ,(err, data)=>{

                if(err) {
                    log(err)
                    return next(createError(500, "Something Went Wrong"))
                }

                const user= data.rows[0]
                const user_model="model/userModel/userModels";

                const genToken = crypto.randomBytes(32).toString("hex")

                const expiresAt = new Date(Date.now() + 86400000); //token expiry timne in miliseconds
                if(req.body.role){
                    console.log(req.body.role,user_model,user.id)
                const q2 = {
                    text: 'INSERT INTO model_has_roles (role_id, model_type, model_id) VALUES ($1, $2, $3)',
                    values: [req.body.role, user_model, user.id], 
                  
                };
                pool.query(q2, (err, data)=>{
                    if (err) {
                        log(err);
                        return next(createError(500, "Something Went Wrong with model insert"))
                    }  
                });}
                else{
                    const role_idV=3;
                    console.log(role_idV,user_model,user.id);
                    
                    
                    const q3 = {
                        text: 'INSERT INTO model_has_roles (role_id, model_type, model_id) VALUES ($1, $2, $3)',
                        values: [role_idV, user_model, user.id], 
                    };
                    pool.query(q3, (err, data)=>{
                        if (err) {
                            log(err);
                            return next(createError(500, "Something Went Wrong with model insert main form44444"))
                        }  
                    });
                }    

                const q = {
                    text: 'INSERT INTO email_verification_token (user_id, token, expires_at) VALUES ($1, $2, $3)',
                    values: [user.id, genToken, expiresAt], 
                };
               
              
               pool.query(q, (err, data)=>{
                    if (err) {
                        log(err);
                        return next(createError(500, "Something Went Wrong"))
                    }
                    

                    //sendConfirmationEmail(user, genToken)
                    res.status(200).json("Register Succesful. Confirmation Message Sent to Your Email") 

                    });
                });

        });

    });
   
};
//search users
export const searchUser = async (req, res, next)=>{
    console.log(req.query.email)
    try {
        const {rows}= await pool.query(searchuser, [req.query.email, req.query.usertype])
        return res.status(200).json(rows)
    } catch (error) {
        console.log(error)
        next(createError(500, "Something Went Wrongffggfdgdfg"))
    }
}

//list all users

export const getAllUsers = async (req, res, next)=>{
try {
    const q = "SELECT id, name, email, phone, kfs_no FROM users"
    const {rows } = await pool.query(q)
    return res.status(200).json(rows) 
} catch (error) {
    console.log(error)
    return next(createError(500, "Something Went Wrong"))
}
}
