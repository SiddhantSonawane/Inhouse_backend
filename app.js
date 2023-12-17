import express from "express";
const app = express();
import 'dotenv/config'
import errorMiddleware from './middleware/Error.js'


app.use(express.json());

// Route imports
import teachersRoute from './routes/teachers.routes.js'


// using routes
app.use("/api/v1/teacher", teachersRoute);


// this middleware should be used at the last
app.use(errorMiddleware)

export default app