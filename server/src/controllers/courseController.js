import { insertCourse,getAllCourses, getCourseById,getCourseByCreator } from "../models/courseModel.js";

const createCourse=async(req,res)=>{
    try{
        const {title,description,content}=req.body;
        if(!title || !description){
            return res.status(400).json({error:'Title and description required'});
        }

        if(!req.user || !req.user.id){
            return res.status(401).json({error:'User not authenticated'});
        }

        const creatorId=req.user.id;

        const course=await insertCourse(title,description,content,creatorId);

        res.status(201).json({message:'Course created successfully',course});

    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal server error'});
    }
}

const listCourses=async(req,res)=>{
     try{
        const courses=await getAllCourses();
        res.status(200).json({
            message:'Course fetched successfully',
            courses
        })
     }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal server error'});
     }
}

const getCourse=async(req,res)=>{
    try{
        const id=req.params.id;
        const course=await getCourseById(id);

        if(!course){
            return res.status(404).json({error:'Course not found'});
        }
        res.json(course);


    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal server error'});
    }
}

const getMyCreatedCourses=async(req,res)=>{
    try{
        const userId=req.user.id;
        const courses=await getCourseByCreator(userId);
        res.json({courses});
    }catch(err){
        console.error(err);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export {createCourse,listCourses,getCourse,getMyCreatedCourses};