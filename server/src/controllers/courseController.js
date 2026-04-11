import { insertCourse,getAllCourses, getCourseById,getCourseByCreator, getCourseContent, updateCourse } from "../models/courseModel.js";

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

const getCourseContentController=async(req,res)=>{
    try{
        const id=req.params.id;

        if(!req.user){
            return res.status(401).json({message:'You must be logged in to view this course'});
        }

        const courseContent=await getCourseContent(id);

        if(!courseContent){
            return res.status(404).json({error:'Course not found'});
        }

        return res.status(200).json({
            message:'Course content fetched successfully',
            courseContent
        })

    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal Server error'});
    }
}

const editCourse=async(req,res)=>{
    try{
        const courseId=req.params.id;
        const {title,description,content}=req.body;
        const userId=req.user.id;

        if(!title || !description || !content){
            return res.status(400).json({error:'Title and description required'});
        }

        const updatedCourse=await updateCourse(courseId,title,description,content,userId);

        if(!updatedCourse){
            return res.status(403).json({error:'Not Allowed or course not found'});
        }

        return res.status(200).json({
            message:'Course updated successfully',
            courseContent:updatedCourse
        })

    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal server error'});
    }
}

export {createCourse,listCourses,getCourse,getMyCreatedCourses,getCourseContentController,editCourse};