import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import { AuthContext } from '../context/AuthContext.jsx'
import { Link } from 'react-router-dom'

const Profile = () => {

  const {logout}=useContext(AuthContext);

  const [profile,setProfile]=useState(null);

  useEffect(()=>{
    const fetchProfile=async()=>{
      const res=await fetch("http://localhost:3000/api/profile",{
        credentials:"include"
      })
      const data=await res.json();
      console.log(res.status,data);
      setProfile(data);
    }
    fetchProfile();
  },[]);

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
    <div className='mt-4 px-2'><h1 className='text-3xl font-extrabold'>Profile Information:</h1></div>
    <div className='flex mt-4 px-2 gap-2 text-2xl'><p className='font-bold'>Name:</p>{profile.name}</div>
    <div className='flex mt-4 px-2 gap-2 text-2xl'><p className='font-bold'>Email:</p>{profile.email}</div>
    <div className='flex mt-4 px-2 gap-2 text-2xl'><p className='font-bold'>About me:</p>{profile.bio}</div>
    <div className='flex mt-8 px-2 gap-3'>
      <Link to='/dashboard' className='text-white bg-black p-2'><p>Go back to dashboard</p></Link>
      <button className='bg-purple-700 p-2 text-white'>Edit Profile</button>
    </div>
    </>
  )
}

export default Profile