export const storeUser = `
    INSERT INTO users (name, email, kfs_no, phone, password)
    VALUES ($1, $2, $3, $4, $5);
`