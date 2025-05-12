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
    roll: {
        type: String,
        required: [true, "Phone no is required"]
    },
    year: {
        type: String,
        enum: ["I year", "II year", "III year", "IV year"],
        required: [true, "year is required"]
    },
    club: {
        type: String,
        // enum: ["coding", "robotic", "gaming", "hackthon", "gate", "automobile", "sport", "placement", "autocad", "maintenance", "iot", "cultural", "infra", "poster"],
        required: [true, "club is required"]
    },
}, {
    timestamps: true
});

export const Club = model("Club", joinClub);