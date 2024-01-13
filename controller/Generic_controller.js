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

  getAllColumns = catchAsyncErrors(async (req, res) => {
    try {
      const modelInstance = new this.Model();
      const result = await modelInstance.getAllColumns();
      res.json({ success: true, data: result[0] });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
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

  //get the names/list of selected filtering columns for a specific table

  // getFilteringColumns = catchAsyncErrors(async (req, res) => {
  //   try {
  //     const modelInstance = new this.Model();
  //     const filtering_columns = await modelInstance.getFilteringColumns();
  //     res.json({ success: true, data: { filtering_columns } });
  //   } catch (error) {
  //     res.status(500).json({ success: false, message: error.message });
  //   }
  // });

  // formatDateString(dateString) {
  //   try {
  //     const date = new Date(dateString);
  //     if (isNaN(date.getTime())) {
  //       return dateString;
  //     }
  //     const formattedDate = date.toISOString().split('T')[0];
  //     return formattedDate;
  //   } catch (error) {
  //     console.error(`Error formatting date: ${error.message}`);
  //     return dateString;
  //   }
  // }

  // getDistinctValues = catchAsyncErrors(async (req, res) => {
  //   try {
  //     const modelInstance = new this.Model();
      
  //     // store the distinct values from the specified columns
  //     const distinctValues = await modelInstance.getDistinctValues();

  //     // format the dates as they have time also with them
  //     const formattedDistinctValues = {};
  //     for (const column in distinctValues) {
  //       formattedDistinctValues[column] = distinctValues[column].map(this.formatDateString);
  //     }

  //     res.json({ success: true, data: formattedDistinctValues });
  //   } catch (error) {
  //     res.status(500).json({ success: false, message: error.message });
  //   }
  // });

  //combined

  getFilteringColumnsWithDistinctValues = catchAsyncErrors(async (req, res) => {
    try {
      const modelInstance = new this.Model();
      const filteringColumnsWithDistinctValues = await modelInstance.getFilteringColumnsWithDistinctValues();

      res.json({ success: true, data: { filtering_columns: filteringColumnsWithDistinctValues } });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  // basic func ends

}

export default GenericController;