import express from 'express';
import BasicController from '../controller/basics.controller.js';

const router = express.Router();
const basicController = new BasicController();

router.get("/alltables", basicController.getAllTables);
router.post("/get-user-data", basicController.getUserData);
router.post("/get-filtering-cols", basicController.getFilteringColumns);
router.post("/update-access", basicController.updateAccess)

export default router;