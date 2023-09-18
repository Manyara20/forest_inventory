export const storeSubcompartment = `
INSERT INTO subcompartment (conservancy, county, forest_station, subcompartment,species
    , xcordinate, ycordinate, area, planting_year, density,mdbh,mht, age, remarks)
VALUES ($1, $2, $3, $4,$5,$6, $7, $8, $9,$10,$11,$12,$13,$14);
`

export const searchSubcompartment = `
SELECT *
FROM subcompartment sb
JOIN station st ON sb.forest_station = st.station_id
WHERE st.station_name ILIKE '%' || $1 || '%'
AND sb.subcompartment ILIKE '%' || $2 || '%'
ORDER BY sb.subcompartment ASC;
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
WHERE
    subcompartment_id = $15;
`