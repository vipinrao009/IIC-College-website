import AsyncHandler from "../middleware/AsyncHandler.js";
import ErrorHandler from "../middleware/Error.js";
import { Notice } from "../model/noticeSchema.js";

export const addNotice = AsyncHandler(async (req, res, next) => {
    const { title, link } = req.body;

    if (!title) {
        return next(new ErrorHandler("Title is mandatory"));
    }

    // if (!link) {
    //     return next(new ErrorHandler("Link is mandatory"));
    // }

    const notice = await Notice.create({ title, link });

    res.status(200).json({
        message: "Notice added successfully",
        success: true,
        notice,
    });
});

export const updateNotice = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { title, link } = req.body;

    const notice = await Notice.findById(id);

    if (!notice) {
        return next(new ErrorHandler("Notice not found", 404));
    }
    if (title) notice.title = title;
    if (link) notice.link = link;

    await notice.save();

    res.status(200).json({
        success: true,
        message: "Notice updated successfully",
        notice,
    });
});

export const deleteNotice = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const notice = await Notice.findById(id);

    if (!notice) {
        return next(new ErrorHandler("Notice not found", 404));
    }

    await notice.deleteOne();

    res.status(200).json({
        success: true,
        message: "Notice deleted successfully",
    });
});

export const getAllNotices = AsyncHandler(async (req, res, next) => {
    const notices = await Notice.find().sort({ createdAt: -1 }); // Latest first

    res.status(200).json({
        success: true,
        message: "All notices fetched successfully",
        total: notices.length,
        notices
    });
});
