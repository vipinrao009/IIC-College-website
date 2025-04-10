import { Schema,model } from "mongoose";

const noticeSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please provide notice title"]
    },
    link: {
        type: String,
    },
    visible: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

export const Notice = model("Notice", noticeSchema);
