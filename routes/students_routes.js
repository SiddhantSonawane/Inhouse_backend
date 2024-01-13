import express from 'express';
const router = express.Router();

import {
    StudentInternshipDetailsController,
    StudentResearchPublicationController,
    StudentConferencePublicationController,
    StudentCertificateCoursesController,
    StudentSportsDataController,
    StudentEventParticipationController,
    StudentEventOrganizationController,
    StudentHigherEducationController,
    StudentTechnicalEventsController,
    AllUsernamesController,
} from '../controller/student_controller.js';

// Research Publications Routes
const controller1 = new StudentInternshipDetailsController();
router.get("/internship-details/all", controller1.getAll);
router.get("/internship-details/:username", controller1.getByUsername);
router.post("/internship-details/create-new", controller1.create);
router.delete("/internship-details/remove", controller1.deleteByUsername);
router.put("/internship-details/update", controller1.updateByUsername);
router.post("/internship-details/filter", controller1.filterData); //added filter data route for all tables

// Book Publications Routes
const controller2 = new StudentResearchPublicationController();
router.get("/research-pb/all", controller2.getAll);
router.get("/reserach-pb/:username", controller2.getByUsername);
router.post("/research-pb/create-new", controller2.create);
router.delete("/research-pb/remove", controller2.deleteByUsername);
router.put("/research-pb/update", controller2.updateByUsername);
router.post("/research-pb/filter", controller2.filterData);

// Faculty Conference Publications Routes
const controller3 = new StudentConferencePublicationController();
router.get("/conference-pb/all", controller3.getAll);
router.get("/conference-pb/:username", controller3.getByUsername);
router.post("/conference-pb/create-new", controller3.create);
router.delete("/conference-pb/remove", controller3.deleteByUsername);
router.put("/conference-pb/update", controller3.updateByUsername);
router.post("/conference-pb/filter", controller3.filterData);

// Grants Routes
const controller4 = new StudentCertificateCoursesController();
router.get("/certificate-courses/all", controller4.getAll);
router.get("/certificate-courses/:username", controller4.getByUsername);
router.post("/certificate-courses/create-new", controller4.create);
router.delete("/certificate-courses/remove", controller4.deleteByUsername);
router.put("/certificate-courses/update", controller4.updateByUsername);
router.post("/certificate-courses/filter", controller4.filterData);

// ConsultancyReport Routes
const controller5 = new StudentSportsDataController();
router.get("/sports-data/all", controller5.getAll);
router.get("/sports-data/:username", controller5.getByUsername);
router.post("/sports-data/create-new", controller5.create);
router.delete("/sports-data/remove", controller5.deleteByUsername);
router.put("/sports-data/update", controller5.updateByUsername);
router.post("/sports-data/filter", controller5.filterData);

// Patent Publication Routes
const controller6 = new StudentEventParticipationController();
router.get("/event-participation/all", controller6.getAll);
router.get("/event-participation/:username", controller6.getByUsername);
router.post("/event-participation/create-new", controller6.create);
router.delete("/event-participation/remove", controller6.deleteByUsername);
router.put("/event-participation/update", controller6.updateByUsername);
router.post("/event-participation/filter", controller6.filterData);

// Conference Seminars Routes
const controller7 = new StudentEventOrganizationController();
router.get("/event-org/all", controller7.getAll);
router.get("/event-org/:username", controller7.getByUsername);
router.post("/event-org/create-new", controller7.create);
router.delete("/event-org/remove", controller7.deleteByUsername);
router.put("/event-org/update", controller7.updateByUsername);
router.post("/event-org/filter", controller7.filterData);

// SSTP_FDP_Workshop Routes
const controller8 = new StudentHigherEducationController();
router.get("/higher-edu/all", controller8.getAll);
router.get("/higher-edu/:username", controller8.getByUsername);
router.post("/higher-edu/create-new", controller8.create);
router.delete("/higher-edu/remove", controller8.deleteByUsername);
router.put("/higher-edu/update", controller8.updateByUsername);
router.post("/higher-edu/filter", controller8.filterData);

// Webinar Guest Lecture Routes
const controller9 = new StudentTechnicalEventsController();
router.get("/tech-events/all", controller9.getAll);
router.get("/tech-events/:username", controller9.getByUsername);
router.post("/tech-events/create-new", controller9.create);
router.delete("/tech-events/remove", controller9.deleteByUsername);
router.put("/tech-events/update", controller9.updateByUsername);
router.post("/tech-events/filter", controller9.filterData);

const controller10 = new AllUsernamesController();
router.get("/getUsernames/usernames", controller10.getAllUsers)

export default router;