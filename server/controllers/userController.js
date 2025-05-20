import AsyncHandler from "../middleware/AsyncHandler.js"
import ErrorHandler from "../middleware/Error.js"
import { User } from "../model/userSchema.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { generateToken } from "../utils/jwtToken.js"


export const register = AsyncHandler(async(req,res,next)=>{
    const { name, password, email, phone, address } = req.body;
    const profileImage  = req.file

    if(!name || !password || !email || !phone || !address){
        return next(new ErrorHandler("All fields are required", 500))
    }
    
    if(!profileImage){
        return next(new ErrorHandler("Profile image is required", 500)) 
    }
    
    const userExist = await User.findOne({ email });

    if (userExist) {
        return next(new ErrorHandler("Email is already exist !!!", 400));
    }

    const avatar = await uploadOnCloudinary(req.file.path);
    
    if(!avatar){
        return next(new ErrorHandler("Upload failed on cloudinary !!!",400))
    }

    const user = await User.create({
        name,
        password,
        email,
        phone,
        address,
        profileImage : {
            public_id:avatar.public_id,
            url:avatar.secure_url
        }
    })
    
    user.password = undefined
    res.status(200).json({
        message:"User registered successfully",
        success:true,
        user
    })
})

export const login = AsyncHandler(async(req,res,next)=>{
    const {email,password} = req.body;

    if(!email ||!password){
        return next(new ErrorHandler("Email & password are required"))
    }

    const user = await User.findOne({ email }).select("+password")
    if(!user){
        return next(new ErrorHandler("User does not exist"))
    }

    const validPassword = await user.comparePassword(password)
    if(!validPassword){
        return next(new ErrorHandler("Please enter correct password"))
    }

    user.password = undefined
    generateToken(user,"User login succesfully",200,res)
})

export const logout = AsyncHandler(async (req, res, next) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
    })
    .status(200)
    .json({
      success: true,
      message: "User logged out successfully",
    });
});

export const getProfile = AsyncHandler(async(req,res,next)=>{
    const user = req.user
    
    if(!user){
        return next(new ErrorHandler("Failed to get the profile",400))
    }

    res.status(200).json({
        success:true,
        message:"Profile fetched successfully!!",
        user
    })
})