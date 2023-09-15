export const storeSubcompartment = `
INSERT INTO subcompartment (conservancy, county, forest_station, subcompartment,species
    , xcordinate, ycordinate, area, planting_year, density,mdbh,mht, age, remarks)
VALUES ($1, $2, $3, $4,$5,$6, $7, $8, $9,$10,$11,$12,$13,$14);
`

export const searchSubcompartment = `
SELECT *
FROM subcompartment sb JOIN station st ON  sb.forest_station=st.station_id
WHERE st.station_name LIKE '%' || $1 || '%' 
  AND sb.sub_compartment LIKE '%' || $2 || '%'
ORDER BY sb.sub_compartment ASC;
`
