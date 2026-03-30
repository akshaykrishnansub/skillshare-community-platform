import express from 'express'
import db from './config/db.js'
const app=express();

app.use(express.json());
app.use(express.static('public'));

const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Server is running");
})

app.get("/test-db",(req,res)=>{
    db.query('SELECT 1',(err,result)=>{
        if(err){
            return res.status(500).json({error:err.message})
        }else{
            res.json({message:'DB connected successfully'})
        }
    })
})
app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
});