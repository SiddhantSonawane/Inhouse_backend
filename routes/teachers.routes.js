import express from 'express';
const router = express.Router();
// import BookPublicationsController from '../controller/2_bp.controller.js'; // Import your specific controller
import {BookPublicationsController} from '../controller/teachers.controller.js'
// Reasearch Publications




// Book publication
const controller = new BookPublicationsController(); 

router.get("/book-pb/all", controller.getAll);
router.get("/book-pb/:username", controller.getByUsername);
router.post("/book-pb/create-new", controller.create);
router.delete("/book-pb/remove", controller.deleteByUsername);
router.put("/book-pb/update", controller.updateByUsername);




export default router;
