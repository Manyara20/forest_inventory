export const userRolesQuery = `
SELECT rl.name, rl.id, STRING_AGG(usr.email, ',') AS emails
FROM model_has_roles usp
INNER JOIN roles rl ON usp.role_id = rl.id
INNER JOIN users usr ON usp.model_id = usr.id
WHERE rl.id != 5
GROUP BY usp.role_id, rl.name, rl.id;
`;