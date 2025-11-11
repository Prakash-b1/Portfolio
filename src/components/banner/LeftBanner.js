import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "MERN Stack Developer.",
      "Full Stack Developer (React | Node | Next.js).",
      "Building Scalable Web & Real-Time Apps.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal text-designColor">
          WELCOME TO MY PORTFOLIO
        </h4>
        <h1 className="text-[30px] md:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Prakash Bhatt</span>
        </h1>
        <h2 className="text-[19px] md:text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-gray-300">
          I'm a <span className="text-designColor font-semibold">Full-Stack Developer</span> with 3+ years of experience
          crafting web and mobile applications using{" "}
          <span className="font-semibold">React, Next.js, Node.js, and TypeScript</span>. Passionate about clean UI,
          real-time features, and performance optimization.
          <br />
          Skilled in{" "}
          <span className="font-semibold">
            AWS, REST/GraphQL APIs, and payment integrations
          </span>{" "}
          like Razorpay and Shopify. Always open to meaningful collaborations, freelance projects, or full-time
          opportunities.
        </p>

        {/* ✅ Download Resume Button */}
        <a
          href="/Prakash_Bhatt_FullStack_Developer.pdf"
          download="Prakash_Bhatt_FullStack_Developer.pdf"
          className="mt-4 w-fit px-6 py-3 rounded-lg bg-[#ff014f] text-white font-medium tracking-wide hover:scale-105 transition-transform duration-300 shadow-md"
        >
          📄 Download Resume
        </a>
      </div>

      {/* Media Section */}
      <Media />
    </div>
  );
};

export default LeftBanner;
