import express from "express";
const router = express.Router();
import { createBP, deleteByUsername, findByUsername, getAllBookPublications, updateByUsername } from "../controller/2_book_publications.controller.js"


router.get("/all", getAllBookPublications)
router.get("/:username", findByUsername)
router.post("/create-new", createBP)
router.delete("/remove", deleteByUsername)
router.put("/update", updateByUsername)
export default router