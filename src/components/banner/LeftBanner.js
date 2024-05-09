import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Web Developer.", "Full Stack Developer.", "Software Web Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-[30px] md:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Prakash</span>
        </h1>
        <h2 className="text-[19px] md:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Welcome to my portfolio! I'm Prakash Bhatt, a passionate full stack developer with a drive to excel in web development. I bring forth a dynamic blend of technical proficiency and creative flair to craft seamless digital experiences. With a solid foundation in both front-end and back-end technologies, I've contributed to a range of projects that highlight my commitment to innovation and user-centered design.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner