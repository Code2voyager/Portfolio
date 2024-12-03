import React, { useState } from "react";
import profile from "./profile1.jpg";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import Contact from "../Contact/contact";

function Homepage() {
  const [isContactOpen, setContactOpen] = useState(false);

  const handleOpenContact = () => {
    setContactOpen(true);
  };

  const handleCloseContact = () => {
    setContactOpen(false);
  };

  return (
    <>
      <div
        id="Home"
        className="flex justify-center items-center min-h-screen -mt-24 sm:-mt-36"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-screen-xl px-4 sm:px-8">
          <div className="flex flex-col justify-center items-center md:items-start m-8 md:m-28 transition-transform hover:scale-105">
            <h1 className="text-4xl md:text-5xl mb-4">
              Hi, I'm
              <br />
              <span className="text-black font-normal">Nidhi Shetty</span>
            </h1>
            <h3 className="text-blue-900 text-2xl sm:text-4xl md:text-4xl font-normal transition sm:leading-tight text-center sm:text-left">
              Full Stack Developer
            </h3>
            <p className="text-lg mt-4">
              Passionate about building scalable web applications and bringing
              ideas to life through clean code.
            </p>
            <div className="flex mt-6 space-x-4">
              <a
                href="/Nidhi Shetty_Software Engineer.pdf"
                download="Nidhi Shetty_Software Engineer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
              >
                Download Resume
              </a>
              <button
                onClick={handleOpenContact}
                className="bg-transparent border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={profile}
              alt="profile"
              className="h-48 md:h-80 rounded-lg hover:rounded-full mt-4 md:mt-0 "
            />
          </div>
        </div>
      </div>

      <About />

      <section id="skills" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl underline text-center mb-6">SKILLS</h2>
          <p className="text-lg text-center mb-4">
            Here are some of the tools and technologies I’ve worked with
            throughout my development journey.
          </p>
          <Skills />
        </div>
      </section>

      <section id="experience" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl underline text-center mb-6">
            EXPERIENCE
          </h2>
          <p className="text-lg text-center mb-4">
            Over the years, I’ve had the privilege of working on diverse
            projects at Reliance Jio, contributing to the success of the company
            by building and maintaining powerful web applications.{" "}
          </p>
          <Experience />
        </div>
      </section>

      <section id="projects" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl underline text-center mb-6">PROJETCS</h2>
          <Projects />
        </div>
      </section>

      <section id="education" className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl underline text-center mb-6">EDUCATION</h1>
          <Education />
        </div>
      </section>

      <Contact isOpen={isContactOpen} onClose={handleCloseContact} />
      <footer className="bg-gray-800 text-gray-100 py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="mb-4">
            © 2024 Nidhi Shetty | Built with ❤️ using React
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Code2voyager"
              className="hover:text-gray-400"
            >
              GitHub
            </a>
            <a
              href="www.linkedin.com/in/nidhis224"
              className="hover:text-gray-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
