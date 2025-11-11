import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full group flex items-start">
      {/* Timeline Line */}
      <div className="w-10 h-full relative flex justify-center">
        <span className="absolute top-6 w-5 h-5  left-[-13px] rounded-full bg-black bg-opacity-60 flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300"></span>
        </span>
        <span className="w-[3px] h-full bgOpacity absolute left-[0px] top-0"></span>
      </div>

      {/* Card Content */}
      <div className="flex-1 bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-5 lgl:p-8 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-3 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-designColor duration-300">
              {title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{subTitle}</p>
          </div>
          <div>
            <p className="px-4 py-1.5 text-designColor bg-black bg-opacity-30 rounded-lg text-sm font-medium shadow-shadowOne text-center">
              {result}
            </p>
          </div>
        </div>

        {des && (
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 duration-300">
            {des}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResumeCard;
