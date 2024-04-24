import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
// import { errorHandler } from "../utilis/error.js";

export const signup=async(req,res,next)=>{
    const {username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword});
    try{
        await newUser.save();
        res.status(200).json('User created successfully');
    } catch(err){
        // res.status(500).json(err.message);
        // next(errorHandler(550,'error from the function'));
        next(err);
    }
}