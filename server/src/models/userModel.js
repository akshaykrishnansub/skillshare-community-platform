import db from '../config/db.js'

const getUserById=async(id)=>{
    const [result]=await db.query('SELECT id,name,email,bio FROM users where id=?',[id]);
    return result[0];
}

const updateUserProfile=async(name,bio,id)=>{
    await db.query('UPDATE users SET name=?,bio=? WHERE id=?',[name,bio,id]);
    const [rows]=await db.query('SELECT id,name,email,bio from users WHERE id=?',[id]);
    return rows[0];
}

export {getUserById,updateUserProfile};