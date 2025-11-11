import React from "react";
import { FaGlobe } from "react-icons/fa";
import Title from "../layouts/Title";
import {
  project1,
  project10,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
} from "../../assets/index";

const projects = [
  {
    id: 1,
    title: "Pingsy CRM — WhatsApp Chatbot & CRM",
    href: "https://pingsy.in/",
    img: project1,
    desc:
      "Real-time WhatsApp CRM built with React, Node.js, Meta APIs and Socket.IO — scalable messaging & automation.",
  },
  {
    id: 2,
    title: "Sunstar Hotel — Booking Platform",
    href: "https://hotelsunstargroup.com/",
    img: project2,
    desc:
      "Hotel booking platform with map search and Razorpay payments. MERN + AWS for reliability.",
  },
  {
    id: 3,
    title: "Roseate Farms — E-commerce Platform",
    href: "https://roseatefarms.com/",
    img: project3,
    desc:
      "E-commerce platform using MERN, Redux and GraphQL — focused on product management and checkout flow.",
  },
  {
    id: 4,
    title: "ITEL India — Client Website",
    href: "https://itel-india.com/",
    img: project4,
    desc:
      "Client site with JWT auth and Framer Motion animations. Emphasis on secure auth and performance.",
  },
  {
    id: 5,
    title: "Chawla Tech — Company Website & Apps",
    href: "https://www.chawlaispat.co.in/",
    img: project5,
    desc:
      "Corporate website and cross-platform React Native apps with performance optimizations.",
  },
  {
    id: 6,
    title: "Orebi — E-commerce Demo (Clone)",
    href: "https://orebi-clone.netlify.app/",
    img: project6,
    desc:
      "Feature-complete e-commerce demo showcasing product listings, cart and payment flows.",
  },
  {
    id: 7,
    title: "HostelWaleBhaiya — Hostel Booking / Info",
    href: "https://hostelwalebhaiya.in/",
    img: project7, // replace with dedicated image if available
    desc:
      "Live client project for hostel listings, contact and booking information.",
  },
  // secondary / smaller demos (kept last)
  {
    id: 8,
    title: "Gym — Landing Page",
    href: "https://apkiapnigym.netlify.app/",
    img: project8,
    desc: "Responsive landing page built with Vite, React and Tailwind.",
  },
  {
    id: 9,
    title: "Food Delivery — Cart Demo",
    href: "https://apkapnabhojnalay.netlify.app/",
    img: project9,
    desc: "Small food-ordering app demonstrating add/remove cart and responsive UI.",
  },
  {
    id: 10,
    title: "Hotel Booking — Demo",
    href: "https://hotelbookingss.netlify.app/",
    img: project10,
    desc: "Basic booking demo to showcase booking flows and UI patterns.",
  },
];

const Project2 = () => {
  return (
    <section id="projects" className="w-full py-20 border-b border-black">
      <div className="flex justify-center items-center text-center mb-8">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projects.map((p) => (
          <article
            key={p.id}
            className="flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] rounded-lg p-4 shadow-shadowOne group hover:from-gray-900 transition-colors duration-300"
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="mt-5 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <h3 className="text-base uppercase text-designColor font-medium">
                  {p.title}
                </h3>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.title}`}
                  className="w-10 h-10 rounded-full bg-black inline-flex items-center justify-center text-gray-400 hover:text-designColor transition-colors duration-200"
                >
                  <FaGlobe />
                </a>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project2;
