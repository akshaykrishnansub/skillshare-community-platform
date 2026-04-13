import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext} from '../context/AuthContext.jsx';
import { useContext } from 'react';

const Navbar = ({rightSlot,leftSlot,title='SkillShare'}) => {

  const navigate=useNavigate();
  const {user,logout}=useContext(AuthContext)
  return (
    <nav className='bg-amber-300 flex p-4 justify-between items-center '>
      <h1 className='font-bold text-2xl'><Link to='/'>{title}</Link></h1>
      <div className='flex items-center gap-7'>
        {!user?(
          <>
          <Link to='/login' className='hover:font-bold cursor-pointer'>Login</Link>
          <button className='bg-amber-600 p-2 hover:bg-amber-800 cursor-pointer text-white rounded' onClick={()=>navigate('/register')}>Sign Up for free</button>
          </>
        ):(
          <button className='bg-amber-950 p-2 cursor-pointer text-white rounded' onClick={logout}>Logout</button>
        )}
        
        {rightSlot}
      </div>
    </nav>
  )
}

export default Navbar