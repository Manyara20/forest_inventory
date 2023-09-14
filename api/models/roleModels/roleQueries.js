export const rolePermissionsQuery = `
  SELECT 
      rl.name, 
      rl.id, 
      STRING_AGG(pm.name, ', ') AS permissions 
  FROM 
      role_has_permissions rp 
  JOIN 
      roles rl ON rp.role_id = rl.id
  JOIN 
      permissions pm ON rp.permission_id = pm.id 
  GROUP BY 
      rp.role_id, rl.name, rl.id;
`;