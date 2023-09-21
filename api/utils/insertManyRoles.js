import pool from "../models/postgres.js";

export const insertManyRoles = async (permissionsArray, id) => {
    const insertPromises = permissionsArray.map(async (element) => {
      const q = {
        text: 'INSERT INTO role_has_permissions (role_id, permission_id) VALUES ($1, $2)',
        values: [id, element],
      };
  
      try {
        await pool.query(q);
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  
    try {
      await Promise.all(insertPromises);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  