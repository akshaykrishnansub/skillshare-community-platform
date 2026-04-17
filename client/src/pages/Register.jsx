import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Register = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    bio:""
  })

  const [error,setError]=useState("");
  const [success,setSuccessMessage]=useState("");

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }

  const handleSubmit=async(event)=>{
    event.preventDefault();
    if(formData.name==="" || formData.email==="" || formData.password==="" || formData.bio===""){
      setError("All fields required");
      return;
    }

    try{
      const res=await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/register`,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        credentials:"include",
        body: JSON.stringify(formData)
      })

      const data=await res.json();
      if(!res.ok){
        setError(data.error || 'Registration Failed');
        return;
      }
      console.log(import.meta.env.VITE_API_BASE_URL);
      setSuccessMessage("User registered successfully 🏆");
      setFormData({name:"",email:"",password:"",bio:""});
      setError("");

    }catch(err){
      setError("Server error");
    }
  }


  return (
    <>
    <title>SkillShare | Register Here</title>
    <div className='px-2 bg-gray-100 flex items-center justify-center min-h-screen'>
      <div className='bg-white p-8 w-full max-w-md border border-blue-800'>
        <h2 className='text-center text-3xl font-bold'><Link to="/">SkillShare</Link></h2>
        <p className='mt-4 text-center mb-4'>Create your account to continue creating and enrolling to courses</p>
        <div>
          {success && (
            <p className='text-green-700 text-center font-medium p-2 mb-4'>
              {success}
              </p>
          )}
          {error && (
            <p className='text-red-700 text-center font-medium p-2 mb-4'>
              {error}
              </p>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mt-4'>
            <label htmlFor="Name">Name:</label>
            <input type="text"
             name='name' 
             value={formData.name}
             onChange={handleChange}
             className='w-full p-3 mt-4 border border-amber-700' required/>
          </div>
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
            <input 
            type="password" 
            name='password' 
            value={formData.password}
            onChange={handleChange}
            className='w-full p-3 mt-4 border border-amber-700' required/>
          </div>
          <div className='mt-4'>
            <label htmlFor="Bio">Bio:</label>
            <textarea
             name='bio' 
             value={formData.bio}
             onChange={handleChange}
             className='w-full border border-amber-700' maxLength={250} required></textarea>
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