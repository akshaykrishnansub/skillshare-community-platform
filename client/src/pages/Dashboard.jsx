import React, { useContext } from 'react'
import Navbar from '../components/Navbar.jsx'
import { AuthContext } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const {logout}=useContext(AuthContext);
  const navigate=useNavigate();

  return (
    <>
    <title>SkillShare | Dashboard</title>
    <Navbar 
    showLogin={false}
    showSignup={false}
    rightSlot={
      <button className='bg-amber-950 text-white p-2 rounded hover:bg-amber-900 cursor-pointer'onClick={logout}>Logout</button>
    }
    />
    <div className='flex'>
      <aside className='h-screen w-64 bg-purple-950'>
        <div className='text-white pt-2 text-4xl text-center font-bold'>MENU</div>
        <div className='text-white mt-4 text-2xl text-center font-semibold hover:text-amber-400'><Link to="/profile">My Profile</Link></div>
        <div className='text-white mt-4 text-2xl text-center font-semibold hover:text-amber-400'><Link>My Enrolled Courses</Link></div>
        <div className='text-white mt-4 text-2xl text-center font-semibold hover:text-amber-400'><Link>My Created Courses</Link></div>
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