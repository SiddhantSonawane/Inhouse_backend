// BookPublications Controller
import GenericController from './Generic_controller.js';
import BookPublications from '../model/teachers.model.js';

export class BookPublicationsController extends GenericController {
  constructor() {
    super(BookPublications);
  }

  // Specific methods for BookPublications controller2
}

class ReasearchPublications extends GenericController{
    constructor(){
        super("1__research_publication")
    }
}
