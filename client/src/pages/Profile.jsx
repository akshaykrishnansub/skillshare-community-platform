import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import { AuthContext } from '../context/AuthContext.jsx'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
  
  const navigate=useNavigate();
  const {logout,setUser}=useContext(AuthContext);
  const [editMode,setEditMode]=useState(false);
  const [profile,setProfile]=useState(null);
  const [name,setName]=useState("");
  const [bio,setBio]=useState("");

  const [courses,setCourses]=useState([]);
  const openMyCourse=(id)=>{
    navigate(`/courses/my-courses/${id}`)
  }

  useEffect(()=>{
    const fetchProfile=async()=>{
      const res=await fetch("http://localhost:3000/api/profile",{
        credentials:"include"
      })
      const data=await res.json();
      console.log(res.status,data);
      setProfile(data);

      //Prefill the fields to edit
      setName(data.name);
      setBio(data.bio || "");
    }
    fetchProfile();
  },[]);

  useEffect(()=>{
    const fetchMyCourses=async()=>{
      try{
        const res=await fetch("http://localhost:3000/api/courses/my-courses",{
          credentials:'include'
        })
        const data=await res.json();
        if(res.ok){
          setCourses(data.courses);
        }
        
      }catch(err){
        console.error(err);
      }
    }
    fetchMyCourses();
  },[]);


  const handleUpdate=async(event)=>{
    event.preventDefault();

    try{
      const res=await fetch("http://localhost:3000/api/profile",{
        method:"PUT",
        headers:{'Content-Type':'application/json'},
        credentials:"include",
        body:JSON.stringify({name,bio})
      })
      const data=await res.json();
      if(!res.ok){
        console.error(data.error);
        return;
      }

      //update UI
      setProfile(data.user)

      setUser(prev=>({
        ...prev,
        name:data.user.name,
        bio:data.user.bio
      }))

      setEditMode(false);

    }catch(err){
      console.error(err.message);
    }
  }

  if(!profile)
    return <p>Loading...</p>
  
  return (
    <>
    <title>SkillShare | My Profile</title>
    <Navbar
    showLogin={false}
    showSignup={false}
    rightSlot={
      <button className='bg-amber-950 text-white p-2 rounded hover:bg-amber-900 cursor-pointer'onClick={logout}>Logout</button>
    }
    />

    <div className='mt-4 px-4'><h1 className='text-3xl font-extrabold'>Profile Information:</h1></div>
    {!editMode ?(
      <>
      {/*VIEW MODE*/}
      <div className='mt-4 px-4'>
        <h1 className='text-3xl font-bold'>Name:{" "}</h1>
        <p className='text-2xl'>{profile.name}</p>
      </div>
      <div className='mt-4 px-4'>
        <h1 className='text-3xl font-bold'>Email:{" "}</h1>
        <p className='text-2xl'>{profile.email}</p>
      </div>
      <div className='mt-4 px-4'>
        <h1 className='text-3xl font-bold'>About me:</h1>
        <p className='text-2xl'>{profile.bio}</p>
      </div>
      <div className='flex mt-8 px-2 gap-3'>
        <Link to='/dashboard' className='text-white bg-black p-2'><p>Go back to dashboard</p></Link>
        <button className='bg-purple-700 p-2 text-white cursor-pointer' onClick={()=>setEditMode(true)}>Edit Profile</button>
      </div>
      </>
    ):(
      <>
      {/*EDIT MODE */}
      <form onSubmit={handleUpdate}>
        <div className='mt-4 px-4'>
          <h1 className='text-3xl font-bold'>Name:</h1>
          <input className='text-2xl border p-2 w-full'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className='mt-4 px-4'>
          <p className='text-3xl font-bold'>About Me:</p>
          <textarea className='text-2xl border p-2 w-full'
          value={bio}
          onChange={(e)=>setBio(e.target.value)}
          />
        </div>
        <div className='flex mt-8 px-4 gap-2'>
          <button type='submit' className='bg-green-800 text-white p-2'>Save Updates</button>
          <button className='bg-red-800 text-white p-2' onClick={()=>setEditMode(false)}>Cancel</button>
        </div>
      </form>
      </>
    )}
    <div className='mt-8'>
      <h1 className='text-center text-3xl font-extrabold'>My Created Courses</h1>
    </div>
    {courses.length===0?(
      <div className='mt-4'>
        <p className='text-2xl text-center'>You have not created any courses yet.</p>
      </div>
    ):(
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 gap-1.5 mb-6'>
        {courses.map((course)=>(
          <div
          key={course.id}
          className='border p-4 rounded shadow hover:shadow-lg transition cursor-pointer'
          >
            <h3 className='text-3xl font-semibold'>Course Name:{" "}</h3><p className='text-2xl'>{course.title}</p>
            <h3 className='text-3xl font-semibold'>Instructor:{" "}</h3><p className='text-2xl'>{course.instructor}</p>
            <div className='mt-4 flex gap-2 justify-center'>
              <button className='p-2 text-white bg-amber-800 rounded hover:bg-amber-700 cursor-pointer' onClick={()=>openMyCourse(course.id)}>View Content</button>            </div>
          </div>
        )
        )}
      </div>
    )}
    </>
  )
}

export default Profile