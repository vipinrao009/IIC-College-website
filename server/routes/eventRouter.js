import express from "express"
import { isAuthenticated } from "../middleware/authMiddleware.js"
import { addEvent, deleteEvent, getAllEvents, updateEvent } from "../controllers/eventController.js";
const router = express.Router()

router.post("/add-event",isAuthenticated,addEvent);
router.get("/get-event",isAuthenticated,getAllEvents);
router.put("/update-event/:id",isAuthenticated,updateEvent);
router.delete("/delete-event/:id",isAuthenticated,deleteEvent);

export default router