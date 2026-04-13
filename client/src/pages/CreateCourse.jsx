import React from 'react'
import Navbar from '../components/Navbar'
import {AuthContext} from '../context/AuthContext.jsx'
import { useContext,useState } from 'react'

const CreateCourse = () => {
    const {logout}=useContext(AuthContext);
    const [formData,setFormData]=useState({
        title:"",
        description:"",
        content:""
    })

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            const res=await fetch("http://localhost:3000/api/courses",{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                credentials:"include",
                body:JSON.stringify(formData)
            })
            const data=await res.json();
            if(!res.ok){
                console.log(data.error);
            }
            console.log("Course created successfully");
            setFormData({title:"",description:"",content:""})
        }catch(err){
            console.error(err);
        }
    }
  return (
    <>
    <title>SkillShare | Create a Course</title>
    <Navbar/>
     <div className='text-center mt-4 text-4xl font-bold'>
        <h1>Create your course here by entering the content below</h1>
     </div>
     <div>
        <form onSubmit={handleSubmit}>
            <div className='p-4'>
                <label htmlFor="title" className='text-2xl'>Title:</label>
                <input type="text" name='title' className='w-full p-2 border' 
                value={formData.title}
                onChange={handleChange}
                required/>
            </div>
            <div className='p-4'>
                <label htmlFor="description" className='text-2xl'>Description:</label>
                <textarea name="description" className='w-full border' rows="5" 
                value={formData.description}
                onChange={handleChange}
                required></textarea>
            </div>
            <div className='p-4'>
                <label htmlFor="content" className='text-2xl'>Content:</label>
                <textarea name="content" className='w-full mt-2 border' rows="20" 
                value={formData.content}
                onChange={handleChange}
                required></textarea>
            </div>
            <div className='p-4'>
                <button type='submit' className='bg-green-900 text-white p-4 cursor-pointer'>Save Course</button>
            </div>
        </form>
     </div>
    </>
  )
}

export default CreateCourse