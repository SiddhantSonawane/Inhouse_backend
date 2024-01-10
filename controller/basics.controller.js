import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { 
    getAllTablesModel ,
    getAllColumnsModel,
    getDataForUserModel
} from "../model/basics.model.js";

class BasicController {
    
  getAllColumns = catchAsyncErrors(async (req, res) => {
    try {
      const {tablename} = req.query;
      console.log("Received request with parameters:", req.query);

      const data = await getAllColumnsModel(tablename);
      res.json({ success: true, data: data[0] });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  getAllTables = catchAsyncErrors(async (req, res) => {
    try {
      const data = await getAllTablesModel();
      res.json({ success: true, data: data[0] });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  getUserData = catchAsyncErrors(async (req, res) => {
    try {
      const { username, selectedTables } = req.query;
      console.log("Received request with parameters:", req.query);

      if (!Array.isArray(selectedTables)) {
        return res.status(400).json({ success: false, message: "Invalid input" });
      }

    //   const modelInstance = new this.Model();
      const userData = {};

      for (const table of selectedTables) {
        const data = await getDataForUserModel(username, table);
        userData[table] = data[0];
      }

      res.json({ success: true, data: userData });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });
}

export default BasicController;