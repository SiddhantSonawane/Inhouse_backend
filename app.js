import express from "express";
const app = express();
import 'dotenv/config'
import errorMiddleware from './middleware/Error.js'


app.use(express.json());

// Route imports
import dummyroute from './routes/basic_route.js'
import bookPRoute from './routes/2_book_publications.js'


// using routes
app.use("/api/v1", dummyroute);
app.use("/api/v1/book-pb", bookPRoute);


// this middleware should be used at the last
app.use(errorMiddleware)

export default app