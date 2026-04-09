import React, { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import { useState } from 'react'

const AllCourses = () => {
  const [courses,setCourses]=useState([]);
  useEffect(()=>{
    const fetchCourses=async()=>{
      try{
        const res=await fetch("http://localhost:3000/api/courses");
        const data=await res.json();
        if(res.ok){
          setCourses(data.courses);
        }

      }catch(err){
        console.error(err);
      }
    }
    fetchCourses();
  },[])
  return (
    <>
    <Navbar />
    <div className='mt-4'>
      <h1 className='text-center font-extrabold text-3xl'>Here is a list of all courses</h1>
    </div>
    {courses.length===0?(
      <h1 className='text-2xl text-center font-bold mt-4 '>No courses to display</h1>
    ):(
      <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 gap-1.5'>
        {courses.map((course)=>(
          <>
          <div
          key={course.id}
          className='border bg-purple-950 p-4 rounded shadow hover:shadow-lg transition'
          >
            <h3 className='text-2xl font-semibold text-white'>{course.title}</h3>
            <p className='text-sm text-white space-y-4'>{course.description}</p>
            <p className='mt-2 text-sm text-white font-bold space-y-4'>{course.instructor}</p>
          </div>
          </>
        ))}
      </div>
      </>
    )}
    </>
  )
}

export default AllCourses