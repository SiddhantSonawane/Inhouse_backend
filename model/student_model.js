import BaseModel from './Generic_model.js';

// INternship Model
export class StudentInternshipDetails extends BaseModel {
  constructor() {
    super('student_internship_details', 'S_ID')
  }
}

// Research Model
export class StudentResearchPublication extends BaseModel {
  constructor() {
    super('student_research_publication', 'S_ID');
  }

  // Specific methods for BookPublications table

}

// Conference Model
export class StudentConferencePublication extends BaseModel {
  constructor() {
    super('student_conference_publication', 'S_ID')
  }
}

// Grants Model
export class StudentCertificateCourses extends BaseModel {
  constructor() {
    super('student_certificate_course', 'S_ID')
  }
}

// ConsultancyReport Model
export class StudentSportsData extends BaseModel {
  constructor() {
    super('student_sports_data', 'S_ID')
  }
}

// Event Participated
export class StudentEventParticipation extends BaseModel {
  constructor() {
    super('student_event_participated', 'S_ID')
  }
}

// Event Organized
export class StudentEventOrganization extends BaseModel {
  constructor() {
    super('student_event_organized', 'S_ID')
  }
}

// Technical Events
export class StudentTechnicalEvents extends BaseModel {
  constructor() {
    super('student_technical_events', 'S_ID')
  }
}

//  Higher Education
export class StudentHigherEducation extends BaseModel {
  constructor() {
    super('student_higher_education', 'S_ID')
  }
}
//fetch all usernames 

export class AllUsernames extends BaseModel {
  constructor() {
    super('login_details', 'S_ID')
  }
}