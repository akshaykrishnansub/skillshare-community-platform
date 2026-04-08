import db from "../config/db.js";

const insertCourse=async(title,description,content,creatorId)=>{
    const [result]=await db.query('INSERT INTO courses(title,description,content,creator_id) VALUES(?,?,?,?)',[title,description,content,creatorId]);
    return result;
}

const getAllCourses=async()=>{
    const [result]=await db.query('SELECT c.id,c.title,c.description,u.name AS instructor from courses c INNER JOIN users u ON c.creator_id=u.id')
    return result;
}

export {insertCourse,getAllCourses};