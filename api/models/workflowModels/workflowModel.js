export const storeWorkflow = `
INSERT INTO workflow (name)
VALUES ($1);`

export const searchWorkflowq = `
SELECT *
FROM workflow 
WHERE name ILIKE '%' || $1 || '%'
ORDER BY id ASC;`

export const updateWorkflow = `
UPDATE workflow
SET name = $1 
WHERE id = $2;`

export const deleteWorkflow = `
delete from workflow
where id = $1;`