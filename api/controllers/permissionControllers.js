//import {pool} from '../models/connect.js'
import createError from '../createError.js'
import pool from '../models/postgres.js'


export const createPermission =(req, res, next)=>{

    const q ={
        text: 'INSERT INTO permissions (name, guard_name) VALUES($1, $2)',
        values: [req.body.name, req.body.guard_name]
    }

    pool.query(q, (err, data)=>{
        if(err){
            if(err.code==='23505'){
                return next(createError(401, "Permission Already Exists"))
            }
            console.log(err)
            return next(createError(500, "Something Went Wrong"))
        }

        return res.status(200).json("New Permission Created Succesfully")

    })

}

export const updatePermission=(req, res)=>{

    const q= {
        text: 'UPDATE permissions SET "name"=$1, "guard_name"=$2 WHERE "id"=$3',
        values: [req.body.name, req.body.guard_name, req.params.id]
    }

    pool.query(q, (err, data)=>{

        if(err){
            if(err.code==='23505'){
                return next(createError(401, "Permission Already Exists"))
            }

            console.log(err)
            return next(createError(500, "Something Went Wrong. Try Again Later"))
        }

        return res.status(200).json("Permission Updated Succesfully")

    })
}
//get permissions
export const getPermissions=(req, res)=>{

    const q ='SELECT * FROM permissions'

    pool.query(q, (err, data)=>{
        if(err){
            console.log(err)
            return next(createError(500, "Something Went Wrong. Try Again Later"))
        }

        return res.status(200).json(data.rows)

    })

}


