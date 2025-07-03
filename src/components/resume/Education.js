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
        <div className="mt-6 lgl:mt-14 w-full h-[71rem] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer (MERN)"
            subTitle="AB Media Co | Remote"
            result="Dec 2024 - Present"
            des="Developed and maintained 3+ scalable web apps using the MERN stack with 99.9% uptime. Implemented responsive design improving user engagement by 25%. Collaborated with cross-functional teams, reducing development time by 15%."
          />

          <ResumeCard
            title="Software Developer (MERN)"
            subTitle="Chawla Tech | Remote"
            result="Jan 2022 - Nov 2024"
            des="Built 5 high-performance web apps and 2 mobile apps. Reduced load time by 20%, mentored 3 junior devs, and ensured code quality via reviews. Delivered smooth user experience with React Native."
          />

          <ResumeCard
            title="Full Stack Developer (Freelance)"
            subTitle="Freelance Projects | Remote"
            result="Sept 2023 - Jan 2024"
            des="Created 4+ interactive websites with modern animations and 3rd-party APIs. Delivered 100% client satisfaction by providing complete end-to-end solutions and technical consulting."
          />

        </div>
      </div>
    </motion.div>
  );
}

export default Education