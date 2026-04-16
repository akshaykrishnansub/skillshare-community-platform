import db from '../config/db.js'

//Total courses created by user
const getTotalCourses=async(userId)=>{
    const [result]=await db.query("SELECT COUNT(*) AS count FROM courses where creator_id=?",[userId]);
    return result[0].count;
}

//Total enrollments on user's courses
const getTotalEnrollments=async(userId)=>{
    const [result]=await db.query("SELECT COUNT(*) AS count FROM enrollments e INNER JOIN courses c ON e.course_id=c.id WHERE c.creator_id=?",[userId]);
    return result[0].count;
}

//Unique students
const getTotalStudents=async(userId)=>{
    const [result]=await db.query("SELECT COUNT(DISTINCT e.user_id) AS count FROM enrollments e INNER JOIN courses c ON e.course_id=c.id WHERE c.creator_id=?",[userId]);
    return result[0].count;
}

//My Enrolled courses
const getMyEnrolledCourses=async(userId)=>{
    const [result]=await db.query("SELECT COUNT(*) AS count from enrollments WHERE user_id=?",[userId]);
    return result[0].count;
}

export {getTotalCourses,getTotalEnrollments,getTotalStudents,getMyEnrolledCourses};