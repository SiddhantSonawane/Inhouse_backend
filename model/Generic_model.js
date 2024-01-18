import sql from '../config/db.js'

// Base model
class BaseModel {
  constructor(tableName, ID) {
    this.tableName = tableName;
    this.ID = ID;
  }

  async getAll() {
    const query = `SELECT * FROM ${this.tableName}`;
    console.log("Query is : ", query);
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

    const query = `INSERT INTO ${this.tableName} VALUES (${placeholders})`;
    console.log(query)
    try {
      const result = await sql.query(query, values);
      return result;
    } catch (error) {
      throw new Error(`Error inserting data: ${error.message}`);
    }
  }

  async update(username, ID, updatedFields) {

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
    )} WHERE Username = ? and ${this.ID} = ?`;
    setValues.push(username, ID);

    try {
      const result = await sql.query(query, setValues);
      return result;
    } catch (error) {
      throw new Error(`Error updating data: ${error.message}`);
    }
  }

  async deleteByUsername(username, ID) {
    const query = `DELETE FROM ${this.tableName} WHERE Username = ? and ${this.ID} = ?`;

    try {
      const result = await sql.query(query, [username, ID]);
      return result;
    } catch (error) {
      throw new Error(`Error deleting data: ${error.message}`);
    }
  }

  //filtering query
  async filterQuery(filters, orderBy, limit, startDate, endDate, dateColumn) {
    let query = `SELECT * FROM ${this.tableName}`;
  
    if (filters && Object.keys(filters).length > 0) {
      query += ' WHERE ';
      const filterKeys = Object.keys(filters);
      filterKeys.forEach((key, index) => {
        query += `${key} = '${filters[key]}'`;
  
        if (index !== filterKeys.length - 1) {
          query += ' AND ';
        }
      });
    }

    // Adding dynamic date filtering if start and end dates are provided
    if (startDate && endDate && dateColumn) {
      if (filters && Object.keys(filters).length > 0) {
        query += ' AND ';
      } else {
        query += ' WHERE ';
      }
      query += `${dateColumn} BETWEEN '${startDate}' AND '${endDate}'`;
    }
  
    // Adding ORDER BY clause
    if (orderBy) {
      query += ` ORDER BY ${orderBy} `;
    }
  
    // Adding LIMIT clause
    if (limit) {
      query += ` LIMIT ${limit} `;
    }

    try {
      const result = await sql.query(query);
      return result[0];
    } catch (error) {
      throw new Error(`Error querying data: ${error.message}`);
    }
}

  // get all the columns that are selected for filtering by giving a table name
  async getFilteringColumns() {
    const query = `SELECT filtering_columns FROM metadata WHERE table_name = '${this.tableName}'`;
    console.log("Query is : ", query);
    // return await sql.query(query, [tableName]);
    const [rows] = await sql.query(query, [this.tableName]); 
    const filteringColumnsArray = rows[0].filtering_columns.split(',');
    return filteringColumnsArray;
  }

  // async getDistinctValues() {
  //   const filteringColumns = await this.getFilteringColumns();
  //   const columnsArray = filteringColumns;
  //   const distinctValues = {};

  //   for (const column of columnsArray) {
  //     const query = `SELECT DISTINCT ${column} FROM ${this.tableName}`;
  //     const result = await sql.query(query);

  //     distinctValues[column] = result[0].map((row) => row[column]);
  //   }

  //   return distinctValues;
  // }


  //combined

  async getFilteringColumnsWithDistinctValues() {
    const filteringColumns = await this.getFilteringColumns();
    const filteringColumnsWithDistinctValues = [];

    for (const column of filteringColumns) {
      const query = `SELECT DISTINCT ${column} FROM ${this.tableName}`;
      const result = await sql.query(query);
      const distinctValues = result[0].map((row) => row[column]);

      filteringColumnsWithDistinctValues.push({
        [column]: distinctValues,
      });
    }

    return filteringColumnsWithDistinctValues;
  }

  // get names of tables for students and teahers

  async getTableNamesST() {
    const query = `SELECT Student_Tables,Teacher_Tables FROM ${this.tableName};`;
    console.log('query is: ', query);
    return await sql.query(query);
  }

  // You can have more specific methods 
  // for each table in their respective models.
}

export default BaseModel;