import React, { useState } from 'react';
import logo from '../../assets/NS.png';
import { FaMobile } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";


function Navigation() {
  
  const[isopen,setisopen] = useState(false);

  const scrollToSection = (event,section)=>{
    event.preventDefault(); 
      const sec = document.getElementById(section);
      if(sec){
        sec.scrollIntoView({ behavior: 'smooth' });
      }
      setisopen(false);
  };

  const toggleMenu = () => {
    setisopen(!isopen);
  };
  

  return (

    <>
    

    <nav className=" border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    <a href="#responsive-header" className="flex items-center space-x-3 ">
        <img src={logo} className="h-16" alt="Logo" />
    </a>
    <button onClick={toggleMenu}  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isopen}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={` w-full md:flex md:w-auto items-center  justify-between mx-auto ${isopen ? '' :'hidden'}`} id='navbar-default'>
      <ul className="font-semibold text-lg flex flex-col p-4 md:p-0 mt-4 border hover:cursor-pointer border-gray-100 rounded-lg  md:flex-row md:space-x-8  md:mt-0 md:border-0 md:bg-gray dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#responsive-header" 
          onClick={(e=>scrollToSection(e,'Home'))} 
          className="block py-2 px-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
          >
          Home
          </a>
        </li>
        <li>
          <a href="#responsive-header" 
          onClick={(e=>scrollToSection(e,'About'))} 
          className="block py-2 px-4 text-gray-900 rounded  hover:bg-gray-100  md: hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  transition duration-200"
          >
            About Me
            </a>
        </li>
        <li>
          <a href="#responsive-header" onClick={(e=>scrollToSection(e,'Skills'))}
           className="block py-2 px-4 text-gray-900 rounded  hover:bg-gray-100 md:  hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-200"
           >
            Skills</a>
        </li>
        <li>
          <a href="#responsive-header" onClick={(e=>scrollToSection(e,'Exp'))} className="block py-2 px-4 text-gray-900 rounded  hover:bg-gray-100 md:  hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-200"
            >
              Experiences</a>
        </li>
        <li>
          <a href="#responsive-header" onClick={(e=>scrollToSection(e,'Projects'))} className="block py-2 px-4 text-gray-900 rounded  hover:bg-gray-100 md:  hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  transition duration-200"
            >
              Projects</a>
        </li>
        
      </ul>
      <div className="flex items-center hover:cursor-pointer ">
      <a href='548-333-0997' target='_blank' rel="noopener noreferrer">
        <FaMobile className=' object-scale-down h-9 ml-96' size={40}/>     
     </a>
     <a href='https://github.com/Code2voyager' target='_blank' rel='noopener noreferrer'>
      <FaGithub size={40} />
    </a>
      <a href='https://www.linkedin.com/in/nidhis224/' target='_blank' rel="noopener noreferrer">
      <FaLinkedin size={40} color='#000080' />

      </a>
      <a href=' mailto:nidhi1709shetty@gmail.com' target='_blank' rel="noopener noreferrer">
        <MdOutlineMailOutline  size={42} color='#ff4949' />     
     </a>
      </div>
      
    </div>
    
  </div>
</nav>


    </>



  )
}

export default Navigation