import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import { AuthContext } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const {logout}=useContext(AuthContext);
  const navigate=useNavigate();
  const [sidebarOpen,setSidebarOpen]=useState(false);

  return (
    <>
    <title>SkillShare | Dashboard</title>
    <Navbar
    leftSlot={
    <button
      className="md:hidden text-white p-2"
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
      <aside className={`fixed justify-center px-2 left-0 h-screen w-64 bg-purple-950 lg:h-[calc(100vh-4rem)] transform transition-transform duration-300 ${sidebarOpen?"translate-x-0":"-translate-x-full"} lg:translate-x-0`}>
        <button className="lg:hidden text-white text-right w-full cursor-pointer" onClick={() => setSidebarOpen(false)}>✖</button>
        <div className='text-white pt-2 text-4xl text-center font-bold'>MENU</div>
        <div className='text-white mt-4 text-2xl text-center font-semibold hover:text-amber-400'><Link to="/profile">My Profile</Link></div>
        <div className='text-white mt-4 text-2xl text-center font-semibold hover:text-amber-400'><Link to="/all-courses">Go to All Courses</Link></div>
      </aside>
      <main className='flex-1'>
        <div className='flex items-center justify-center'>
          <button className='p-2 text-white bg-blue-950 hover:bg-blue-800 mt-4 cursor-pointer' onClick={()=>navigate("/create-course")}>+ Create a Course</button>
        </div>
      </main>
    </div>
    </>
  )
}

export default Dashboard