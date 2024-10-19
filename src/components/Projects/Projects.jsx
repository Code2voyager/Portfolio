import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaDatabase,
  FaBootstrap,
  FaExternalLinkAlt,
  FaAndroid,
  FaJava,
} from "react-icons/fa";
import { SiTypescript, SiFirebase } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";

const mobile = require("../../assets/4781.jpg");
const ecommerce1 = require("../../assets/4910241.jpg");
const ecommerce2 = require("../../assets/4934538.jpg");

const projects = [
  {
    id: 1,
    title: "E-commerce Store",
    description:
      "The E-commerce Store is a full-stack application for online shopping. Users can browse products, manage their cart, and checkout securely. Built with React and Node.js, it uses RESTful APIs for dynamic data.",
    caption: "A full-stack e-commerce app for online shopping.",
    link: "https://github.com/Code2voyager/React-Watch-ECommerce",
    techStack: ["Node.js", "React", "MongoDB", "Bootstrap"],
    image: ecommerce1,
  },
  {
    id: 2,
    title: "E-commerce Platform UI",
    caption:
      "A front-end UI for an e-commerce platform, built using Angular, with responsive design and shopping cart features.",
    description:
      "A dynamic front-end application for online shopping built with Angular and TypeScript. It features a responsive design that allows users to browse products, manage their cart, and enjoy a seamless checkout experience.",
    link: "https://github.com/Code2voyager/Angular-Ecommerce",
    techStack: ["Angular", "TypeScript", "Bootstrap"],
    image: ecommerce2,
  },
  {
    id: 3,
    title: "Android Ecommerce",
    caption:
      "A feature-rich front-end UI for an e-commerce platform built with Android, Java, and Firebase. It offers a seamless shopping experience, allowing users to browse products, manage their cart, and make purchases with real-time data synchronization.",
    description:
      "The E-commerce Platform UI is a dynamic front-end application that showcases an engaging user interface for online shopping. Developed using Angular and TypeScript, this project emphasizes a responsive design that enhances user experience.",
    link: "https://github.com/Code2voyager/Android-Ecommerce",
    techStack: ["Android", "Java", "Firebase"],
    image: mobile,
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
    case "Android":
      return <FaAndroid size={24} className="text-green-600" />;
    case "Java":
      return <FaJava size={24} className="text-red-700" />;
    case "Firebase":
      return <SiFirebase size={24} className="text-yellow-500" />;
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
      <div id="Projects" className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:p-12 mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative w-full flex justify-center items-center"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
              style={{ perspective: 1000, cursor: "pointer" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <motion.div
                className="relative w-full"
                animate={{ rotateY: flipped[project.id] ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div style={{ backfaceVisibility: "hidden" }}>
                  <div className="max-w-sm rounded-lg shadow-lg bg-white border border-gray-200 backdrop-blur-md transform transition-transform duration-500 hover:scale-105">
                    <div
                      className="h-48 bg-cover bg-center rounded-t-lg"
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>
                    <div className="px-6 py-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {project.title}
                      </h3>
                      <div className="px-6 pt-4 pb-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                          >
                            {getTechIcon(tech)}{" "}
                            <span className="ml-2">{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <p className="text-lg text-center">{project.description}</p>
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 font-bold"
                    >
                      Explore more on GitHub{" "}
                      <FaExternalLinkAlt className="ml-2" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
