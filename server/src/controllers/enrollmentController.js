import { checkEnrollment, enrollCourse, getEnrolledCourses, unenrollCourse } from "../models/enrollmentModel.js";

const enroll=async(req,res)=>{
    const userId=req.user.id;
    const courseId=req.params.id;

    try{
        await enrollCourse(userId,courseId);
        return res.status(200).json({message:'Enrolled successfully'});
    }catch(err){
        if(err.code==="ER_DUP_ENTRY"){
            return res.status(400).json({error:'Already enrolled in this course'});
        }
        console.error(err);
        res.status(500).json({error:'Internal server error'});
    }
}

const unenroll=async(req,res)=>{
    const userId=req.user.id;
    const courseId=req.params.id;
    try{
        const affectedRows=await unenrollCourse(userId,courseId);
        if(affectedRows===0){
            return res.status(404).json({error:"You are not enrolled in this course"});
        }
        return res.status(200).json({message:'Unenrolled successfully'});

    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal server error'});
    }
}

const getEnrollmentStatus=async(req,res)=>{
    const userId=req.user.id;
    const courseId=req.params.id;
    try{
        const rows=await checkEnrollment(userId,courseId);
        res.json({enrolled:rows.length>0});
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal server error'});
    }
}

const getMyEnrollments=async(req,res)=>{
    const userId=req.user.id;
    try{
        const courses=await getEnrolledCourses(userId);
        res.json({courses});
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal server error'});
    }
}

export {enroll,unenroll,getEnrollmentStatus,getMyEnrollments};