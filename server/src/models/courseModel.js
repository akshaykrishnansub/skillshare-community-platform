import db from "../config/db.js";

const insertCourse=async(title,description,content,creatorId)=>{
    const [result]=await db.query('INSERT INTO courses(title,description,content,creator_id) VALUES(?,?,?,?)',[title,description,content,creatorId]);
    return result;
}

export {insertCourse};