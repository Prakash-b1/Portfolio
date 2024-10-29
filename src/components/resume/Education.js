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
            title="Full Stack Developer Intern"
            subTitle="Orangus digital pvt ltd"
            result="Delhi"
            des="Built a strong foundation as a Full Stack Developer at Orangus Pvt Ltd, a 6-month contract role where
I gained extensive hands-on experience in the MERN stack. Worked closely with teams on end-toend React.js projects, refining UI/UX design skills and implementing seamless, responsive interfaces.
Enhanced skills in developing full-stack applications, optimizing code for performance, and collaborating
effectively ,Built and maintained web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) to create seamless, responsive user experiences.
 Worked on improving UI/UX design elements to responsive design across multiple
devices, enhancing overall user engagement. Actively participated in team meetings, code reviews, and
feedback sessions, aligning development with project goals and client requirements. Focused on optimizing codebase for better performance,
reducing load times, and enhancing scalability to handle growing user demand.
            "
          />

          <ResumeCard
            title="Full Stack Software developer"
            subTitle="Chawla tech"
            result="Remote"
            des="MERN Stack Developer with a solid background in full-stack web and mobile application development,
currently thriving in a dynamic role at Chawla Tech. Successfully developed multiple web and mobile
applications, contributing to both frontend and backend functionality. guiding projects from concept to
completion while troubleshooting, optimizing, and refining code. Known for a collaborative approach and
a commitment to delivering . Built 5 web applications and 2 mobile apps in React Native, focusing
on performance, usability, and client satisfaction. Engaged in full-stack responsibilities, creating intuitive UIs and
developing backend logic to support seamless user experiences. Proactively identified and fixed bugs, improving the stability and
performance of deployed applications.

"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education