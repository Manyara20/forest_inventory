import pool from "../../models/postgres.js";
import { storeUser } from "../../models/userModels/userModels.js";
import bcrypt from 'bcrypt';
import crypto from 'crypto';

export const createUser = (req, res)=>{

    const q ={text: 'SELECT * FROM users WHERE email= $1',
              values: [req.body.email.trim()],}

    pool.query(q, (err, data)=>{
        if (err) {
            console.log(err);
            return res.status(500).json("Something Went Wrong")
        }
        if (data.rows.length>0) return res.status(409).json("Email Already Registered")


        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const values =[req.body.name, req.body.email, req.body.kfs_no, req.body.phone, hashedPassword]

        pool.query(storeUser, values,  (err, data)=> {
            if (err) {
                console.log(err);
                return res.status(500).json("Something Went Wrong")
            };

            const q ={text: 'SELECT * FROM users WHERE email= $1',
                values: [req.body.email],}

            pool.query(q ,(err, data)=>{

                if(err) {
                    console.log(err);
                    return res.status(500).json("Something Went Wrong")
                }

                const user= data.rows[0]

                const genToken = crypto.randomBytes(32).toString("hex")

                const expiresAt = new Date(Date.now() + 86400000); //token expiry timne in milliseconds

                const q = {
                    text: 'INSERT INTO email_verification_token (user_id, token, expires_at) VALUES ($1, $2, $3)',
                    values: [user.id, genToken, expiresAt], 
                };

                pool.query(q, (err, data)=>{
                    if (err) {
                        console.log(err);
                        return res.status(500).json("Something Went Wrong")
                    }

                    //sendConfirmationEmail(user, genToken)
                    res.status(200).json("Register Succesful. Confirmation Message Sent to Your Email") 

                    });
                });

        });

    });
   
};
