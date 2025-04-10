import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Event title is required"]
    },
    description: {
        type: String,
        required: [true, "Event description is required"]
    },
    date: {
        type: Date,
        required: [true, "Event date is required"]
    },
    location: {
        type: String,
        default: "College Campus"
    },
    link: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});

export const Event = mongoose.model("Event", eventSchema);
