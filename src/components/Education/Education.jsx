import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAndroid,
  FaJava,
} from "react-icons/fa";
import { SiC, SiJavascript } from "react-icons/si";

function Education() {
  const educationDetails = [
    {
      degree: "Postgraduate Degree in Web Development",
      institution: "Conestoga College, Canada",
      year: "2024",
      concentrations: ["Android", "JavaScript", "React JS", "Node.js", "Java"],
    },
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "University of Mumbai, India",
      year: "2019",
      concentrations: ["RDMS", "Java", "C"],
    },
  ];

  const getTechIcon = (concentration) => {
    switch (concentration) {
      case "React JS":
        return <FaReact size={20} className="text-blue-500" />;
      case "Node.js":
        return <FaNodeJs size={20} className="text-green-500" />;
      case "RDMS":
        return <FaDatabase size={20} className="text-green-600" />;
      case "JavaScript":
        return <SiJavascript size={20} className="text-blue-600" />;
      case "Android":
        return <FaAndroid size={20} className="text-green-600" />;
      case "Java":
        return <FaJava size={20} className="text-red-700" />;
      case "C":
        return <SiC size={20} className="text-red-700" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 mb-5 p-4 md:grid-cols-2">
      {educationDetails.map((edu, index) => (
        <figure
          key={index}
          className="flex flex-col items-center justify-center p-6 border-2 border-black rounded-lg transition-transform transform hover:scale-105 dark:bg-gray-700 dark:border-gray-600"
        >
          <blockquote className="max-w-xs text-center text-gray-700 dark:text-gray-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {edu.degree}
            </h3>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {edu.institution}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {edu.year}
            </p>
            {edu.concentrations.length > 0 && (
              <div className="mt-2">
                <strong className="text-md text-gray-800 dark:text-gray-200">
                  Concentrations:
                </strong>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-1">
                  {edu.concentrations.map((concentration, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center mt-1"
                    >
                      {getTechIcon(concentration)}
                      <span className="ml-2">{concentration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </blockquote>
        </figure>
      ))}
    </div>
  );
}

export default Education;
