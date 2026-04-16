import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import { AuthContext } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {

  const {logout}=useContext(AuthContext);
  const navigate=useNavigate();
  const [sidebarOpen,setSidebarOpen]=useState(false);
  const [stats,setStats]=useState(null);

  useEffect(()=>{
    const displayStats=async()=>{
      const res=await fetch(`http://localhost:3000/api/dashboard/stats`,{
        credentials:"include"
      })
      const data=await res.json();
      setStats(data);
    }
    displayStats();
  },[])

  if(!stats)
    return <p>Loading...</p>

  return (
    <>
    <title>SkillShare | Dashboard</title>
    <Navbar
    leftSlot={
    <button
      className="lg:hidden text-white p-2"
      onClick={() => setSidebarOpen(true)}
    >
      ☰
    </button>
  }
    />
    <div className='flex'>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)}/>
        )}
      <aside className={`fixed w-64 justify-center px-2 left-0 h-screen bg-purple-950 lg:h-[calc(100vh-64px)] transform transition-transform duration-300 ${sidebarOpen?"translate-x-0":"-translate-x-full"} lg:translate-x-0`}>
        <button className="lg:hidden text-white text-right w-full cursor-pointer" onClick={() => setSidebarOpen(false)}>✖</button>
        <div className='text-white pt-2 text-4xl text-center font-bold'>MENU</div>
        <div className='text-white mt-4 text-2xl text-center font-semibold hover:text-amber-400'><Link to="/profile">My Profile</Link></div>
        <div className='text-white mt-4 text-2xl text-center font-semibold hover:text-amber-400'><Link to="/all-courses">Go to All Courses</Link></div>
      </aside>
      <main className='flex-1 lg:ml-64 p-4'>
        <div className='text-center mt-4'><h1 className='text-3xl font-bold'>Some Stats:</h1></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 p-4'>
          <div className='bg-white shadow rounded-xl p-4 w-full'>
            <p className='text-2xl font-extrabold'>Total Courses Created by User</p>
            <h2 className='text-xl'>{stats.totalCourses}</h2>
          </div>
          <div className='bg-white shadow rounded-xl p-4 w-full'>
            <p className='text-2xl font-extrabold'>Total Enrollments on My Courses</p>
            <h2 className='text-xl'>{stats.totalEnrollments}</h2>
          </div>
          <div className='bg-white shadow rounded-xl p-4 w-full'>
            <p className='text-2xl font-extrabold'>No.of Unique Students</p>
            <h2 className='text-xl'>{stats.totalStudents}</h2>
          </div>
          <div className='bg-white shadow rounded-xl p-4 w-full'>
            <p className='text-2xl font-extrabold'>Courses that I have enrolled</p>
            <h2 className='text-xl'>{stats.myEnrolledCourses}</h2>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <button className='p-2 text-white bg-blue-950 hover:bg-blue-800 mt-4 cursor-pointer' onClick={()=>navigate("/create-course")}>+ Create a Course</button>
        </div>
      </main>
    </div>
    </>
  )
}

export default Dashboard