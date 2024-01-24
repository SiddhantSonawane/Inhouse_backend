import BaseModel from './Generic_model.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUploadPath = path.join(__dirname, "..", "Uploads");

// ResearchPublications Model
export class StudentInternshipDetails extends BaseModel {
  constructor(){
    super('student_internship_details','S_ID', baseUploadPath)
  }
}

// BookPublications Model
export class StudentResearchPublication extends BaseModel { 
  constructor() {
    super('2__student___research_publication','S_ID', baseUploadPath);
  }

  // Specific methods for BookPublications table
  
}

// FacultyConferencePublications Model
export class StudentConferencePublication extends BaseModel {
  constructor(){
    super('3__student___conference_publication','S_ID', baseUploadPath)
  }
}

// Grants Model
export class StudentCertificateCourses extends BaseModel {
  constructor(){
    super('4__student___certificate_course_attended','S_ID', baseUploadPath)
  }
}

// ConsultancyReport Model
export class StudentSportsData extends BaseModel {
  constructor(){
    super('5__students___sports_data','S_ID', baseUploadPath)
  }
}

// PatentPublications Model
export class StudentEventParticipation extends BaseModel {
  constructor(){
    super('6__students___event_participated','S_ID', baseUploadPath)
  }
}

// ConferenceSeminars Model
export class StudentEventOrganization extends BaseModel {
  constructor(){
    super('7__students___event_organized','S_ID', baseUploadPath)
  }
}

// SSTP_FDP_Workshop Model
export class StudentTechnicalEvents extends BaseModel {
  constructor(){
    super('8__students___technical_events','S_ID', baseUploadPath)
  }
}

//  Webinar Guest Lecture
export class StudentHigherEducation extends BaseModel {
  constructor()
  {
    super('9__student___higher_education','S_ID', baseUploadPath)
  }
}
//fetch all usernames 

export class AllUsernames extends BaseModel {
    constructor() {
      super('login_details','S_ID')
    }
}