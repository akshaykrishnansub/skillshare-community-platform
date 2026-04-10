import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import { AuthContext } from '../context/AuthContext.jsx'
import { useParams } from 'react-router-dom'

const CourseContent = () => {
  const {id}=useParams();
  const {logout}=useContext(AuthContext);
  const [courseContent,setCourseContent]=useState(null);

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

  return (
    <>
    <Navbar
    showLogin={false}
    showSignup={false}
    rightSlot={
      <button className='bg-amber-950 text-white p-2 rounded hover:bg-amber-900 cursor-pointer'onClick={logout}>Logout</button>
    }
    />
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
    </>
  )
}

export default CourseContent