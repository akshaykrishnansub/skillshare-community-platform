import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import { AuthContext } from '../context/AuthContext.jsx'
import { useParams } from 'react-router-dom'

const CourseContent = () => {
  const {id}=useParams();
  const {logout}=useContext(AuthContext);
  const [courseContent,setCourseContent]=useState(null);
  const [editMode,setEditMode]=useState(false);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [content,setContent]=useState("");

  useEffect(()=>{
    const fetchCourseContent=async()=>{
      try{
        const res=await fetch(`http://localhost:3000/api/courses/my-courses/${id}`,{
          credentials:"include"
        })
        const data=await res.json();
        if(res.ok){
          setCourseContent(data.courseContent[0]);
        }
      }catch(err){
        console.error(err);
      }
    }
    fetchCourseContent();
  },[id]);

  if(!courseContent){
    return (
      <>
      <Navbar />
      <p className='p-4'>Loading....</p>
      </>
    )
  }

  const handleContentUpdate=async(event)=>{
    event.preventDefault();

    try{
      const res=await fetch(`http://localhost:3000/api/courses/${id}`,{
        method:"PUT",
        headers:{'Content-Type':'application/json'},
        credentials:"include",
        body: JSON.stringify({title,description,content})
      })
      const data=await res.json();
      if(!res.ok){
        console.error(data.error);
        return;
      }

      setCourseContent(data.courseContent);
      setEditMode(false);

    }catch(err){
      console.error(err); 
    }
  }

  return (
    <>
    <title>{courseContent.title}</title>
    <Navbar/>
    {!editMode?(
      <>
      <div className='mt-4 p-4'>
        <h2 className='text-2xl font-bold'>Title:{" "}</h2>
        <p className='text-2xl'>{courseContent.title}</p>
      </div>
      <div className='mt-2 p-4'>
        <h2 className='text-2xl font-bold'>Description:{" "}</h2>
        <p className='text-2xl'>{courseContent.description}</p>
      </div>
      <div className='mt-2 p-4'>
        <h2 className='text-2xl font-bold'>Instructor:{" "}</h2>
        <p className='text-2xl'>{courseContent.instructor}</p>
      </div>
      <div className='mt-2 p-4'>
        <h2 className='text-2xl font-bold'>Content:{" "}</h2>
        <p className='text-2xl'>{courseContent.content}</p>
      </div>
      <div className='mt-4 p-4'>
        <button className='bg-purple-900 p-2 text-white font-bold hover:bg-purple-800' onClick={()=>{setEditMode(true);setTitle(courseContent.title);setDescription(courseContent.description);setContent(courseContent.content)}}>Edit Content</button>
      </div>
      </>
    ):(
      <>
      <form onSubmit={handleContentUpdate}>
        <div className='mt-4 p-4'>
          <h2 className='text-2xl font-bold'>Title:{" "}</h2>
          <input className='text-2xl border p-2 w-full'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className='mt-4 p-4'>
          <h2 className='text-2xl font-bold'>Description:{" "}</h2>
          <textarea className='text-2xl border p-2 w-full'
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          />
        </div>
        <div className='mt-4 p-4'>
          <h2 className='text-2xl font-bold'>Content:{" "}</h2>
          <textarea className='text-2xl border p-2 w-full'
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          />
        </div>
        <div className='flex mt-4 px-4 gap-2'>
          <button type="submit" className='p-2 bg-green-900 text-white'>Save Changes</button>
          <button className='p-2 bg-red-900 text-white' onClick={()=>setEditMode(false)}>Cancel</button>
        </div>
      </form>
      </>
    )}
    </>
  )
}

export default CourseContent