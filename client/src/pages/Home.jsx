import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <title>SkillShare- A Community learning platform</title>
    <Navbar />
    <section>
        <h1 className='text-center mt-4 text-4xl'>Learn, Share and Grow with a community of creators</h1>
        <p className='text-center mt-5 text-2xl '>Join and explore courses created by real people</p>
        <div className='mt-8 flex gap-3 justify-center'>
            <button className='bg-violet-900 text-white p-3 rounded'>Browse Courses</button>
            <button className='bg-yellow-600 text-white p-3 rounded'>Get Started</button>
        </div>
    </section>
    <section className='bg-violet-900 p-4 mt-5'>
        <h1 className='mt-2 text-center text-white text-2xl'>Here are some of our Popular courses</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-4'>
            <div className='bg-blue-200 w-full mt-4 p-2 hover:border-8 shadow-amber-400 transition-colors cursor-pointer'>
                <p><span className='font-bold'>title: </span>Python for data science</p>
                <p><span className='font-bold'>Desc: </span>A comprehensive Python course for DS.</p>
                <p><span className='font-bold'>Creator Name: </span>Akshay Krishnan</p>
            </div>
            <div className='bg-blue-200 w-full mt-4 p-2 hover:border-8 shadow-amber-400 transition-colors cursor-pointer'>
                <p><span className='font-bold'>title: </span>Core Java</p>
                <p><span className='font-bold'>Desc: </span>A course to learn basics of Java</p>
                <p><span className='font-bold'>Creator Name: </span>Hitesh Singh</p>
            </div>
            <div className='bg-blue-200 w-full mt-4 p-2 hover:border-8 shadow-amber-400 transition-colors cursor-pointer'>
                <p><span className='font-bold'>title: </span>Machine Learning Basics</p>
                <p><span className='font-bold'>Desc: </span>A comprehensive course to cover ML Basics</p>
                <p><span className='font-bold'>Creator Name: </span>Krishna Kumar</p>
            </div>
            <div className='bg-blue-200 w-full mt-4 p-2 hover:border-8 shadow-amber-400 transition-colors cursor-pointer'>
                <p><span className='font-bold'>title: </span>Data Analytics Bootcamp</p>
                <p><span className='font-bold'>Desc: </span>The only course you need for Analytics</p>
                <p><span className='font-bold'>Creator Name: </span>Rahul Jain</p>
            </div>
        </div>
    </section>
    <section>
        <h1 className='text-center mt-4 text-3xl font-bold'>How it works ?</h1>
        <div className='bg-amber-200 m-4 p-4 text-center mb-8'>
            <h1 className='text-2xl'><span className='font-bold'>👤 Join the Community: </span>Sign up and create your profile to get started.</h1>
            <h1 className='text-2xl'><span className='font-bold'>📚 Explore & Enroll: </span>Browse courses and enroll in what interests you.</h1>
            <h1 className='text-2xl'><span className='font-bold'>💬 Learn & Interact: </span>Learn from content and engage with creators.</h1>
            <h1 className='text-2xl'><span className='font-bold'>🎥 Create & Share: </span>Upload your own courses and share knowledge.</h1>
            <h1 className='text-2xl'><span className='font-bold'>🚀 Grow Together: </span>Build skills, gain recognition, and grow with the community.</h1>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Home