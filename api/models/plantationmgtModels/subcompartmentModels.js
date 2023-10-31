export const storeSubcompartment = `
INSERT INTO subcompartment (conservancy, county, forest_station, subcompartment,species
    , xcordinate, ycordinate, area, planting_year, density,mdbh,mht, age, remarks,received_date,volume)
VALUES ($1, $2, $3, $4,$5,$6, $7, $8, $9,$10,$11,$12,$13,$14,$15,$16);
`


// JOIN model_has_roles rm ON us.id = rm.model_id
// JOIN roles rs on rm.role_id=rs.id 
// WHERE us.email ILIKE '%' || $1 || '%'
// AND rs.name ILIKE '%' || $2 || '%'
// ORDER BY us.id ASC;`

export const searchSubcompartment = `
SELECT *
FROM subcompartment sb
join conservancy cy on sb.conservancy=cy.conservancy_id
join county ct on sb.county=ct.county_id
JOIN station st ON sb.forest_station = st.station_id
WHERE st.station_name ILIKE '%' || $1 || '%'
AND sb.subcompartment ILIKE '%' || $2 || '%'
AND status is null
ORDER BY sb.subcompartment_id ASC;
`

export const updateSubcompartment = `
UPDATE subcompartment
SET
    conservancy = $1,     
    county = $2,          
    forest_station = $3,
    subcompartment=$4,
    species = $5,
    xcordinate = $6,
    ycordinate = $7,
    area = $8,
    planting_year = $9,
    density = $10,
    mdbh = $11,
    mht = $12,             
    age = $13,             
    remarks = $14 
    received_date = $15,             
    volume = $16 
WHERE
    subcompartment_id = $17;
`

export const deletesubcompartment = `
UPDATE subcompartment
SET
    status = $1     
    WHERE
    subcompartment_id = $2;
`