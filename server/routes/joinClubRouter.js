import express from "express"
import { deleteStudent, fetchClub, joinClub } from "../controllers/joinClubController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js"

const router = express.Router();
router.post("/join-club",joinClub)
router.get("/fetch-club",isAuthenticated,fetchClub)
router.delete("/delete/:id",isAuthenticated,deleteStudent);

export default router