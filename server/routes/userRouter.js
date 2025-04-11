import express from "express"
import {getProfile, login, logout, register} from "../controllers/userController.js"
import upload from "../utils/multer.js"
import { isAuthenticated } from "../middleware/authMiddleware.js"
const router = express.Router()

router.post("/register",upload.single("profileImage"),register)
router.post("/login",login)
router.get("/logout",logout)
router.get("/me",isAuthenticated,getProfile)


export default router