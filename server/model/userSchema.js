import {Schema, model } from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    name: {
        type:String,
        unique:true,
        required:true,
        minLength:[3,"Username must conatain atleast 3 characters."],
        maxLength:[40,"Username can't exceed 40 characters."]
    },
    password:{
        type:String,
        select:false,
        required:true,
        minLength:[8,"Username must conatain atleast 8 characters."],
    },
    email:{
        type:String,
    },
    address:{
        type:String
    },
    phone:{
        type:String,
        minLength:[10,"Phone number must conatin exact 10 digits."],
        maxLength:[10,"Phone number must conatin exact 10 digits."]
    },
    profileImage:{
        public_id:{
         type:String,
         required:true
        },
        url:{
            type:String,
            required:true
        }
    },
})

userSchema.pre("save", async function(){
    if(!this.isModified("password")){
        return next()
    }
    this.password = await bcrypt.hash(this.password,10)
})

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = async function(){
    return jwt.sign(
        {_id: this._id},
        process.env.JWT_SECRET_KEY,
        {expiresIn: process.env.JWT_EXPIRE}
    )
}

export const User = model("User",userSchema)