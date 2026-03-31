import { createUser, findUserByEmail } from "../models/authModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const registerUser=async(req,res)=>{
    const {name,email,password,bio}=req.body;
    try{
        const registeredUser=await findUserByEmail(email);
        if(registeredUser){
            return res.status(400).json({error:'User already registered'});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=await createUser(name,email,hashedPassword,bio);

        //generate token
        const token=jwt.sign({id:newUser.id},process.env.JWT_SECRET,{expiresIn:'1h'});

        return res.status(201).json({message:'User registered successfully',token})
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal server error'});
    }
}

export {registerUser}