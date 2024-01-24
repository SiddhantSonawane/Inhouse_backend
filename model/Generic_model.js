import sql from '../config/db.js'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUploadPath = path.join(__dirname, "..", "Uploads");

// Base model
class BaseModel {
  constructor(tableName, ID, baseUploadPath) {
    this.tableName = tableName;
    this.ID = ID;
    this.baseUploadPath = baseUploadPath
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
  async filterQuery(filters, orderBy, limit, Start_Year, End_Year, startDate, endDate, dateColumn) {
    let query = `SELECT * FROM ${this.tableName}`;
    const queryParams = [];
  
    if (filters && Object.keys(filters).length > 0) {
      query += ' WHERE ';
      const filterKeys = Object.keys(filters);
      filterKeys.forEach((key, index) => {
        if(key == 'Username') {
          query += `USername like '%${filters[key]}%'`;
        }
        else{
          query += `\`${key}\` = '${filters[key]}'`;
        }
  
        if (index !== filterKeys.length - 1) {
          query += ' AND ';
        }
      });
    }

    if(Start_Year && End_Year) {
      
      if (filters && Object.keys(filters).length > 0) {
        query += ' AND ';
      } else {
        query += ' WHERE ';
      }
      query += `Year BETWEEN '${Start_Year}' AND '${End_Year}'`;
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
    query+=';';

    console.log("Query found is : ", query);

    try {
      const result = await sql.query(query);
      return result[0];
    } catch (error) {
      throw new Error(`Error querying data: ${error.message}`);
    }
}

  // get all the columns that are selected for filtering by giving a table name
  async getFilteringColumns() {
    const query = `SELECT filtering_columns FROM metadata_teacher WHERE table_name = '${this.tableName}'`;
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


  //file upload functionality

  async uploadFile(username, role, tableName, file) {
    // Check and create folders if they don't exist
    const uploadPath = this.getUploadPath(username, role, tableName);
    this.createFoldersIfNotExist(uploadPath);
    console.log("inside")
    
    const filename = `${file.originalname}`;
    // console.log(filename)
    const filePath = path.join(uploadPath, filename);

    // Check if the file already exists in the database
    const existingFileQuery = `SELECT * FROM uploads WHERE user_id = ? AND role = ? AND file_name = ?`;
    const existingFiles = await sql.query(existingFileQuery, [1, role, filename]);

    console.log('len ', existingFiles[0].length)
    const len = existingFiles[0].length;

    // console.log('exixst ', existingFiles[0][0].file_name );

    if(len > 0)
    {
      const existingfilename = existingFiles[0][0].file_name;
      const existingfilepath = existingFiles[0][0].file_path;
      console.log('path is ', existingfilepath)
      if (existingFiles[0].length > 0 && existingfilename == filename) {
        // File with the same name already exists, handle accordingly
        console.log("File with the same name already exists:", filename);
        //  throw an error, return a message
        return { filename: existingfilename, filePath: existingfilepath};
        // throw new Error("File with the same name already exists");
      }
    }

    // Save file to local storage
    fs.writeFileSync(filePath, file.buffer)
    
    // Save file information to the database
    const insertQuery = `INSERT INTO uploads (user_id, role, file_name, file_path, created_at) VALUES (?, ?, ?, ?, NOW())`;
    await sql.query(insertQuery, [1,role,filename, filePath]);

    return { filename, filePath };
  }

  getUploadPath(username, role, tableName) {
    console.log('role is: ',role)
    const baseUploadPath = this.baseUploadPath;
    // const roleFolder = role === 1 ? 'Teacher_Uploads' : 'Student_Uploads';
    let roleFolder = 'Admin_Uploads';

    if(role == 1) roleFolder = 'Teacher_Uploads';
    else roleFolder = 'Student_Uploads';

    const userFolder = username;
    const tableFolder = tableName;
  
    // Use process.cwd() to get the current working directory
    // const currentDirPath = process.cwd();
  
    return path.join(baseUploadPath, roleFolder, tableFolder, userFolder);
  }    

  createFoldersIfNotExist(folderPath) {
    try {
      // Use synchronous stat to check if the folder exists
      fs.statSync(folderPath);
    } catch (error) {
      if (error.code === 'ENOENT') {
        // ENOENT indicates that the folder doesn't exist
        try {
          // Use synchronous mkdir to create the folder
          fs.mkdirSync(folderPath, { recursive: true });
          console.log(`Folder created: ${folderPath}`);
        } catch (mkdirError) {
          console.error(`Error creating folder: ${mkdirError.message}`);
          // Handle the error as needed, e.g., throw an exception or log a message
        }
      } else {
        console.error(`Error checking folder existence: ${error.message}`);
        // Handle the error as needed
      }
    }
  }
  
  // fetch the pdf files

  async getPdfContent(user_id, role, filename) {
    try {
      const query = `
        SELECT file_name, file_path
        FROM uploads
        WHERE user_id = ? AND role = ? AND file_name = ?;
      `;
      const result = await sql.query(query, [user_id, role, filename]);

      if (result && result.length > 0) {
        return result[0];
      }

      return null;
    } catch (error) {
      throw new Error(`Error fetching PDF content: ${error.message}`);
    }
  }


  

  // You can have more specific methods 
  // for each table in their respective models.
}

export default BaseModel;