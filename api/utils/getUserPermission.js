import pool from "../models/postgres.js";

export const getAllUserPermissions = async (userId)=>{
    const q = {
        text:`SELECT url.model_id, ARRAY_AGG(rp.permission_id) 
                AS permissions 
                FROM model_has_roles url 
                JOIN role_has_permissions rp 
                ON rp.role_id=url.role_id 
                WHERE url.model_id = $1 GROUP BY url.model_id;`,
        values: [userId]
      };
    try {
        const {rows} = await pool.query(q)
        const uniquePermissions= (rows.length===0) ? []: [...new Set(rows[0]?.permissions)];
        return uniquePermissions
    } catch (error) {
        console.log(error);
        throw error;
    }
}