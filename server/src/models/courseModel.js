import db from "../config/db.js";

const insertCourse=async(title,description,content,creatorId)=>{
    const [result]=await db.query('INSERT INTO courses(title,description,content,creator_id) VALUES(?,?,?,?)',[title,description,content,creatorId]);
    return result;
}

const getAllCourses=async()=>{
    const [result]=await db.query('SELECT c.id,c.title,c.description,u.name AS instructor from courses c INNER JOIN users u ON c.creator_id=u.id')
    return result;
}

const getCourseById=async(id)=>{
    const [result]=await db.query('SELECT c.id,c.title,c.description,u.name AS instructor from courses c INNER JOIN users u ON c.creator_id=u.id WHERE c.id=?',[id]);
    return result[0];
}

const getCourseByCreator=async(userId)=>{
    const [result]=await db.query('SELECT c.id,c.title,c.description,u.name AS instructor from courses c INNER JOIN users u ON c.creator_id=u.id WHERE c.creator_id=?',[userId]);
    return result;
}

const getCourseContent=async(courseId)=>{
    const [result]=await db.query('SELECT c.id,c.title,c.description,c.content,u.name AS instructor from courses c INNER JOIN users u ON c.creator_id=u.id WHERE c.id=?',[courseId]);
    return result;
}

export {insertCourse,getAllCourses,getCourseById,getCourseByCreator,getCourseContent};