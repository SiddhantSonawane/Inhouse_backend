import sql from '../config/db.js';

// Get all table names
export async function getAllTablesModel() {
    const query = `SHOW TABLES;`;
    console.log("Query is : ", query);
    return await sql.query(query);
  }

// Get all the data of the user according to selected table names
export async function getDataForUserModel(username, tableName) {
  const query = `SELECT * FROM ${tableName} WHERE Username = ?`;
  console.log("Query is : ", query);
  return await sql.query(query, [username]);
}

export async function updateSpecialAccess(Email, SpecialAccess) {

  const query = `UPDATE register set SpecialAccess = '${SpecialAccess}' where Email = '${Email}'`;
  console.log("Query is : ", query);

  const rows = await sql.query(query);
  const selectQuery = `Select * from register where Role = 1`;

  const res = await sql.query(selectQuery);

  return res[0];
}