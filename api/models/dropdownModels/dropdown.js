export const conservancylist = `
SELECT conservancy_id,conservancy_name FROM  conservancy  WHERE conservancy_id>0;
`
export const countylist = `
SELECT county_id,county_name FROM  county  WHERE conservancy_id=$1;
`