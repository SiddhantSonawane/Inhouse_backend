import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { 
    getAllTablesModel ,
    getDataForUserModel,
    getAllColumns,
    updateSpecialAccess,
    updateSpecialAccessFields,
    getSpecialAccessTables,
    removeSpecialAccessFields,
    getAllNotices,
    addNotices
} from "../model/basics.model.js";

class BasicController {

  getAllTables = catchAsyncErrors(async (req, res) => {
    try {
      const data = await getAllTablesModel();
      res.json({ success: true, data: data[0] });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  getAllColumns = catchAsyncErrors(async (req, res) => {
    try {
      const {tablename} = req.query;
      console.log("Received request with parameters:", req.query);

      const data = await getAllColumns(tablename);
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

  updateAccess = catchAsyncErrors(async (req, res) => {
    try {
      
      // console.log("Update api hit")
      const { Email, SpecialAccess } = req.query;
      const data = await updateSpecialAccess(Email, SpecialAccess);
      // console.log("Response is : ", res)
      res.status(200).send({success: true, data: data})
      
    } catch (error) {
      res.status(500).json({success: false, message: error.message});
    }
  });

  updateSpecialAccessFields = catchAsyncErrors(async (req, res) => {
    try {
      const { username, studentTables, teacherTables } = req.body;

      const data = await updateSpecialAccessFields(username, studentTables, teacherTables);

      res.json({ success: true, message: "Special access updated successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  getSpecialAccessTables = catchAsyncErrors(async (req, res) => {
    try {
        const { username } = req.query;

        const data = await getSpecialAccessTables(username);

        const combinedData = data[0].reduce((accumulator, { SpecialAccess_Student, SpecialAccess_Teacher }) => {
            accumulator.SpecialAccess_Student = (accumulator.SpecialAccess_Student || []).concat(SpecialAccess_Student.split(',').filter(Boolean));
            accumulator.SpecialAccess_Teacher = (accumulator.SpecialAccess_Teacher || []).concat(SpecialAccess_Teacher.split(',').filter(Boolean));
            return accumulator;
        }, {});

        res.status(200).send({ success: true, data: combinedData });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// remove any table from special access of a user 

removeSpecialAccessFields = catchAsyncErrors(async (req, res) => {
  try {
    const { username, studentTables, teacherTables } = req.body;

    const data = await removeSpecialAccessFields(username, studentTables, teacherTables);

    res.json({ success: true, message: "Special access updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

getNotices = catchAsyncErrors(async (req, res) => {

  try {

    const { Role } = req.body;
    console.log("Get notices hit with Role = ", Role)

    const data = await getAllNotices(Role);
    console.log("data is : ", data)

    res.status(200).json({success: true, data: data});

  } catch(error) {
    res.status(500).json({success: false, message: error.message})
  }
})

addNotices = catchAsyncErrors(async (req, res) => {

  try {
    
    const {Username, Title, Description, Role, date } = req.body;
    const data = await addNotices({ Username, Title, Description, Role, date });
    const response = await getAllNotices(Role);

    res.status(200).json({success: true, data: response})

  } catch (error) {
    res.status(500).json({success: false, message: error.message});
  }
})

};
  
export default BasicController;