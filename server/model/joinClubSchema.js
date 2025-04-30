import { Schema,model } from "mongoose";

const joinClub = new Schema({
    name: {
        type: String,
        required: [true, "Please provide name"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone no is required"]
    },
    club: {
        type: String,
        enum: ["coding", "robotic", "gaming", "hackthon", "gate", "automobile", "sport", "placement", "autocad", "maintenance", "iot", "cultural", "infra", "poster"],
        required: [true, "club is required"]
    },
}, {
    timestamps: true
});

export const Notice = model("Club", joinClub);
