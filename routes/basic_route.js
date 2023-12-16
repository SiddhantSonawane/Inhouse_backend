import express from "express";
const app = express();
const router = express.Router();
import { myfunc } from "../controller/basic_route.controller.js";


router.get("/dummy", myfunc)

export default router