import React, { useContext } from 'react'
import Navbar from '../components/Navbar.jsx'
import { AuthContext } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom';

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
    </>
  )
}

export default Dashboard