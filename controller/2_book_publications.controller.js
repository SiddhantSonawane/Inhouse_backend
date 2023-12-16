import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import BookPublications from "../model/2_book_publications.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const getAllBookPublications = catchAsyncErrors(async (req, res, next) => {
    const [data]  = await BookPublications.getAll()
    res.send({success: true, data: data})
})


export const findByUsername = catchAsyncErrors(async(req, res, next)=>{
    if(!req.params.username){
        res.status(400).send({
            success : false,
            message:"Give the username with you want to fetch"
        })
    }
    let username= req.params.username
    console.log(username)
    const [data]  = await BookPublications.getByUsername(username)
    
    res.send({success: true, data: data})
})

export const createBP = catchAsyncErrors(async (req, res) => {
    if(!req.body){
        res.status(400).send({
            success: false,
            message: "Content can not be empty!!"
        })
    }

    // create BookPublications
    const bp = new BookPublications({
        username: req.body.username,
        facultyName: req.body.facultyName,
        department: req.body.department,
        bookTitle: req.body.bookTitle,
        chapter: req.body.chapter,
        level: req.body.level,
        publisher: req.body.publisher,
        yearOfPublication: req.body.yearOfPublication,
        DOI: req.body.DOI,
        proof: req.body.proof,
    })

    // Save BookPublications in the database
    const tp = await BookPublications.createQuery(bp)
    console.log(tp);
    if(!tp){
        const message = "Cannot insert into book publicatins"
        const statusCode = 404
        throw new ErrorHandler(message, statusCode)
    }
    
    res.status(201).json({success: true, message: "Data inserted into book publications successfully", data: tp})
})

export const deleteByUsername = catchAsyncErrors(async(req, res, next)=>{
    if(!req.query.username){
        res.status(400).send({
            success : false,
            message:"Give the username with you want to fetch"
        })
    }
    let username= req.query.username
    const [data]  = await BookPublications.remove(username)
    
    res.send({success: true, data: data})
})

export const updateByUsername = catchAsyncErrors(async(req, res, next)=>{
    // get username from query parameter
    if(!req.query.username){
        res.status(400).send({
            success: false,
            message: "Username not provided"
        })
    }

    // get the fields to be updated from req.body
    const [data] = await BookPublications.update(req.query.username, req.body)

    res.send({success: true, data: data})

})

// export const deleteByUsername = catchAsyncErrors(async(req, res)=>{
//     if(!req.params.username){
//         res.status(400).send({
//             success: false,
//             message: "Username can not be empty!!"
//         })
//     }
//     let uname = req.params.username
//     console.log(req.params)
//     const result = await BookPublications.remove(uname)

//     res.status(200).send({
//         success: true,
//         message: "deleted",
//         data: result
//     })
// })