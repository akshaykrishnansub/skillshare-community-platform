import React from 'react'
import Navbar from '../components/Navbar'
import {AuthContext} from '../context/AuthContext.jsx'
import { useContext,useState } from 'react'

const CreateCourse = () => {
    const {logout}=useContext(AuthContext);
    const [toast,setToast]=useState(null);
    const [formData,setFormData]=useState({
        title:"",
        description:"",
        content:""
    })

    //Global function to show messages
    const showToast=(message,type="success")=>{
        setToast({message,type});
        setTimeout(()=>{
            setToast(null)
        },2500);
    }

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
            const res=await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/courses`,{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                credentials:"include",
                body:JSON.stringify(formData)
            })
            const data=await res.json();
            if(!res.ok){
                console.log(data.error);
            }
            showToast("Course created successfully","success");
            setFormData({title:"",description:"",content:""})
        }catch(err){
            console.error(err);
            showToast("Server error, Please try again","error");
        }
    }
  return (
    <>
    <title>SkillShare | Create a Course</title>
    <Navbar/>
    {toast &&(
        <div className={`fixed top-5 right-5 px-4 py-2 rounded text-white shadow-lg z-50 animate-slide-in ${
            toast.type==="success"?"bg-green-500":"bg-red-500"
        }`}>
            {toast.message}
        </div>
    )}
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