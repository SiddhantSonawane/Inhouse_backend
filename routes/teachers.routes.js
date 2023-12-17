import express from 'express';
const router = express.Router();
// import BookPublicationsController from '../controller/2_bp.controller.js'; // Import your specific controller
import {BookPublicationsController, ReasearchPublicationsController, FacultyConferencePublicationsController, GrantsController, ConsultancyReportController, PatentPublicationsController, ConferenceSeminarsController, SSTP_FDP_WorkshopController} from '../controller/teachers.controller.js'

// Research Publications Routes
const controller1 = new ReasearchPublicationsController(); 

router.get("/research-pb/all", controller1.getAll);
router.get("/research-pb/:username", controller1.getByUsername);
router.post("/research-pb/create-new", controller1.create);
router.delete("/research-pb/remove", controller1.deleteByUsername);
router.put("/research-pb/update", controller1.updateByUsername);

// Book publication Routes
const controller2 = new BookPublicationsController(); 

router.get("/book-pb/all", controller2.getAll);
router.get("/book-pb/:username", controller2.getByUsername);
router.post("/book-pb/create-new", controller2.create);
router.delete("/book-pb/remove", controller2.deleteByUsername);
router.put("/book-pb/update", controller2.updateByUsername);

//FacultyConference publication Routes
const controller3 = new FacultyConferencePublicationsController(); 

router.get("/faculty-pb/all", controller3.getAll);
router.get("/faculty-pb/:username", controller3.getByUsername);
router.post("/faculty-pb/create-new", controller3.create);
router.delete("/faculty-pb/remove", controller3.deleteByUsername);
router.put("/faculty-pb/update", controller3.updateByUsername);

// Grants Routes
const controller4 = new GrantsController(); 

router.get("/grants/all", controller4.getAll);
router.get("/grants/:username", controller4.getByUsername);
router.post("/grants/create-new", controller4.create);
router.delete("/grants/remove", controller4.deleteByUsername);
router.put("/grants/update", controller4.updateByUsername);

// ConsultancyReport Routes
const controller5 = new ConsultancyReportController(); 

router.get("/cons-rep/all", controller5.getAll);
router.get("/cons-rep/:username", controller5.getByUsername);
router.post("/cons-rep/create-new", controller5.create);
router.delete("/cons-rep/remove", controller5.deleteByUsername);
router.put("/cons-rep/update", controller5.updateByUsername);

// Patent Publication Routes
const controller6 = new PatentPublicationsController(); 

router.get("/patent-pb/all", controller6.getAll);
router.get("/patent-pb/:username", controller6.getByUsername);
router.post("/patent-pb/create-new", controller6.create);
router.delete("/patent-pb/remove", controller6.deleteByUsername);
router.put("/patent-pb/update", controller6.updateByUsername);

// ConferenceSeminars Routes
const controller7 = new ConferenceSeminarsController(); 

router.get("/con-sem/all", controller7.getAll);
router.get("/con-sem/:username", controller7.getByUsername);
router.post("/con-sem/create-new", controller7.create);
router.delete("/con-sem/remove", controller7.deleteByUsername);
router.put("/con-sem/update", controller7.updateByUsername);

// SSTP_FDP_Workshop Routes
const controller8 = new SSTP_FDP_WorkshopController(); 

router.get("/sf-ws/all", controller8.getAll);
router.get("/sf-ws/:username", controller8.getByUsername);
router.post("/sf-ws/create-new", controller8.create);
router.delete("/sf-ws/remove", controller8.deleteByUsername);
router.put("/sf-ws/update", controller8.updateByUsername);



export default router;
