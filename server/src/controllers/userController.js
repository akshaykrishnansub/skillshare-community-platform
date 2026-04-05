import { getUserById } from "../models/userModel.js";

const getProfile=async(req,res)=>{
    try{
        const user=await getUserById(req.user.id);
        res.json(user);
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal server error'});
    }
}

export {getProfile};