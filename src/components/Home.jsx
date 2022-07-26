import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-teal-600'>Hi, I'm</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Rajesh Sagayanathan</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Full-Stack Developer</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a self-taught developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience.</p>
          <div>
            <button className= 'text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-600 hover:border-teal-600'>
            View Projects
              <span className= 'group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Home