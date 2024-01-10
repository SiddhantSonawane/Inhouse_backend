import express from 'express';
import BasicController from '../controller/basics.controller.js';

const router = express.Router();
const basicController = new BasicController();

router.get("/alltables", basicController.getAllTables);
router.post("/allcolumns", basicController.getAllColumns);
router.post("/get-user-data", basicController.getUserData);

export default router;