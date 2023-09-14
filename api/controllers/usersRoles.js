import pool from "../models/postgres.js"
import { userRolesQuery } from "../models/userRoles/userRolesQueries.js";

export const createUsersRole =(req, res)=>{
    const q ="INSERT INTO user_permissions (`userId`, `permissionId`) VALUE(?)";

    const values =[req.body.userId, req.body.permissionId];

    pool.query(q, [values], (err, data)=>{
        
        if(err){
            if(err.code==='ER_DUP_ENTRY'){
                return res.status(401).json("User Already Has That Permission")
            }
            return res.status(500).json("Something Went Wrong. Try Again Later")            
        }

        return res.status(200).json("Permision Added Succesfully")
        
    })
}

export const getUserRoles =(req, res)=>{

    pool.query(userRolesQuery, (err, data)=>{
        if (err){
            console.log(err)
            res.status(500).json("Something Went Wrong. Try Later")
        }

        return res.status(200).json(data.rows)
    })
}

//TODO: REMOVE

export const removeUserRole =(req, res)=>{

    const q={
        text: 'SELECT id FROM users WHERE email=$1',
        values: [req.body.email]
    }

    pool.query(q, (err, data)=>{

    if (err){
        console.log(err)
        return res.status(500).json("Something Went Wrong. Try Again Later")
    }
    
    const userId=data.rows[0]?.id;

    const q = {
        text: "DELETE FROM model_has_roles WHERE model_id = $1 AND role_id = $2",
        values: [userId, req.params.id]

    }
    pool.query(q, (err, data)=>{
        if (err){
            console.log(err)
            return res.status(500).json("Internal Server Error")
        }
        
        return res.status(200).json("Role Removed Succesfully")
    })

    
})

};

export const addModelRoles =(req, res)=>{

    const modelType= "users"

    const q ={
        text: 'INSERT INTO model_has_roles (model_id, role_id, model_type) VALUES ($1, $2, $3)',
        values: [req.body.userId, req.body.roleId, modelType]
    }

    pool.query(q, (err, data)=>{

        if(err){
            if(err.code==='23505'){
                return res.status(401).json("User Already Has That Role")
            }
            console.log(err)
            return res.status(500).json("Something Went Wrong. Try Again Later")            
        }

        return res.status(200).json("Roles Assigned Succesfully")
    })
}

