import express from "express"
import { isAuthenticated } from "../middleware/authMiddleware.js"
import { addNotice, deleteNotice, getAllNotices, updateNotice } from "../controllers/noticeController.js";
const router = express.Router()

router.post("/add",isAuthenticated,addNotice);
router.get("/fetch",getAllNotices);
router.put("/update/:id",isAuthenticated,updateNotice);
router.delete("/delete/:id",isAuthenticated,deleteNotice);

export default router