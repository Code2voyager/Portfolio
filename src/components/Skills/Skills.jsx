import React from 'react';

function Skills() {
  return (
    <>
      <div id="Skills" className="block rounded-lg p-6 shadow-secondary-1  dark:bg-surface-dark dark:text-white hover:transition ease-in-out delay-150 -translate-y-1 hover:scale-110 ">
        <h1 className="text-3xl md:text-4xl mb-6 underline font-sans flex flex-col items-center justify-center">
          SKILLS
        </h1>
        <div className="flex justify-center items-center mb-4 mt-2">
          <div className="sm:w-2/3 w-full flex flex-col">
            <div className="sm:mt-1">
              <p className="sm:font-medium sm:text-lg sm:m-2">ANGULAR</p>
              <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-4/5"></div>
              </div>
            </div>
            <div className="sm:mt-1">
              <p className="sm:font-medium sm:text-lg sm:m-2">REACT</p>
              <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-4/5"></div>
              </div>
            </div>
            <div className="sm:mt-2">
              <p className="sm:font-medium sm:text-lg sm:m-2">TYPESCRIPT</p>
              <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-3/4"></div>
              </div>
            </div>
            <div className="sm:mt-2">
              <p className="sm:font-medium sm:text-lg sm:m-2">JAVA</p>
              <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-3/4"></div>
              </div>
            </div>
            <div className="sm:mt-2">
              <p className="sm:font-medium sm:text-lg sm:m-2">HTML5</p>
              <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-4/5"></div>
              </div>
            </div>
            <div className="sm:mt-2">
              <p className="sm:font-medium sm:text-lg sm:m-2">CSS3</p>
              <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-4/5"></div>
              </div>
            </div>
            <div className="sm:mt-2">
              <p className="sm:font-medium sm:text-lg sm:m-2">BOOTSTRAP</p>
              <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-4/5"></div>
              </div>
            </div>
            <div className="sm:mt-2">
              <p className="sm:font-medium sm:text-lg sm:m-2">MONGO DB</p>
              <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-3/5"></div>
              </div>
            </div>
            <div className="sm:mt-2">
              <p className="sm:font-medium sm:text-lg sm:m-2">ANDROID</p>
              <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-3/5"></div>
              </div>
            </div>
            <div className="sm:mt-2">
              <p className="sm:font-medium sm:text-lg sm:m-2">SQL</p>
              <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-8/12"></div>
              </div>
            </div>
            <div className="sm:mt-2">
              <p className="sm:font-medium sm:text-lg sm:m-2">GIT</p>
              <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-3/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
