import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useContext,useState } from 'react';

const Login = () => {

  const {login}=useContext(AuthContext);
  const navigate=useNavigate();

  const [formData,setFormData]=useState({
    email:"",
    password:""
  })

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }

  const handleSubmit=async(event)=>{
    event.preventDefault();
    const success=await login(formData.email,formData.password);
    if(success){
      console.log("Login successful");
      navigate("/dashboard")
    }else{
      console.log("Login failed");
    }
  }

  return (
    <>
    <title>SkillShare | Login</title>
    <div className='px-2 bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='max-w-md p-8 w-full bg-white border border-amber-700'>
        <h1 className='text-center text-3xl font-bold'><Link to="/">SkillShare</Link></h1>
        <p className='text-center mt-4 font-semibold'>Login to start sharing knowledge with a community of learners</p>
        <form onSubmit={handleSubmit}>
          <div className='mt-4'>
            <label htmlFor="Email">Email:</label>
            <input type="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full p-3 mt-4 border border-amber-700' required/>
          </div>
          <div className='mt-4'>
            <label htmlFor="Password">Password:</label>
            <input type="password" 
            name='password'
            value={formData.password}      
            onChange={handleChange}      
            className='w-full p-3 mt-4 border border-amber-700' required/>
          </div>
          <div>
            <button type='submit' className='bg-amber-900 p-3 mt-4 w-full text-white hover:bg-amber-600 cursor-pointer'>Login</button>
          </div>
        </form>
        <p className='text-center mt-4 font-semibold'>Don't have an account yet?{" "}<Link to="/register" className='text-amber-800'>Register Here</Link></p>
      </div>
    </div>
    </>
  )
}

export default Login