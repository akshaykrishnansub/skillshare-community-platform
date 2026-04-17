import mysql from 'mysql2/promise'


const db=mysql.createPool({
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASSWORD,
    database:process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
})

console.log(process.env.MYSQLHOST)
console.log("DB CONFIG:", {
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT
});
console.log("MySQL connected");
export default db;