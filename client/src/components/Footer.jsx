import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black p-4 mt-3'>
        <p className='text-2xl text-white text-center'>© {new Date().getFullYear()} SkillShare. Built by Akshay Krishnan</p>
    </footer>
  )
}

export default Footer