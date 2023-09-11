export const storeSubcompartment = `
INSERT INTO subcompart_test (conservancy, county, forest_station, subcompartment,remarks)
VALUES ($1, $2, $3, $4,$5);
`