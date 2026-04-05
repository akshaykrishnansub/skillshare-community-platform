import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import { AuthContext } from '../context/AuthContext.jsx'

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
    <div>{profile.name}</div>
    <div>{profile.email}</div>
    <div>{profile.bio}</div>
    </>
  )
}

export default Profile