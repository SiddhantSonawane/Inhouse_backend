import express from 'express';
const router = express.Router();
// import BookPublicationsController from '../controller/2_bp.controller.js'; // Import your specific controller
import {
    BookPublicationsController, 
    ReasearchPublicationsController, 
    FacultyConferencePublicationsController, 
    GrantsController, 
    ConsultancyReportController, 
    PatentPublicationsController, 
    ConferenceSeminarsController, 
    SSTP_FDP_WorkshopController,
    Webinar_Guest_LectureController,
    Number_Of_MousController,
    Certificate_CoursesController,
    Prof_AffiliationsController,
    Faculty_as_ResourceController,
    Extension_ActivityController,
    Techfest_OrganizedController,
    Faculty_AchievementsController,
    Industrial_VisitsController,
    Contribution_To_BOSController
} from '../controller/teachers.controller.js'

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

//  Webinar_Guest_Lecture Routes
const controller9 = new Webinar_Guest_LectureController();

router.get("/web-guest/all", controller9.getAll);
router.get("/web-guest/:username", controller9.getByUsername);
router.post("/web-guest/create-new", controller9.create);
router.delete("/web-guest/remove", controller9.deleteByUsername);
router.put("/web-guest/update", controller9.updateByUsername);

//  Number_Of_Mous Routes
const controller10 = new Number_Of_MousController();

router.get("/number-of_mous/all", controller10.getAll);
router.get("/number-of_mous/:username", controller10.getByUsername);
router.post("/number-of_mous/create-new", controller10.create);
router.delete("/number-of_mous/remove", controller10.deleteByUsername);
router.put("/number-of_mous/update", controller10.updateByUsername);



//  Certificate_Courses Routes
const controller11 = new Certificate_CoursesController();

router.get("/cert-courses/all", controller11.getAll);
router.get("/cert-courses/:username", controller11.getByUsername);
router.post("/cert-courses/create-new", controller11.create);
router.delete("/cert-courses/remove", controller11.deleteByUsername);
router.put("/cert-courses/update", controller11.updateByUsername);


//  Prof_Affiliations Routes
const controller12 = new Prof_AffiliationsController();

router.get("/prof-aff/all", controller12.getAll);
router.get("/prof-aff/:username", controller12.getByUsername);
router.post("/prof-aff/create-new", controller12.create);
router.delete("/prof-aff/remove", controller12.deleteByUsername);
router.put("/prof-aff/update", controller12.updateByUsername);



//  Faculty_as_Resource Routes
const controller13 = new Faculty_as_ResourceController();

router.get("/facultyresource/all", controller13.getAll);
router.get("/facultyresource/:username", controller13.getByUsername);
router.post("/facultyresource/create-new", controller13.create);
router.delete("/facultyresource/remove", controller13.deleteByUsername);
router.put("/facultyresource/update", controller13.updateByUsername);

//  Extension_Activity Routes
const controller14 = new Extension_ActivityController();

router.get("/extension-act/all", controller14.getAll);
router.get("/extension-act/:username", controller14.getByUsername);
router.post("/extension-act/create-new", controller14.create);
router.delete("/extension-act/remove", controller14.deleteByUsername);
router.put("/extension-act/update", controller14.updateByUsername);


//  Techfest_Organized Routes
const controller15 = new Techfest_OrganizedController();

router.get("/techfest-org/all", controller15.getAll);
router.get("/techfest-org/:username", controller15.getByUsername);
router.post("/techfest-org/create-new", controller15.create);
router.delete("/techfest-org/remove", controller15.deleteByUsername);
router.put("/techfest-org/update", controller15.updateByUsername);

//  Faculty_Achievements Routes
const controller16 = new Faculty_AchievementsController();

router.get("/faculty-achievement/all", controller16.getAll);
router.get("/faculty-achievement/:username", controller16.getByUsername);
router.post("/faculty-achievement/create-new", controller16.create);
router.delete("/faculty-achievement/remove", controller16.deleteByUsername);
router.put("/faculty-achievement/update", controller16.updateByUsername);

// Industrial_Visits Routes
const controller17 = new Industrial_VisitsController();

router.get("/visit-tours/all", controller17.getAll);
router.get("/visit-tours/:username", controller17.getByUsername);
router.post("/visit-tours/create-new", controller17.create);
router.delete("/visit-tours/remove", controller17.deleteByUsername);
router.put("/visit-tours/update", controller17.updateByUsername);

//  Contribution_To_BOS Routes
const controller18 = new Contribution_To_BOSController();

router.get("/contribution-bos/all", controller18.getAll);
router.get("/contribution-bos/:username", controller18.getByUsername);
router.post("/contribution-bos/create-new", controller18.create);
router.delete("/contribution-bos/remove", controller18.deleteByUsername);
router.put("/contribution-bos/update", controller18.updateByUsername);

export default router;
