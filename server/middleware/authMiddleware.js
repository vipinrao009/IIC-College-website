import { User } from "../model/userSchema.js";
import AsyncHandler from "./AsyncHandler.js";
import ErrorHandler from "./Error.js";
import jwt from "jsonwebtoken"

export const isAuthenticated = AsyncHandler(async (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
        return next(new ErrorHandler("Token not found", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // ✅ no await if sync
    if (!decoded) {
        return next(new ErrorHandler("Invalid JWT token", 401));
    }
    const user = await User.findById(decoded._id);
    
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    req.user = user; 

    next();
});
