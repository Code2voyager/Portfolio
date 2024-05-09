import React from 'react';

function Navigation() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-950 p-2">
  <div  className="flex item-center flex-shrink-0 text-white ml-6 sm:min-w-0" >
    <img src="/NS.png" className=" font-semibold tracking-tight" alt="Description of the image" />
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-xl lg:flex-grow">
      <a href="#responsive-header" className="text-white block mt-4 lg:inline-block lg:mt-0 hover:text-white sm:ml-20">Home</a>
     <a href="#responsive-header" className="text-white block mt-4 lg:inline-block lg:mt-0 hover:text-white sm:ml-20">Skills</a>
     <a href="#responsive-header" className="text-white block mt-4 lg:inline-block lg:mt-0 hover:text-white sm:ml-20 ">Experience</a>
     <a href="#responsive-header" className="text-white block mt-4 lg:inline-block lg:mt-0 hover:text-white sm:ml-20 ">Projects</a>
    
    </div>
  </div>


</nav>
  )
}

export default Navigation