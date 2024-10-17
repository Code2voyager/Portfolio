import React, { useState } from "react";
import { FaReact, FaNodeJs, FaAngular, FaDatabase, FaBootstrap, FaExternalLinkAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-commerce Store",
    description: "A full-stack e-commerce app for online shopping.",
    link: "https://github.com/Code2voyager/React-Watch-ECommerce",
    techStack: ["Node.js", "React", "MongoDB", "Bootstrap"],
  },
  {
    id: 2,
    title: " Capestone(Healthcare Management System)",
    description:
      "A web-based platform for managing patient records, appointments, and healthcare workflows.",
    link: "https://github.com/Code2voyager/Capestone-project",
    techStack: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Weather App",
    description: "A simple weather app using OpenWeather API.",
    link: "https://github.com/Code2voyager/React_WeatherApp",
    techStack: ["React", "API", "Bootstrap"],
  },
  {
    id: 4,
    title: "E-commerce Platform UI",
    description:
      "A front-end UI for an e-commerce platform, built using Angular, with responsive design and shopping cart features.",
    link: "https://github.com/Code2voyager/Angular-Ecommerce",
    techStack: ["Angular", "TypeScript", "Bootstrap"],
  },
];

const getTechIcon = (tech) => {
  switch (tech) {
    case "React":
      return <FaReact size={24} className="text-blue-500" />;
    case "Node.js":
      return <FaNodeJs size={24} className="text-green-500" />;
    case "Angular":
      return <FaAngular size={24} className="text-pink-600" />;
    case "MongoDB":
      return <FaDatabase size={24} className="text-green-600" />;
    case "Bootstrap":
      return <FaBootstrap size={24} className="text-purple-600" />;
    case "TypeScript":
      return <SiTypescript size={24} className="text-blue-600" />;
    case "API":
      return <TbApi size={24} className="text-blue-600" />;
    default:
      return null;
  }
};

function Projects() {
  const [flipped, setFlipped] = useState({});

  const handleMouseEnter = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: true }));
  };
  const handleMouseLeave = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <>
      <h1 id="Projects" className=" flex items-center justify-center text-3xl md:text-4xl underline font-sans">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 lg:p-12 ">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative w-full h-64"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={() => handleMouseLeave(project.id)}
            style={{
              perspective: 1000,
              cursor: "pointer",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{
                rotateY: flipped[project.id] ? 180 : 0,
              }}
              transition={{ duration: 0.6 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front card */}
              <motion.div
                className="absolute inset-0 bg-white rounded-lg shadow-lg p-6"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="flex items-center text-sm font-medium text-gray-700 bg-gray-100 rounded-full px-3 py-1">
                      {getTechIcon(tech)} <span className="ml-2">{tech}</span>
                    </span>
                  ))}
                </div>

               
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-blue-600 font-bold"
                >
                  View Project <FaExternalLinkAlt className="ml-2" />
                </a>
              </motion.div>

              {/* Back card */}
              <motion.div
                className="absolute inset-0 bg-blue-600 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <p className="text-lg text-center">{project.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Projects;
