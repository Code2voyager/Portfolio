import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Experience() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: window.innerWidth < 768 ? 0.2 : 1.0,
      }
    );
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <h1 className="text-3xl md:text-4xl mb-6 underline font-sans flex flex-col items-center justify-center">
        EXPERIENCE
      </h1>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{
          duration: window.innerWidth < 768 ? 0.5 : 0.8,
          delay: window.innerWidth < 768 ? 0 : 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div
          id="Exp"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-3 p-4 mx-auto bg-transparent border-2 border-blue-950 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700"
        >
          <h5 className="mb-2 flex flex-col items-center text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Reliance Digital Jio Pvt Ltd
          </h5>
          <ul className="mb-3 list-none pl-0">
            {[
              "Worked as a software developer on developing the next generation integration platform for internal applications. Integrated data from diverse back-end services and databases using technologies such as Angular, Java, and software tools like Visual Studio Code and Spring Boot.",
              "Engineered a high-performing website to monitor the approval system using Angular and TypeScript. Developed administrative websites utilizing Liferay technology.",
              "Managed and monitored user counts for a government Android application through Kibana, Microsoft Word, and Excel.",
              "Configured servers for government platform Android applications and websites and formulated SQL queries for database maintenance. Updated old code bases to modern development standards, improving functionality.",
              "Contributed to a positive team environment through effective communication, problem-solving, and collaboration skills. Discussed issues with team members to provide resolution and apply best practices.",
            ].map((item, index) => (
              <li key={index} className="flex items-start mb-3">
                <i
                  className="fa fa-briefcase text-blue-900 mt-1 mr-2"
                  aria-hidden="true"
                ></i>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      <br />
    </>
  );
}

export default Experience;
