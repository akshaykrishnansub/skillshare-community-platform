import { createUser, findUserByEmail } from "../models/authModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const registerUser=async(req,res)=>{
    const {name,email,password,bio}=req.body;
    try{
        const registeredUser=await findUserByEmail(email);
        if(registeredUser){
            return res.status(409).json({error:'User already registered'});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=await createUser(name,email,hashedPassword,bio);

        //generate token
        const token=jwt.sign({id:newUser.id},process.env.JWT_SECRET,{expiresIn:'1d'});

        return res.status(201).json({message:'User registered successfully',token})
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal server error'});
    }
}

const login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await findUserByEmail(email);
        if(!user){
            return res.status(400).json({error:'User not found, Please register and then try logging in'});
        }

        //compare the password
        const matchedPassword=await bcrypt.compare(password,user.password_hash);
        if(!matchedPassword){
            return res.status(401).json({error:'Invalid credentials'});
        }

        //generate token
        const token=jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'1d'});

        //store token as a cookie
        res.cookie('token',token,{
            httpOnly:true,
            secure:true,
            sameSite:"none",
            maxAge:1*24*60*60*1000
        })
        return res.json({message:'Login Successful',token,user:{id:user.id,name:user.name,email:user.email,bio:user.bio}});
    }catch(err){
        res.status(500).json({error:'Internal Server error'});
    }
}

const logout=(req,res)=>{
    try{
        res.clearCookie('token',{
            path:"/",
            httpOnly:true,
            secure:false
        })
        res.json({message:'Logged out successfully'});
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Server error during logout'});
    }
}

export {registerUser,login,logout}