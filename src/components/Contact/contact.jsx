import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact({ isOpen, onClose }) {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
        <div>
          <h1 className="text-3xl font-extrabold">Let's Talk</h1>
          <p className="text-sm text-gray-400 mt-3">I'm excited to bring ideas to life and tackle new challenges in the world of web development. Whether you have a project in mind or just want to chat about possibilities, I’d love to hear from you!</p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                 <MdOutlineMailOutline/>
                </div>
                <a target="blank" href="mailto:nidhi1709shetty@gmail.com" className="text-[#007bff] text-sm ml-3">
                  <small className="block">Mail</small>
                  <strong>nidhi1709shetty@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Socials</h2>
            <ul className="flex mt-3 space-x-4">
     <a href='https://github.com/Code2voyager' target='_blank' rel='noopener noreferrer'>
      <FaGithub size={40} />
    </a>
      <a href='https://www.linkedin.com/in/nidhishetty224' target='_blank' rel="noopener noreferrer">
      <FaLinkedin size={40} color='#000080' />

      </a>
      <a href=' mailto:nidhi1709shetty@gmail.com' target='_blank' rel="noopener noreferrer">
        <MdOutlineMailOutline  size={42} color='#ff4949' />     
     </a>
            </ul>
          </div>
        </div>
        <form className="ml-auto space-y-4">
          <input type='text' placeholder='Name' className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
          <input type='email' placeholder='Email' className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
          <input type='text' placeholder='Subject' className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
          <textarea placeholder='Message' rows="6" className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
          <button type='button' className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
          <button type='button' onClick={onClose} className="text-gray-600 hover:bg-gray-200 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
