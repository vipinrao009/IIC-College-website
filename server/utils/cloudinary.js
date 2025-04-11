import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log({
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary1 = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "IIC college website",
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.log(error)
    return null;
  }
};

const uploadOnCloudinary = (filePath) => {
  return new Promise((resolve, reject) => {
    const ext = path.extname(filePath).toLowerCase();
    const resourceType = ext === '.pdf' ? 'raw' : 'auto';

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: resourceType,
        folder: "IIC college website",
        public_id: `gallery_file_${Date.now()}.pdf`, // ✅ force correct name
      },
      (error, result) => {
        fs.unlinkSync(filePath);
        if (error) return reject(error);
        resolve(result);
      }
    );

    fs.createReadStream(filePath).pipe(uploadStream);
  });
};

export { uploadOnCloudinary };
