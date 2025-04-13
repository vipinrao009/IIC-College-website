import express from "express"
import { deleteGallery, editGallery, fetchGallary, uploadGallery } from "../controllers/gallaryController.js"
import upload from "../utils/multer.js"
import { isAuthenticated } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/upload",upload.array("files",10),isAuthenticated,uploadGallery)
router.get("/fetch",isAuthenticated,fetchGallary)
router.put("/update/:id",isAuthenticated,editGallery)
router.delete("/delete/:id",isAuthenticated,deleteGallery)


export default router