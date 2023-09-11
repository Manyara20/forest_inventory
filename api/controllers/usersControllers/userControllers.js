import createError from "../../createError.js";
import pool from "../../models/postgres.js";
import { storeUser } from "../../models/userModels/userModels.js";
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

                const genToken = crypto.randomBytes(32).toString("hex")

                const expiresAt = new Date(Date.now() + 86400000); //token expiry timne in miliseconds

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
