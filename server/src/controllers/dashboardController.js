import { getMyEnrolledCourses, getTotalCourses, getTotalEnrollments, getTotalStudents } from "../models/dashboardModel.js";

const getDashboardStats=async(req,res)=>{
    try{
        const userId=req.user.id;
        const [totalCourses,totalEnrollments,totalStudents,myEnrolledCourses]=await Promise.all([getTotalCourses(userId),getTotalEnrollments(userId),getTotalStudents(userId),getMyEnrolledCourses(userId)]);
        res.json({totalCourses:Number(totalCourses),totalEnrollments:Number(totalEnrollments),totalStudents:Number(totalStudents),myEnrolledCourses:Number(myEnrolledCourses)});
    }catch(err){
        console.error(err);
        res.status(500).json({error:"Internal Server error"});
    }
}

export {getDashboardStats};