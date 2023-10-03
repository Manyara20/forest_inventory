import createError from "../createError.js"
import pool from "../models/postgres.js"
import { getIndividualPermissionsQuery, rolePermissionsQuery } from "../models/roleModels/roleQueries.js"
import { insertManyRoles } from "../utils/insertManyRoles.js"

export const getRoles=(req, res)=>{

    const q ="SELECT id, guard_name, name FROM roles"

    pool.query(q, (err, data)=>{
        if(err){
            console.log(err)
            return res.status(500).json("Something Went Wrong. Try Again Later")
        }

        return res.status(200).json(data.rows)

    })

}



export const createRole = async (req, res,next)=>{
    console.log(req.body)

    const q = {text: `INSERT INTO roles (name, guard_name) 
                      VALUES($1, $2)
                      RETURNING id;`,
                values: [req.body.name, req.body.selectedPermissions]}

    try {
        const {rows} = await pool.query(q)
        const id = rows[0].id

        if(req.body.selectedPermissions){
            await insertManyRoles(req.body.selectedPermissions, id)
        }

        return res.status(200).json("Role Add Succesful");

    } catch (error) {
        console.log(error)
        if(error.code==='23505') {
            return next(createError(401, "Role Already Exists"))
        }
        return next(createError(500, "Something Went Wrong"))
    }
}

export const updateRole=(req, res)=>{

    console.log(req.body);
    
    const q ={
        text:'UPDATE roles SET "name"=$1, "guard_name"=$2 WHERE "id"=$3',
        values: [req.body.name, req.body.guardName, req.params.id]
    }

    pool.query(q, (err, data)=>{
        if(err){
            console.log(err)
            return res.status(500).json("Something Went Wrong. Try Again Later")
        }

        return res.status(200).json("Roles Updated Succesfully")

    })
}


//get Roles

export const getRoles1=(req, res)=>{

    const q ='SELECT * FROM roles'

    pool.query(q, (err, data)=>{
        if(err){
            console.log(err)
            return res.status(500).json("Something Went Wrong. Try Again Later")
        }

        return res.status(200).json(data.rows)

    })

}

//get roles

export const getAllRoles=(req, res)=>{

    const q ='SELECT id,name,guard_name FROM roles'

    pool.query(q, (err, data)=>{
        if(err){
            console.log(err)
            return res.status(500).json("Something Went Wrong. Try Again Later")
        }

        return res.status(200).json(data.rows)

    })

}

//get role Permissions
export const getRolePermisions =(req, res)=>{

    pool.query(rolePermissionsQuery, (err, data)=>{
        if (err){
            console.log(err)
            res.status(500).json("Something Went Wrong. Try Later")
        }

        return res.status(200).json(data.rows)
    })
}

//remove role permissions

export const removeRolesPermission1 =(req, res)=>{

    const permission = req.body.permission.trim();

    const q={
        text: 'SELECT id FROM permissions WHERE name=$1',
        values: [permission]
    }

    pool.query(q, (err, data)=>{

    if (err){
        console.log(err)
        return res.status(500).json("Something Went Wrong. Try Again Later")
    }

    if(data.rows.length===0){
        return res.status(409).json("Permission does not exist")
    }

    const permId =data.rows[0].id
    console.log(permId)
    
    const q= {
        text: 'DELETE FROM role_has_permissions WHERE "role_id"=$1 AND "permission_id"=$2',
        values: [req.params.id, permId]
    }

    pool.query(q, (err, data)=>{
        if (err){
            console.log(err)
            return res.status(500).json("Internal Server Error")
        }
        
        return res.status(200).json("Permission Removed Succesfully")
    })

    
})

}


export const addRolePermissions =(req, res)=>{

    const q = {
        text: 'INSERT INTO role_has_permissions (role_id, permission_id) VALUES($1,$2)',
        values: [req.params.id, req.body.permissionId]

    }

    //TODO: CHECK IF USER HAS PERMISSION TO IMPROVE EFFICIENCY 

    pool.query(q, (err, data)=>{
        
        if(err){
            if(err.code==='23505'){
                return res.status(401).json("Permission Already Assigned")
            }
            console.log(err)
            return res.status(500).json("Something Went Wrong. Try Again Later")            
        }

        return res.status(200).json("Permission Added Succesfully")
        
    })
}


export const getIndividualRolePermissions = async (req, res, next)=>{
    try {
        const { rows } = await pool.query(getIndividualPermissionsQuery, [req.query.roleId])
        return res.status(200).json(rows[0].permissionsarray)
    } catch (error) {
        next(createError(500, "Something Went Wrong"))
    }
}

export const removeRolesPermission = async (req, res, next)=>{
    const q= {
        text: 'DELETE FROM role_has_permissions WHERE "role_id"=$1 AND "permission_id"=$2',
        values: [req.params.roleId, req.params.permId]
    }
    try {
        await  pool.query(q)
        return res.status(200).json("Removed Succesfull")
    } catch (error) {
        next(createError(500,"Something Went Wrong"))
    }
}