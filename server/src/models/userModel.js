import db from '../config/db.js'

const getUserById=async(id)=>{
    const [result]=await db.query('SELECT name,email,bio FROM users where id=?',[id]);
    return result[0];
}

export {getUserById};