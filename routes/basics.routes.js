import express from 'express';
import BasicController from '../controller/basics.controller.js';

const router = express.Router();
const basicController = new BasicController();

router.get("/alltables", basicController.getAllTables);
router.post("/get-user-data", basicController.getUserData);
router.post("/allcolumns", basicController.getAllColumns);
router.put("/update-access", basicController.updateAccess);

export default router;