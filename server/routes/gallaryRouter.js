import express from "express"
import { uploadGallery } from "../controllers/gallaryController.js"
import upload from "../utils/multer.js"

const router = express.Router()

router.post("/upload",upload.array("files",10),uploadGallery)


export default router