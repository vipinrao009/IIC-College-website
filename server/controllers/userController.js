import AsyncHandler from "../middleware/AsyncHandler.js"
import ErrorHandler from "../middleware/Error.js"
import { User } from "../model/userSchema.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"


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
    console.log("pppppppppppppppp",avatar)
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
        success:true
    })
})


