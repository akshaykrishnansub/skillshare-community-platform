import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <>
    <title>SkillShare | Register Here</title>
    <div className='px-2 bg-gray-100 flex items-center justify-center min-h-screen'>
      <div className='bg-white p-8 w-full max-w-md border border-blue-800'>
        <h2 className='text-center text-3xl font-bold'><Link to="/">SkillShare</Link></h2>
        <p className='mt-4 text-center mb-4'>Create your account to continue creating and enrolling to courses</p>
        <form>
          <div className='mt-4'>
            <label htmlFor="Name">Name:</label>
            <input type="text" className='w-full p-3 mt-4 border border-amber-700'/>
          </div>
          <div className='mt-4'>
            <label htmlFor="Email">Email:</label>
            <input type="email" className='w-full p-3 mt-4 border border-amber-700' />
          </div>
          <div className='mt-4'>
            <label htmlFor="Password">Password:</label>
            <input type="password" className='w-full p-3 mt-4 border border-amber-700' />
          </div>
          <div className='mt-4'>
            <label htmlFor="Bio">Bio:</label>
            <textarea className='w-full border border-amber-700' maxLength={250}></textarea>
          </div>
          <div className='mt-4'>
            <button type='submit' className='bg-amber-900 w-full p-3 text-white hover:bg-amber-600 cursor-pointer'>Click here to register</button>
          </div>
        </form>
        <p className='text-center mt-4 font-semibold'>Already have an account?{" "}<Link to='/login' className='hover:text-amber-900'>Login</Link></p>
      </div>
    </div>
    </>
  )
}

export default Register