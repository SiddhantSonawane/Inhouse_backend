import BaseModel from './Generic_model.js';

// ResearchPublications Model
export class ResearchPublications extends BaseModel {
  constructor(){
    super('1_research_publication')
  }
}

// BookPublications Model
export class BookPublications extends BaseModel {
  constructor() {
    super('2_book_publication');
  }

  // Specific methods for BookPublications table
  
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
    super('	5_cnsltncyrep')
  }
}

// PatentPublications Model
export class PatentPublications extends BaseModel {
  constructor(){
    super('	6_patentpublcn')
  }
}

// ConferenceSeminars Model
export class ConferenceSeminars extends BaseModel {
  constructor(){
    super('7_confsemworkshops')
  }
}

// SSTP_FDP_Workshop Model
export class SSTP_FDP_Workshop extends BaseModel {
  constructor(){
    super('8_sttpfdpconfattended')
  }
}

//  Webinar Guest Lecture
export class Webinar_Guest_Lecture extends BaseModel {
  constructor()
  {
    super('	9_webinarguestlec')
  }
}


//  Number of MOUS
export class Number_Of_Mous extends BaseModel {
  constructor() {
    	super('10_noofmous')
  }
}

//  Certificate Courses
export class Certificate_Courses extends BaseModel {
  constructor() {
    super('11_certcourses')
  }
}

//  Professional Affiliations
export class Prof_Affiliations extends BaseModel {
  constructor() {
    super('12_profafflns')
  }
}

//  Faculty as a Resource Person
export class Faculty_as_Resource extends BaseModel {
  constructor() {
    super('13_factasresperson')
  }
}

//  Extension Activity
export class Extension_Activity extends BaseModel {
  constructor() {
    super('14_extnsnactvty')
  }
}

//  Technical Competitions, Tech Fests Organized
export class Techfest_Organized extends BaseModel {
  constructor() {
    super('15_techcomptnstechfest')
  }
}

//  Faculty Achievements
export class Faculty_Achievements extends BaseModel {
  constructor()
  {
    super('16_factachievements')
  }
}

//  Industrial Visit, Tours, Field Trip
export class Industrial_Visits extends BaseModel {
  constructor() {
    super('17_indusvisitstoursfieldtrip')
  }
}

//  Contribution to BoS
export class Contribution_To_BOS extends BaseModel {
  constructor() {
    super('18_contrtobos')
  }
}