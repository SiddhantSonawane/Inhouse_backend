import express from "express";
const app = express();
import 'dotenv/config'
import errorMiddleware from './middleware/Error.js'


app.use(express.json());

// Route imports
import teachersRoute from './routes/teachers.routes.js'
import loginRegisterRoutes from './routes/loginRegisterRoutes.js';


// using routes
app.use("/api/v1/teacher", teachersRoute);
app.use("/api/v1/auth", loginRegisterRoutes);

// this middleware should be used at the last
app.use(errorMiddleware)

export default app