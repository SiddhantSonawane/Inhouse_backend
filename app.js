import express from "express";
const app = express();
import cors from 'cors';
import 'dotenv/config'
import errorMiddleware from './middleware/Error.js'

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Route imports
import teachersRoute from './routes/teachers.routes.js'
import loginRegisterRoutes from './routes/loginRegisterRoutes.js';
import basicRoutes from './routes/basics.routes.js';
import studentRoutes from './routes/students_routes.js';


// using routes

// Simple middleware to log incoming requests
// app.use((req, res, next) => {
//     console.log(`Received request: ${req.method} ${req.url} `);
//     next();
// });
app.use("/api/v1/teacher", teachersRoute);
app.use("/api/v1/auth", loginRegisterRoutes);
app.use("/api/v1/general",basicRoutes)
app.use("/api/v1/student", studentRoutes);

// this middleware should be used at the last
app.use(errorMiddleware)

export default app