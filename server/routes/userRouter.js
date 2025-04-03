import express from "express"
import {register} from "../controllers/userController.js"
import upload from "../utils/multer.js"
const router = express.Router()

router.post("/register",upload.single("profileImage"),register)

export default router