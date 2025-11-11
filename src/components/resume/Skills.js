import React from "react";
import { motion } from "framer-motion";

const skillsData = {
  frontend: [
    { name: "React / Next.js", width: "95%" },
    { name: "TypeScript / JavaScript (ES6+)", width: "90%" },
    { name: "HTML5 / CSS3", width: "95%" },
    { name: "Tailwind CSS / Framer Motion", width: "90%" },
    { name: "Redux / State Management", width: "85%" },
  ],
  backend: [
    { name: "Node.js / Express.js", width: "90%" },
    { name: "MongoDB / MySQL", width: "90%" },
    { name: "REST & GraphQL APIs", width: "85%" },
    { name: "Socket.IO (Real-Time Apps)", width: "80%" },
    { name: "AWS (Lambda, S3, EC2)", width: "75%" },
  ],
  tools: [
    { name: "Git / GitHub / GitLab", width: "95%" },
    { name: "Agile / CI-CD / Jira", width: "85%" },
    { name: "VS Code / Postman / Figma", width: "90%" },
  ],
};

const SkillBar = ({ skill }) => (
  <div className="overflow-x-hidden">
    <p className="text-sm uppercase font-medium">{skill.name}</p>
    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
      <motion.span
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`relative h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
        style={{ width: skill.width }}
      >
        <span className="absolute -top-7 right-0 text-xs text-gray-300">{skill.width}</span>
      </motion.span>
    </span>
  </div>
);

const Skills = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
  >
    {/* Frontend */}
    <div className="w-full lgl:w-1/3">
      <div className="py-8 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px] uppercase">Expertise</p>
        <h2 className="text-3xl md:text-4xl font-bold">Frontend Skills</h2>
      </div>
      <div className="flex flex-col gap-6">
        {skillsData.frontend.map((skill, i) => (
          <SkillBar key={i} skill={skill} />
        ))}
      </div>
    </div>

    {/* Backend */}
    <div className="w-full lgl:w-1/3">
      <div className="py-8 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px] uppercase">Expertise</p>
        <h2 className="text-3xl md:text-4xl font-bold">Backend Skills</h2>
      </div>
      <div className="flex flex-col gap-6">
        {skillsData.backend.map((skill, i) => (
          <SkillBar key={i} skill={skill} />
        ))}
      </div>
    </div>

    {/* Tools */}
    <div className="w-full lgl:w-1/3">
      <div className="py-8 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px] uppercase">Tools & Workflow</p>
        <h2 className="text-3xl md:text-4xl font-bold">Development Tools</h2>
      </div>
      <div className="flex flex-col gap-6">
        {skillsData.tools.map((skill, i) => (
          <SkillBar key={i} skill={skill} />
        ))}
      </div>
    </div>
  </motion.div>
);

export default Skills;
