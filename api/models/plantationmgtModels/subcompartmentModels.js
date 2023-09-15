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
OR sb.subcompartment ILIKE '%' || $2 || '%'
ORDER BY sb.subcompartment ASC;
`