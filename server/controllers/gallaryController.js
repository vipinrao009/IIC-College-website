import AsyncHandler from "../middleware/AsyncHandler.js";
import ErrorHandler from "../middleware/Error.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Gallery } from "../model/gallerySchema.js";

export const uploadGallery = AsyncHandler(async (req, res, next) => {
    const { title, year, type, description } = req.body;

    if (!title || !year || !type || !req.files || req.files.length === 0) {
        return next(new ErrorHandler("All fields and at least one file are required", 400));
    }

    // Array to hold uploaded file details
    const uploadedFiles = [];

    for (const file of req.files) {
        const result = await uploadOnCloudinary(file.path);

        if (!result) {
            return next(new ErrorHandler("Failed to upload one or more files to Cloudinary", 500));
        }

        uploadedFiles.push({
            url: result.secure_url,
            filename: result.original_filename || file.originalname,
            public_id: result.public_id // optional but helpful if you want to delete later
        });
    }

    const gallery = await Gallery.create({
        title,
        year,
        type,
        files: uploadedFiles,
        description
    });

    res.status(201).json({
        success: true,
        message: "Gallery item uploaded successfully",
        gallery
    });
});
  
