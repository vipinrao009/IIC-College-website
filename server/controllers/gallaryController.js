import AsyncHandler from "../middleware/AsyncHandler.js";
import ErrorHandler from "../middleware/Error.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Gallery } from "../model/gallerySchema.js";

export const uploadGallery = AsyncHandler(async (req, res, next) => {
    const { title, date, location, type, description } = req.body;

    if (!title || !date || !location || !type || !req.files || req.files.length === 0) {
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
        date,
        location,
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


export const fetchGallary = AsyncHandler(async (req, res, next) => {
  const { year } = req.query;

  let query = {};
  if (year) {
    const startOfYear = new Date(`${year}-01-01T00:00:00.000Z`);
    const endOfYear = new Date(`${parseInt(year) + 1}-01-01T00:00:00.000Z`);
    query.date = { $gte: startOfYear, $lt: endOfYear };
  }

  const gallery = await Gallery.find(query).sort({ createdAt: -1 });

  if (!gallery || gallery.length === 0) {
    return next(new ErrorHandler("No event data found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Event data fetched successfully",
    gallery,
  });
});




export const deleteGallery = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
  
    if (!id) {
      return next(new ErrorHandler("ID is required for deletion", 400));
    }
  
    const deletedGallery = await Gallery.findByIdAndDelete(id);
    if (!deletedGallery) {
      return next(new ErrorHandler("Gallery item not found", 404));
    }
  
    res.status(200).json({
      success: true,
      message: "Gallery item deleted successfully",
    });
  });

  export const editGallery = AsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { title, date, type, description } = req.body;

    console.log(date)
  
    if (!id) {
      return next(new ErrorHandler("ID is required for updation", 400));
    }

    if (!date) {
      return next(new ErrorHandler("date is required for updation", 400));
    }
  
    const gallery = await Gallery.findById(id);
    if (!gallery) {
      return next(new ErrorHandler("Gallery item not found", 404));
    }
  
    // Update fields
    gallery.title = title || gallery.title;
    gallery.date = date || date;
    gallery.type = type || gallery.type;
    gallery.description = description || gallery.description;
  
    await gallery.save();
  
    res.status(200).json({
      success: true,
      message: "Gallery item updated successfully",
      gallery,
    });
  });
  