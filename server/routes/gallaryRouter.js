import express from "express"
import { deleteGallery, editGallery, fetchGallary, generatePDF, singleGallery, uploadGallery } from "../controllers/gallaryController.js"
import upload from "../utils/multer.js"
import { isAuthenticated } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/upload",upload.array("files",10),isAuthenticated,uploadGallery)
router.get("/fetch",isAuthenticated,fetchGallary)
router.get("/fetch/:id",isAuthenticated,singleGallery)
router.put("/update/:id",isAuthenticated,editGallery)
router.delete("/delete/:id",isAuthenticated,deleteGallery)
router.post("/generate-pdf/:id",isAuthenticated,generatePDF)

export default router