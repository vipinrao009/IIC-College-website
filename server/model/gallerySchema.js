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
  club : {
    type: String,
    enum: ["coding", "robotic", "gaming", "hackthon", "gate", "automobile", "sport", "placement", "autocad", "maintenance", "iot", "cultural", "infra", "poster"],
    required: [true, "club is required"]
  },
  theme: {
    type: String,
    required: [true, "Theme is required"]
  },
  no_student: {
    type: String,
  },
  no_faculty: {
    type: String
  },
  speaker: {
    type: String
  },
  outcome: {
    type: String
  },
  event_for: {
    type: String
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
