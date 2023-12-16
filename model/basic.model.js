import sql from '../config/db.js'

export const getAllData= async(uname) => {
  let query = "SELECT * FROM 1__research_publication";

  if (uname) {
    query += ` WHERE Username LIKE '%${uname}%'`;
  }
  const res = await sql.query(query);
  
  return res
}