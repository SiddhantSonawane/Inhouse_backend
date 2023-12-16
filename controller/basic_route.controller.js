import db from "../config/db.js"
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { getAllData } from "../model/basic.model.js";


export const myfunc = catchAsyncErrors(async (req, res, next) => {
    let title="sspande@pict.edu";
    const [data]  = await getAllData(title)
    
    res.send({success: true, data: data})
})
