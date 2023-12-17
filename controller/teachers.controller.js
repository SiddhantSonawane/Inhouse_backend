// BookPublications Controller
import GenericController from './Generic_controller.js';
import { ResearchPublications, BookPublications, FacultyConferencePublications, Grants, ConsultancyReport, PatentPublications, ConferenceSeminars, SSTP_FDP_Workshop } from '../model/teachers.model.js';

// BookPublications Controller
export class BookPublicationsController extends GenericController {
  constructor() {
    super(BookPublications);
  }

  // Specific methods for BookPublications controller2
}

// ResearchPublications Controller
export class ReasearchPublicationsController extends GenericController{
    constructor(){
        super(ResearchPublications);
    }
}

// FacultyConferencePublications Controller
export class FacultyConferencePublicationsController extends GenericController{
  constructor(){
      super(FacultyConferencePublications);
  }
}

// Grants Controller
export class GrantsController extends GenericController{
  constructor(){
      super(Grants);
  }
}

// ConsultancyReport Controller
export class ConsultancyReportController extends GenericController{
  constructor(){
      super(ConsultancyReport);
  }
}

// PatentPublications Controller
export class PatentPublicationsController extends GenericController{
  constructor(){
      super(PatentPublications);
  }
}

// ConferenceSeminars Controller
export class ConferenceSeminarsController extends GenericController{
  constructor(){
      super(ConferenceSeminars);
  }
}

// SSTP_FDP_Workshop Controller
export class SSTP_FDP_WorkshopController extends GenericController{
  constructor(){
      super(SSTP_FDP_Workshop);
  }
}

