import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

// Generic Controller
class GenericController {
  constructor(Model) {
    this.Model = Model;
  }

  getAll = async (req, res) => {
    try {
      const modelInstance = new this.Model();
      const data = await modelInstance.getAll();
      res.json({ success: true, data: data[0] });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };


  getByUsername = catchAsyncErrors(async (req, res) => {
    const modelInstance = new this.Model();
    const { username } = req.params;
    // console.log("USERNAME IS : ", username);
    const data = await modelInstance.getByUsername(username);
    res.json({ success: true, data: data[0] });
  });

  create = catchAsyncErrors(async (req, res) => {
    const modelInstance = new this.Model();
    const newData = req.body;
    const result = await modelInstance.create(newData);
    res.json({ success: true, data: result });
  });

  updateByUsername = catchAsyncErrors(async (req, res) => {

    console.log("Update controller hit");

    const modelInstance = new this.Model();
    const { username, T_ID } = req.query;

    console.log("username is : ", username);
    const updatedFields = req.body;
    const result = await modelInstance.update(username, T_ID, updatedFields);
    res.json({ success: true, data: result });
  });

  deleteByUsername = catchAsyncErrors(async (req, res) => {
    const modelInstance = new this.Model();
    const { username, T_ID } = req.query;
    const result = await modelInstance.deleteByUsername(username, T_ID);
    res.json({ success: true, data: result });
  });

  filterData = catchAsyncErrors(async(req, res) => {
    const modelInstance = new this.Model();

    const { orderBy, limit, startDate, endDate, dateColumn, ...filters } = req.query;

    const result = await modelInstance.filterQuery(
      filters,
      orderBy, 
      limit,
      startDate,
      endDate,
      dateColumn
    );

    res.json({ success: true, data: result })
});


  //done

  //fetch usernames controller method
  getAllUsers = async(req, res) => {
    try {
      const modelInstance = new this.Model();
      const data = await modelInstance.getAllUsers();
      res.json({ success: true, data: data[0] });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } 

  //fetch all the tables means the tables names 
  getAllTables = async(req, res) => {
    try {
      const modelInstance = new this.Model();
      const data = await modelInstance.getAllTables();
      res.json({ success: true, data: data[0] });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // In your controller file
getUserData = async (req, res) => {
  try {
    const { username, selectedTables } = req.query;
    console.log("Received request with parameters:", req.query);

    // Validate that selectedTables is an array to prevent SQL injection
    if (!Array.isArray(selectedTables)) {
      return res.status(400).json({ success: false, message: "Invalid input" });
    }

    const modelInstance = new this.Model();
    const userData = {};

    // Fetch data from each selected table
    for (const table of selectedTables) {
      const data = await modelInstance.getDataForUser(username, table);
      userData[table] = data[0];
    }

    res.json({ success: true, data: userData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

}

export default GenericController;