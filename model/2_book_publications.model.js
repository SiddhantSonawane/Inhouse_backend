import sql from '../config/db.js'
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';

class BookPublications {
    constructor(bookpb) {
        this.username = bookpb.username;
        this.facultyName = bookpb.facultyName;
        this.department = bookpb.department;
        this.bookTitle = bookpb.bookTitle;
        this.chapter = bookpb.chapter;
        this.level = bookpb.level;
        this.publisher = bookpb.publisher;
        this.yearOfPublication = bookpb.yearOfPublication;
        this.DOI = bookpb.DOI;
        this.proof = bookpb.proof;
    }
    static async getAll() {
        let query = "SELECT * FROM 2__book_publication";
        const res = await sql.query(query);
        return res;
    }
    static async getByUsername(uname){
        let query =" SELECT * FROM 2__book_publication where Username = ?"
        const res = await sql.query(query, [uname])
        return res
    }
    static async createQuery(newBookPublications){
        let query = "INSERT INTO `2__book_publication` VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const values = [
            newBookPublications.username,
            newBookPublications.facultyName,
            newBookPublications.department,
            newBookPublications.bookTitle,
            newBookPublications.chapter,
            newBookPublications.level,
            newBookPublications.publisher,
            newBookPublications.yearOfPublication,
            newBookPublications.DOI,
            newBookPublications.proof
        ];
        try {
            const res = await sql.query(query, values);
            return res;
        } catch (error) {
            throw new Error(`Error inserting data: ${error.message}`);
        }
        
    }
    static async update(username, fieldsToUpdate) {
        let query = "UPDATE `2__book_publication` SET ";
        const setValues = [];
        const setFields = [];
    
        for (const key in fieldsToUpdate) {
            if (Object.prototype.hasOwnProperty.call(fieldsToUpdate, key)) {
                setFields.push(`${key} = ?`);
                setValues.push(fieldsToUpdate[key]);
            }
        }
    
        query += setFields.join(", ");
        query += " WHERE Username = ?";
    
        setValues.push(username);
    
        try {
            const res = await sql.query(query, setValues);
            return res;
        } catch (error) {
            throw new Error(`Error updating data: ${error.message}`);
        }
    }

    static async remove(username){
        let query = "DELETE FROM `2__book_publication` WHERE Username = ?"

        try {
            const res = await sql.query(query, [username])
            return res
        } catch (error) {
            throw new Error(`Error deleting data: ${error.message}`)
        }
    }
}


export default BookPublications