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
    const modelInstance = new this.Model();
    const { username } = req.query;
    const updatedFields = req.body;
    const result = await modelInstance.update(username, updatedFields);
    res.json({ success: true, data: result });
  });

  deleteByUsername = catchAsyncErrors(async (req, res) => {
    const modelInstance = new this.Model();
    const { username } = req.query;
    const result = await modelInstance.deleteByUsername(username);
    res.json({ success: true, data: result });
  });
}

export default GenericController;
