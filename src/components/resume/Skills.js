import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Front-End Skills */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Front End Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { name: 'React / Redux', width: '90%' },
            { name: 'HTML 5', width: '95%' },
            { name: 'CSS3', width: '80%' },
            { name: 'Tailwind', width: '90%' },
            { name: 'JavaScript', width: '75%' },
          ].map((skill, i) => (
            <div key={i} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                >
                  <span className="absolute -top-7 right-0">{skill.width}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Back-End Skills */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Back-End Skills</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          {[
            { name: 'TypeScript', width: '90%' },
            { name: 'Node Js', width: '80%' },
            { name: 'Mongo DB', width: '90%' },
            { name: 'SQL', width: '90%' },
            { name: 'Express Js', width: '95%' },
            { name: 'AWS', width: '80%' },
            { name: 'Git / GitHub', width: '95%' },
          ].map((skill, i) => (
            <div key={i} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                >
                  <span className="absolute -top-7 right-0">{skill.width}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
