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
