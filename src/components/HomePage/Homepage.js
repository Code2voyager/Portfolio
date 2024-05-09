import React from 'react';
import profile from './profile1.jpg';
import Skills from '../Skills/Skills';

function Homepage() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen -mt-24 sm:-mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-screen-xl">
        <div className="flex flex-col justify-center m-28 w-max mt-64 ">
          <h1 className="text-5xl md:text-5xl mb-4 md:mb-6 sm:-mb-16 sm: ml-44 sm: -mt-28 sm:text-4xl">Hi, I'm<br /> <span className="text-blue-900">Nidhi Shetty</span></h1>
          {/* <a href="#" class="text-blue-600  text-md font-bold transition duration-300 hover:text-blue-900">Click to know More</a> */}

        </div>
        <div className="flex justify-center items-center">
          <img src={profile} alt="profile" className="h-48 md:h-80 rounded-md mt-4 md:mt-0 sm:-mt-12 sm:h-80"/>
        </div>
      </div>
    </div>

    {/*  */}
    <div className='flex flex-col items-center justify-center'>
    <h1 className="md:mb-6 md:ml-2 sm:-mb-16  sm:-mt-28 sm:text-4xl sm:underline sm:font-sans">ABOUT ME</h1>
    <p class="mb-3 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 sm:font-serif">I am a <strong className='text-blue-900'>Software Developer with 3 years of experience.</strong>  I am passionate about innovating and learning about new technology. I am energic,enthusiasm person and positive attiude person and love to explore new things and learn about them.Following are my professional skills.</p>           

    </div>
      {/* <section className='flex justify-center items-center -mt-28'>
    

        </section> */}
   
      <Skills/>
    
    </>
  )
}

export default Homepage