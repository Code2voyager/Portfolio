import React from 'react';
import profile from './profile1.jpg';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import About from '../About/About';

function Homepage() {
  return (
    <>
    <div id="Home" className="flex justify-center items-center min-h-screen -mt-24 sm:-mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-screen-xl px-4 sm:px-8">
        <div className="flex flex-col justify-center items-center md:items-start m-8 md:m-28 hover:transition ease-in-out delay-150 -translate-y-1 hover:scale-110 hover:cursor-default  ">
          <h1 className="text-4xl md:text-5xl mb-4 ">Hi, I'm<br /> 
          <span className="text-black font-normal">Nidhi Shetty</span>
          </h1>
          <h3  className="text-blue-900 text-2xl sm:text-4xl md:text-4xl font-normal transition sm:leading-tight text-center sm:text-left ">Full Stack Developer</h3>

        </div>
        <div className="flex justify-center items-center">
          <img src={profile} alt="profile" className="h-48 md:h-80 rounded-lg hover:rounded-full mt-4 md:mt-0 "/>
        </div>
      </div>
    </div>

   
   <About/>
   
      <Skills/>
      <Experience/>
    
    </>
  )
}

export default Homepage