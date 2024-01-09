import sql from '../config/db.js'

// Base model
class BaseModel {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async getAll() {
    const query = `SELECT * FROM ${this.tableName}`;
    return await sql.query(query);
  }

  async getByUsername(username) {
    const query = `SELECT * FROM ${this.tableName} WHERE Username = ?`;
    return await sql.query(query, [username]);
  }

  async create(newData) {
    // console.log("newdata from generic model", newData)
    const columns = Object.keys(newData).join(", ");
    const placeholders = Object.keys(newData)
      .map(() => "?")
      .join(", ");
    const values = Object.values(newData);
    console.log("placeholders are : ", placeholders);

    const query = `INSERT INTO ${this.tableName} VALUES (${placeholders})`;
    console.log(query)
    try {
      const result = await sql.query(query, values);
      return result;
    } catch (error) {
      throw new Error(`Error inserting data: ${error.message}`);
    }
  }

  async update(username, T_ID, updatedFields) {


    const setValues = [];
    const setFields = [];

    for (const key in updatedFields) {
      if (Object.prototype.hasOwnProperty.call(updatedFields, key)) {
        setFields.push(`${key} = ?`);
        setValues.push(updatedFields[key]);
      }
    }

    const query = `UPDATE ${this.tableName} SET ${setFields.join(
      ", "
    )} WHERE Username = ? and T_ID = ?`;
    setValues.push(username, T_ID);

    try {
      const result = await sql.query(query, setValues);
      return result;
    } catch (error) {
      throw new Error(`Error updating data: ${error.message}`);
    }
  }

  async deleteByUsername(username, T_ID) {
    const query = `DELETE FROM ${this.tableName} WHERE Username = ? and T_ID = ?`;

    try {
      const result = await sql.query(query, [username, T_ID]);
      return result;
    } catch (error) {
      throw new Error(`Error deleting data: ${error.message}`);
    }
  }

  // You can have more specific methods 
  // for each table in their respective models.
}

export default BaseModel;
