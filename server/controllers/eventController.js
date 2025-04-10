import AsyncHandler from "../middleware/AsyncHandler.js";
import ErrorHandler from "../middleware/Error.js";
import { Event } from "../model/eventSchema.js";

export const addEvent = AsyncHandler(async (req, res, next) => {
    const { title, description, date, location, link } = req.body;

    if (!title || !description || !date) {
        return next(new ErrorHandler("Title, description & date are mandatory", 400));
    }

    const event = await Event.create({ title, description, date, location, link });

    res.status(201).json({
        success: true,
        message: "Event added successfully",
        event
    });
});

export const updateEvent = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { title, description, date, location, link } = req.body;

    const event = await Event.findById(id);
    if (!event) return next(new ErrorHandler("Event not found", 404));

    if (title) event.title = title;
    if (description) event.description = description;
    if (date) event.date = date;
    if (location) event.location = location;
    if (link) event.link = link;

    await event.save();

    res.status(200).json({
        success: true,
        message: "Event updated successfully",
        event
    });
});

export const deleteEvent = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const event = await Event.findById(id);
    if (!event) return next(new ErrorHandler("Event not found", 404));

    await event.deleteOne();

    res.status(200).json({
        success: true,
        message: "Event deleted successfully"
    });
});

export const getAllEvents = AsyncHandler(async (req, res, next) => {
    const events = await Event.find().sort({ date: 1 }); // Upcoming first

    res.status(200).json({
        success: true,
        message: "All events fetched successfully",
        total: events.length,
        events
    });
});
