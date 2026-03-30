import dotenv from 'dotenv'
import mysql from 'mysql2'

dotenv.config();

const db=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
})

db.connect((err)=>{
    if(err){
        console.log('Connection failed',err.message);
    }else{
        console.log('Connected to MySQL');
    }
})

export default db;