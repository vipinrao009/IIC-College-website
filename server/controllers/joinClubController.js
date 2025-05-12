import AsyncHandler from "../middleware/AsyncHandler.js";
import ErrorHandler from "../middleware/Error.js";
import { Club } from "../model/joinClubSchema.js";

export const joinClub = AsyncHandler(async (req, res, next) => {
    const { name, email, phone, roll, year, club } = req.body;

    if (!name || !email || !phone || !roll || !year || !club) {
        return next(new ErrorHandler("All fields are required.", 400));
    }

    const existEmail = await Club.findOne({ email });
    if (existEmail) {
        return next(new ErrorHandler("Email already exists.", 400));
    }

    const result = await Club.create({
        name,
        email,
        phone,
        roll,
        year,
        club
    });

    res.status(200).json({
        message: "You have joined the club successfully.",
        success: true,
        result
    });
});
