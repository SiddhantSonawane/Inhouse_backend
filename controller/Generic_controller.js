import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

// Generic Controller
class GenericController {
  constructor(Model,ID) {
    this.Model = Model;
    this.ID = ID;
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

  create = catchAsyncErrors(async (req, res) => {
    const modelInstance = new this.Model();
    const newData = req.body;
    const result = await modelInstance.create(newData);
    res.json({ success: true, data: result });
  });

  getByUsername = catchAsyncErrors(async (req, res) => {
    const modelInstance = new this.Model();
    const { username } = req.params;
    // console.log("USERNAME IS : ", username);
    const data = await modelInstance.getByUsername(username);
    res.json({ success: true, data: data[0] });
  });

  updateByUsername = catchAsyncErrors(async (req, res) => {
    const modelInstance = new this.Model();
    const { username } = req.query;
    const ID = req.query[this.ID]; // Use the stored ID field name

    console.log("username is : ", username);
    const updatedFields = req.body;
    const result = await modelInstance.update(username, ID, updatedFields);
    res.json({ success: true, data: result });
  });

  deleteByUsername = catchAsyncErrors(async (req, res) => {
    const modelInstance = new this.Model();
    const { username } = req.query;
    const ID = req.query[this.ID];
    const result = await modelInstance.deleteByUsername(username, ID);
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

  // basic func ends

}

export default GenericController;