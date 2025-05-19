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

export const fetchClub = AsyncHandler(async (req, res, next) => {
    const students = await Club.find().sort({ createdAt: -1 });

    if (!students || students.length === 0) {
        return next(new ErrorHandler("No student found", 404));
    }

    res.status(200).json({
        message: "Students fetched successfully",
        success: true,
        students
    });
});

export const deleteStudent = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const student = await Club.findById(id);

  if (!student) {
    return next(new ErrorHandler("Student not found", 404));
  }

  await student.deleteOne();

  res.status(200).json({
    success: true,
    message: "Student deleted successfully",
  });
});