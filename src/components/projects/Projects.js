
import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import Title from '../layouts/Title'
import { project1, project2, project3, project4, project5, project6, project8 } from "../../assets/index";

const Project2 = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={project1}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Oribo website Clone                                </h3>
                <div className="flex gap-2">
                  <a href='https://orebi-clone.netlify.app/' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </a>
                  <a href='https://github.com/Prakash-b1/oribo-website-clone' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Using full react node and all logics of frontend backend added cart and remove front cart pagination,toast etc
              </p>
            </div>
          </div>
        </div>

        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={project2}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Tesla Landing Page
                </h3>
                <div className="flex gap-2">
                  <a href='https://tesla-react-clones.netlify.app/' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </a>
                  <a href='https://github.com/Prakash-b1/tesla-clone-react' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Clone the tesla website landing page with the help of reactjs and using the libraries                             </p>
            </div>
          </div>
        </div>


        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={project3}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Gym webiste lnding page                              </h3>
                <div className="flex gap-2">
                  <a href='https://apkiapnigym.netlify.app/' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </a>
                  <a href='https://github.com/Prakash-b1/Gym-Webssite' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Making the gym website landing page usng the vite and tailwind css using tsx in react                            </p>
            </div>
          </div>
        </div>


        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={project4}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Added to cart                                </h3>
                <div className="flex gap-2">
                  <a href='https://apkapnabhojnalay.netlify.app/' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </a>
                  <a href='https://github.com/Prakash-b1/Addedto-cart' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Making a small food delivery web appp for ehich we can add or remove the food items from the cart                             </p>
            </div>
          </div>
        </div>


        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={project5}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Flipkart Clone                             </h3>
                <div className="flex gap-2">
                  <a href='https://prakash-b1.github.io/flipkart-clone/' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </a>
                  <a href='https://github.com/Prakash-b1/flipkart-clone' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Using the basics logic of html css js and bootstarp to make the flipkart clone landing page                             </p>
            </div>
          </div>
        </div>

        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={project6}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Hotel Booking                               </h3>
                <div className="flex gap-2">
                  <a href='https://hotelbookingss.netlify.app/' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </a>
                  <a href='https://github.com/Prakash-b1/hotel' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Making a hotel booking webiste using the html  css and js                            </p>
            </div>
          </div>
        </div>


        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={project8}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Netflix Clone                                </h3>
                <div className="flex gap-2">
                  <a href='https://netflixxcloness.netlify.app/' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaGlobe />
                  </a>
                  <a href='https://github.com/Prakash-b1/Netflix_clone' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <BsGithub />
                  </a>
                </div>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Making a Netflix webiste using the htmlcss and js                            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project2