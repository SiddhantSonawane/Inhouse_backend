import sql from '../config/db.js';

// Get all table names
export async function getAllTablesModel() {
    const query = `SHOW TABLES;`;
    console.log("Query is : ", query);
    return await sql.query(query);
  }

// Get all columns from a specific table
export async function getAllColumnsModel(tableName) {
  console.log("table is : ",tableName)
  const query = `DESC ${tableName};`;
  console.log("Query is : ", query);
  return await sql.query(query);
}

// Get all columns from a specific table
export async function getAllColumns(tableName) {
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

export async function updateSpecialAccess(Email, SpecialAccess) {

  const query = `UPDATE register set SpecialAccess = '${SpecialAccess}' where Email = '${Email}'`;
  console.log("Query is : ", query);

  const rows = await sql.query(query);
  const selectQuery = `Select * from register where Role = 1`;

  const res = await sql.query(selectQuery);

  return res[0];
}

// Update SpecialAccess columns for a user
export async function updateSpecialAccessFields(username, studentTables, teacherTables) {
  // Function to remove duplicates from an array
  const removeDuplicates = (array) => Array.from(new Set(array));

  // Function to append new values to existing values without duplicates
  const appendWithoutDuplicates = (existingValues, newValues) => {
    const allValues = removeDuplicates([...existingValues.split(','), ...newValues]);
    return allValues.join(',');
  };

  const query = `
    UPDATE register
    SET 
        SpecialAccess_Student = ?,
        SpecialAccess_Teacher = ?
    WHERE Username = ?;
  `;
  console.log('Query is:', query);

  // Fetch existing values
  const fetchQuery = `SELECT SpecialAccess_Student, SpecialAccess_Teacher FROM register WHERE Username = ?`;
  const [existingValues] = await sql.query(fetchQuery, [username]);

  // Append new values without duplicates
  const updatedStudentTables = appendWithoutDuplicates(existingValues[0].SpecialAccess_Student, studentTables);
  const updatedTeacherTables = appendWithoutDuplicates(existingValues[0].SpecialAccess_Teacher, teacherTables);

  const params = [updatedStudentTables, updatedTeacherTables, username];
  await sql.query(query, params);
}


// get the names of the tables whose access is given by admin

export async function getSpecialAccessTables (username) {
  const query = `SELECT SpecialAccess_Student, SpecialAccess_Teacher FROM register WHERE Username = '${username}';`;
  console.log('query is : ', query);
  return await sql.query(query)
}

// remove any table from special access of a user 
export async function removeSpecialAccessFields(username, studentTables, teacherTables) {
  // Function to remove values from existing values
  const removeValues = (existingValues, valuesToRemove) => {
    const updatedValues = existingValues.split(',').filter(value => !valuesToRemove.includes(value));
    return updatedValues.join(',');
  };

  const query = `
    UPDATE register
    SET 
        SpecialAccess_Student = ?,
        SpecialAccess_Teacher = ?
    WHERE Username = ?;
  `;
  console.log('Query is:', query);

  // Fetch existing values
  const fetchQuery = `SELECT SpecialAccess_Student, SpecialAccess_Teacher FROM register WHERE Username = ?`;
  const [existingValues] = await sql.query(fetchQuery, [username]);

  // Remove specified values
  const updatedStudentTables = removeValues(existingValues[0].SpecialAccess_Student, studentTables);
  const updatedTeacherTables = removeValues(existingValues[0].SpecialAccess_Teacher, teacherTables);

  const params = [updatedStudentTables, updatedTeacherTables, username];
  await sql.query(query, params);
}


export async function getAllNotices(Role) {

  console.log("Get notices model hit with Role = ", Role)
  var query = "";
  if(Role == 1 || Role == 2)
  {
    query = `SELECT * from notices where Role = 0`;
  }
  else
  {
    query = `SELECT * from notices where Role != 0`;
  }
  console.log("Query is = ", query)

  const result =  await sql.query(query);
  console.log("Result is  = ", result)
  return result[0];
}

export async function addNotices(notice) {
  
  const { Username, Title, Description, Role} = notice;
  await sql.query("INSERT INTO notices (Username, Title, Description, Role, DateTime) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP())", [Username, Title, Description, Role]);
  
}