import pool from "../models/postgres.js"
import { rolePermissionsQuery } from "../models/roleModels/roleQueries.js"

export const getRoles=(req, res)=>{

    const q ="SELECT id, name FROM roles"

    pool.query(q, (err, data)=>{
        if(err){
            console.log(err)
            return res.status(500).json("Something Went Wrong. Try Again Later")
        }

        return res.status(200).json(data.rows)

    })

}



export const createRole =(req, res)=>{

    const q = {text: 'INSERT INTO roles (name, guard_name) VALUES($1, $2)',
                values: [req.body.name, req.body.guardName]}

    pool.query(q, (err, data)=>{
        if(err){
            console.log(err)
            return res.status(500).json("Something Went Wrong. Try Again Later")
        }

        return res.status(200).json("New Role Created Succesfully")

    })

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

export const removeRolesPermission =(req, res)=>{

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

//add role permission

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