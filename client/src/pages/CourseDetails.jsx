import React, { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const CourseDetails = () => {
    const {id}=useParams();
    const [courseDetail,setCourseDetail]=useState(null);

    useEffect(()=>{
        const fetchCourse=async(id)=>{
            try{
                const res=await fetch(`http://localhost:3000/api/courses/${id}`);
                const data=await res.json();
                if(res.ok){
                    setCourseDetail(data);
                }
            }catch(err){
                console.error(err);
            }
        }
        fetchCourse(id);
    },[id]);

    if (!courseDetail) {
    return (
      <>
        <Navbar />
        <p className="p-4">Loading...</p>
      </>
    );
  }
  
  return (
    <>
    <Navbar />
    <div className='mt-4 p-4'>
        <h2 className='text-2xl font-bold'>Title:{" "}</h2><p className='text-2xl'>{courseDetail.title}</p>
    </div>
    <div className='mt-2 p-4'>
        <h2 className='text-2xl font-bold'>Description:{" "}</h2><p className='text-2xl'>{courseDetail.description}</p>
    </div>
    <div className='mt-2 p-4'>
        <h2 className='text-2xl font-bold'>Instructor:{" "}</h2><p className='text-2xl'>{courseDetail.instructor}</p>
    </div>
    </>
  )
}

export default CourseDetails