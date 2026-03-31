import db from '../config/db.js'

const createUser=async(name,email,password_hash,bio)=>{
    const [result]=await db.query('INSERT INTO users(name,email,password_hash,bio) values(?,?,?,?)',[name,email,password_hash,bio]);
    return result;
}

const findUserByEmail=async(email)=>{
    const [result]=await db.query('SELECT * from users WHERE email=?',[email]);
    return result[0];
}


export {createUser,findUserByEmail};