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
    const [result]=await db.query('SELECT c.id,c.title,c.description,c.creator_id,u.name AS instructor from courses c INNER JOIN users u ON c.creator_id=u.id WHERE c.id=?',[id]);
    return result[0];
}

const getCourseByCreator=async(userId)=>{
    const [result]=await db.query('SELECT c.id,c.title,c.description,c.creator_id,u.name AS instructor from courses c INNER JOIN users u ON c.creator_id=u.id WHERE c.creator_id=?',[userId]);
    return result;
}

const getCourseContent=async(courseId)=>{
    const [result]=await db.query('SELECT c.id,c.title,c.description,c.content,c.creator_id,u.name AS instructor from courses c INNER JOIN users u ON c.creator_id=u.id WHERE c.id=?',[courseId]);
    return result;
}

const updateCourse=async(id,title,description,content,userId)=>{
    const [updateResult]=await db.query('UPDATE courses SET title=?,description=?,content=? WHERE id=? AND creator_id=?',[title,description,content,id,userId]);
    if(updateResult.affectedRows===0){
        return null;
    }
    const [result]=await db.query('SELECT title,description,content FROM courses WHERE id=?',[id]);
    return result[0];
}

const deleteCourse=async(id,userId)=>{
    const [result]=await db.query('DELETE from courses WHERE id=? AND creator_id=?',[id,userId]);
    return result.affectedRows;
}

export {insertCourse,getAllCourses,getCourseById,getCourseByCreator,getCourseContent,updateCourse,deleteCourse};