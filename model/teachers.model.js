import BaseModel from './Generic_model.js';

// BookPublications Model

export class BookPublications extends BaseModel {
  constructor() {
    super('2_book_publication');
  }

  // Specific methods for BookPublications table
  
}

// ResearchPublications Model

export class ResearchPublications extends BaseModel {
  constructor(){
    super('1_research_publication')
  }
}

// FacultyConferencePublications Model

export class FacultyConferencePublications extends BaseModel {
  constructor(){
    super('3_faculty_conference_publication')
  }
}

// Grants Model

export class Grants extends BaseModel {
  constructor(){
    super('4_grants')
  }
}

// ConsultancyReport Model

export class ConsultancyReport extends BaseModel {
  constructor(){
    super('5_consultancy_report')
  }
}

// PatentPublications Model

export class PatentPublications extends BaseModel {
  constructor(){
    super('6_patent_publication')
  }
}

// ConferenceSeminars Model

export class ConferenceSeminars extends BaseModel {
  constructor(){
    super('7_conferences_seminars_symposia_workshops_fdp_sttp_organized')
  }
}

// SSTP_FDP_Workshop Model

export class SSTP_FDP_Workshop extends BaseModel {
  constructor(){
    super('8_sttp_fdp_workshop_conference_attended')
  }
}


