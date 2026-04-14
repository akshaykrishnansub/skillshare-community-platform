import React, { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.jsx'

const CourseDetails = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    const [courseDetail,setCourseDetail]=useState(null);
    const {user}=useContext(AuthContext);
    const [enrolled,setEnrolled]=useState(false);
    const [toast,setToast]=useState(null);

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

    const handleEnroll=async()=>{
    try{
      const res=await fetch(`http://localhost:3000/api/courses/${id}/enroll`,{
        method:"POST",
        credentials:"include"
      });

      const data=await res.json();
      if(!res.ok){
        console.log(data.error);
        return;
      }
      showToast("Enrollment successful","success");
      setEnrolled(true);
    }catch(err){
      console.error(err);
      showToast("Server error, Please Try again","error");
    }
  }

  const showToast=(message,type="success")=>{
        setToast({message,type});
        setTimeout(()=>{
            setToast(null)
        },2500);
    }

    //check enrollment status
    useEffect(()=>{
        const checkStatus=async()=>{
            try{
                const res=await fetch(`http://localhost:3000/api/courses/${id}/enroll`,{
                    credentials:"include"
                })
                const data=await res.json();
                if(res.ok){
                    setEnrolled(data.enrolled);
                }
            }catch(err){
                console.error(err);
            }
        }
        checkStatus();
    },[id]);

    const isCreator=user&&courseDetail&&Number(user.id)===Number(courseDetail.creator_id);

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
    {toast &&(
        <div className={`fixed top-5 right-5 px-4 py-2 rounded text-white shadow-lg z-50 animate-slide-in ${
            toast.type==="success"?"bg-green-500":"bg-red-500"
        }`}>
            {toast.message}
        </div>
    )}
    <title>{courseDetail.title}</title>
    <div className='mt-4 p-4'>
        <h2 className='text-2xl font-bold'>Title:{" "}</h2><p className='text-2xl'>{courseDetail.title}</p>
    </div>
    <div className='mt-2 p-4'>
        <h2 className='text-2xl font-bold'>Description:{" "}</h2><p className='text-2xl'>{courseDetail.description}</p>
    </div>
    <div className='mt-2 p-4'>
        <h2 className='text-2xl font-bold'>Instructor:{" "}</h2><p className='text-2xl'>{courseDetail.instructor}</p>
    </div>
    <div className='mt-6 p-4'>
        {!user?(
            <button
            className='p-2 bg-black text-white font-bold'
            onClick={()=>navigate('/login')}
            >Login to Enroll</button>
        ):
        isCreator?(
            <button
            className='p-2 bg-blue-700 font-bold text-white'
            onClick={()=>navigate(`/courses/my-courses/${id}`)}
            >Go to your Course</button>
        ):enrolled?(
            <button
            className='p-2 bg-green-700 text-white font-bold'
            onClick={()=>navigate(`/courses/my-courses/${id}`)}
            >Continue Learning</button>
        ):(
            <button
            className='p-2 bg-purple-800 text-white font-bold'
            onClick={handleEnroll}
            >Enroll Now</button>
        )}
    </div>
    </>
  )
}

export default CourseDetails