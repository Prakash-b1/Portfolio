import React from 'react'
import { FaLinkedinIn, FaReact, FaGithub, FaPython } from "react-icons/fa";
import { SiTailwindcss,  SiTypescript } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a href='https://github.com/Prakash-b1' className="bannerIcon">
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/prakash-bhatt-5891b0229/' className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaPython />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiTypescript />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media