import db from '../config/db.js'

const enrollCourse=async(userId,courseId)=>{

    //1. Get course
    const [course]=await db.query('SELECT creator_id from courses WHERE id=?',[courseId]);
    if(!course || course.length===0){
        throw new Error("COURSE_NOT_FOUND");
    }

    //2.Block Creator
    if(course[0].creator_id===userId){
        throw new Error("CREATOR_CANNOT_ENROLL");
    }


    const [result]=await db.query('INSERT INTO enrollments (user_id,course_id) VALUES(?,?)',[userId,courseId]);
    return result;
}

const unenrollCourse=async(userId,courseId)=>{
    const [result]=await db.query('DELETE FROM enrollments WHERE user_id=? AND course_id=?',[userId,courseId]);
    return result.affectedRows;
}

const checkEnrollment=async(userId,courseId)=>{
    const [result]=await db.query('SELECT * FROM enrollments WHERE user_id=? AND course_id=?',[userId,courseId]);
    return result;
}

const getEnrolledCourses=async(userId)=>{
    const [result]=await db.query('SELECT c.id,c.title,c.description,c.content FROM enrollments e INNER JOIN courses c ON e.course_id=c.id WHERE e.user_id=?',[userId]);
    return result;

}

export {enrollCourse,unenrollCourse,checkEnrollment,getEnrolledCourses};