import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({title='SkillShare'}) => {
  return (
    <nav className='bg-amber-300 flex p-4 justify-between items-center '>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <div className='flex items-center gap-7'>
        <Link to='/login' className='hover:font-bold cursor-pointer'>Login</Link>
        <button className='bg-amber-600 p-2 hover:bg-amber-800 cursor-pointer text-white rounded'><Link to='/register'>Sign Up for free</Link></button>
      </div>
    </nav>
  )
}

export default Navbar