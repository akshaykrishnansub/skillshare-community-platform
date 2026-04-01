import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js'
import db from './config/db.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app=express();

//recreate __dirname in ES modules
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../../client/dist')));

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(cookieParser());

const port=process.env.PORT || 3000;

app.use('/api',authRoutes);

app.get("/",(req,res)=>{
    res.send("Server is running");
})

app.get(/.*/,(req,res)=>{
    res.sendFile(path.join(__dirname,"../../client/dist/index.html"))
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