import React from 'react';
import { motion } from 'framer-motion';
import { SiAngular, SiReact, SiTypescript, SiHtml5, SiCss3, SiBootstrap, SiMongodb, SiAndroid, SiMysql, SiGit } from 'react-icons/si';
import { FaJava } from "react-icons/fa6";
function Skills() {
  const skillLevels = [
    { icon: <SiAngular size={32} />, level: '80%' },
    { icon: <SiReact size={32} />, level: '80%' },
    { icon: <SiTypescript size={32} />, level: '75%' },
    { icon: <FaJava size={32} />, level: '75%' },
    { icon: <SiHtml5 size={32} />, level: '80%' },
    { icon: <SiCss3 size={32} />, level: '80%' },
    { icon: <SiBootstrap size={32} />, level: '80%' },
    { icon: <SiMongodb size={32} />, level: '60%' },
    { icon: <SiAndroid size={32} />, level: '60%' },
    { icon: <SiMysql size={32} />, level: '67%' },
    { icon: <SiGit size={32} />, level: '60%' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, ease: 'easeInOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: level => ({
      width: level,
      transition: { duration: 1.5, ease: 'easeInOut' },
    }),
  };

  return (
    <motion.div
      id="Skills"
      className="block rounded-lg p-6 shadow-secondary-1 dark:bg-surface-dark dark:text-white hover:transition ease-in-out delay-150 -translate-y-1 hover:scale-110"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl md:text-4xl mb-6 underline font-sans flex flex-col items-center justify-center"
        variants={itemVariants}
      >
        SKILLS
      </motion.h1>

      <motion.div className="flex justify-center items-center mb-4 mt-2">
        <motion.div className="sm:w-2/3 w-full flex flex-col">
          {skillLevels.map((skill, index) => (
            <motion.div key={index} className="sm:mt-2" variants={itemVariants}>
              <motion.div className="sm:font-medium sm:text-lg sm:m-2 flex items-start justify-start">
                {skill.icon}
              </motion.div>
              <div
                className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                role="progressbar"
                aria-valuenow={parseInt(skill.level)}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <motion.div
                  className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                  custom={skill.level}
                  variants={barVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ width: skill.level }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
