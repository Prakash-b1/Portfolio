import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education Section */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Diploma in Full Stack Development"
            subTitle="Tech Stack Delhi | 2021 - 2022"
            result="Delhi, India"
            des="Specialized in MERN stack (React, Node.js, MongoDB, Express.js). Gained hands-on experience in building scalable web apps, API integration, and cloud deployment."
          />

          <ResumeCard
            title="Bachelor of Arts"
            subTitle="Kumaun University | 2020 - 2023"
            result="Uttarakhand, India"
            des="Developed strong analytical and problem-solving skills. Balanced academic work with freelance web projects during graduation."
          />

          <ResumeCard
            title="Intermediate (PCM + CS)"
            subTitle="RLK Senior Secondary School | 2020"
            result="Uttarakhand, India"
            des="Completed senior secondary education with focus on computer fundamentals, logic building, and web basics."
          />
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer (MERN)"
            subTitle="AB Media Co | Remote"
            result="Dec 2024 - Present"
            des="Developed and maintained production-grade apps for clients like Sunstar Hotel and Pingsy CRM. Integrated APIs (Google Maps, Razorpay, Shopify) and deployed on AWS. Improved UI performance and scalability by 25%."
          />

          <ResumeCard
            title="Software Developer (MERN)"
            subTitle="Chawla Tech | Remote"
            result="Jan 2022 - Nov 2024"
            des="Built and optimized web & mobile apps using React, Node.js, and React Native. Enhanced performance via lazy loading and caching. Mentored junior developers and managed Git workflows for cleaner releases."
          />

          <ResumeCard
            title="Full Stack Developer (Freelance)"
            subTitle="Independent / Remote"
            result="2023 - 2024"
            des="Delivered 4+ freelance projects, including ITEL India & HostelWaleBhaiya. Focused on responsive UI, API integrations, and secure backend logic — achieving 100% client satisfaction."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
