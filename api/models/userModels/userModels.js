export const storeUser = `
    INSERT INTO users (name, email, kfs_no, phone, password)
    VALUES ($1, $2, $3, $4, $5);`
    export const  modeluser= `
    INSERT INTO model_has_roles (role_id, model_type, model_id)
    VALUES ($1, $2, $3);`

export const searchuser = `
SELECT us.*,rs.name as role
FROM users us
JOIN model_has_roles rm ON us.id = rm.model_id
JOIN roles rs on rm.role_id=rs.id 
WHERE us.email ILIKE '%' || $1 || '%'
AND rs.name ILIKE '%' || $2 || '%'
ORDER BY us.id ASC;`