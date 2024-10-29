import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          <ResumeCard
            title="Full Stack Developer Diploma"
            subTitle="Tech Stack Delhi"
            result="Delhi"
            des=""
          />
          <ResumeCard
            title="HUMANITIES"
            subTitle="KUMAUN UNIVERSITY "
            result="UTTARAKHAND (2020-2023)"
            des=""
          />
          <ResumeCard
            title="Intermediate"
            subTitle="RLK SENIOR SECONDARY SCHOOL"
            result="UTTARAKHAND (2020)"
            des=""
          />


        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          <ResumeCard
            title="Full Stack Software developer"
            subTitle="Chawla tech"
            result="Remote"
            des="Software developer making websites or softwares for company and its projects in backend or frontend. Backend typescript, nodejs, mongodb and in frontend tailwind, react and working in api's . managing the team and handling errors"
          />
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Orangus digital pvt ltd"
            result="Delhi"
            des="Proficient in front-end development (HTML, CSS, JavaScript).
            Experienced with modern frameworks like React, Angular, or Vue.js.
            Skilled in back-end development using languages like Python, React, Django, or Node.js.
            Familiar with databases and integrating them into web applications.
            Strong understanding of HTML, CSS, and JavaScript for building responsive and user-friendly web interfaces.
            "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education