import { getUserById,updateUserProfile} from "../models/userModel.js";

const getProfile=async(req,res)=>{
    try{
        const user=await getUserById(req.user.id);
        res.json(user);
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal server error'});
    }
}

const updateProfile=async(req,res)=>{
    try{
        const {name,bio}=req.body;
        const user_id=req.user.id;

        if(!name || name.trim()===""){
            return res.status(400).json({error:'Name is required'});
        }

        const updatedProfile=await updateUserProfile(name,bio,user_id);
        if(!updatedProfile){
            return res.status(404).json({error:'User not found'});
        }
        res.json({
            message:'Profile Updated Successfully',
            user:updatedProfile
        })
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal Server Error'});
    }
}

export {getProfile,updateProfile};