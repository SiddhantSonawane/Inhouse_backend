import sql from '../config/db.js';

// Get all table names
export async function getAllTablesModel() {
    const query = `SHOW TABLES;`;
    console.log("Query is : ", query);
    return await sql.query(query);
  }

// Get all columns from a specific table
export async function getAllColumnsModel(tableName) {
  const query = `SHOW COLUMNS FROM ${tableName};`;
  console.log("Query is : ", query);
  return await sql.query(query);
}

// Get all the data of the user according to selected table names
export async function getDataForUserModel(username, tableName) {
  const query = `SELECT * FROM ${tableName} WHERE Username = ?`;
  console.log("Query is : ", query);
  return await sql.query(query, [username]);
}

// get all the columns that are selected for filtering by giving a table name

export async function getFilteringColumnsModel(tableName) {
  const query = `SELECT filtering_columns FROM metadata WHERE table_name = '${tableName}'`;
  console.log("Query is : ", query);
  // return await sql.query(query, [tableName]);
  const [rows] = await sql.query(query, [tableName]); 
  const filteringColumnsArray = rows[0].filtering_columns.split(',');
  return filteringColumnsArray;
}