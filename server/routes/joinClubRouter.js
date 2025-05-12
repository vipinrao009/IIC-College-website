import express from "express"
import { joinClub } from "../controllers/joinClubController.js";

const router = express.Router();
router.post("/join-club",joinClub)

export default router