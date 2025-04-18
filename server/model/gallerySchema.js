import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"]
  },
  type: {
    type: String,
    enum: ["photo", "video", "pdf"],
    required: [true, "Type is required"],
  },
  files: [
    {
      url: String,       // Path to the uploaded file
      filename: String,  // Original name
    },
  ],
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Gallery = mongoose.model("Gallery", gallerySchema);
