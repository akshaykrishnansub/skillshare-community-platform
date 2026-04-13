import React, { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AllCourses = () => {
  const navigate=useNavigate();
  const [courses,setCourses]=useState([]);

  const openCourse=(id)=>{
    navigate(`/courses/${id}`);
  }

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
    <title>SkillShare | All Courses</title>
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
          <div
          key={course.id}
          className='border p-4 rounded shadow hover:shadow-lg transition cursor-pointer'
          >
            <h3 className='text-3xl font-semibold'>Course Name:{" "}</h3><p className='text-2xl'>{course.title}</p>
            <h3 className='text-3xl font-semibold'>Instructor:{" "}</h3><p className='text-2xl'>{course.instructor}</p>
            <div className='mt-4'>
              <button className='p-2 rounded bg-purple-800 text-white' onClick={()=>{openCourse(course.id)}}>View Course Details</button>
            </div>
          </div>
        ))}
      </div>
      </>
    )}
    </>
  )
}

export default AllCourses