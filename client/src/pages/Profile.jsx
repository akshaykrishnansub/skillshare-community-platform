import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import { AuthContext } from '../context/AuthContext.jsx'
import { Link } from 'react-router-dom'

const Profile = () => {

  const {logout,setUser}=useContext(AuthContext);
  const [editMode,setEditMode]=useState(false);
  const [profile,setProfile]=useState(null);
  const [name,setName]=useState("");
  const [bio,setBio]=useState("");

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

    <div className='mt-4 px-2'><h1 className='text-3xl font-extrabold'>Profile Information:</h1></div>
    {!editMode ?(
      <>
      {/*VIEW MODE*/}
      <div className='flex mt-4 px-2 gap-2 text-2xl'><p className='font-bold'>Name:</p>{profile.name}</div>
      <div className='flex mt-4 px-2 gap-2 text-2xl'><p className='font-bold'>Email:</p>{profile.email}</div>
      <div className='flex mt-4 px-2 gap-2 text-2xl'><p className='font-bold'>About me:</p>{profile.bio}</div>
      <div className='flex mt-8 px-2 gap-3'>
        <Link to='/dashboard' className='text-white bg-black p-2'><p>Go back to dashboard</p></Link>
        <button className='bg-purple-700 p-2 text-white cursor-pointer' onClick={()=>setEditMode(true)}>Edit Profile</button>
      </div>
      </>
    ):(
      <>
      {/*EDIT MODE */}
      <form>
        <div className='flex mt-4 px-2 gap-2 text-2xl'>
          <p className='font-bold'>Name:</p>
          <input className='border p-2'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className='flex mt-4 px-2 gap-2 text-2xl'>
          <p className='font-bold'>About Me:</p>
          <textarea className='border p-2 w-full'
          value={bio}
          onChange={(e)=>setBio(e.target.value)}
          />
        </div>
        <div className='flex mt-8 px-2 gap-2'>
          <button className='bg-green-800 text-white p-2' onClick={handleUpdate}>Save Updates</button>
          <button className='bg-red-800 text-white p-2' onClick={()=>setEditMode(false)}>Cancel</button>
        </div>
      </form>
      </>
    )}
    </>
  )
}

export default Profile