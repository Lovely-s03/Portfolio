

import React from "react";
import avatarImg from "../../assets/avatar.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className=" flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-10  text-white mt-[90px] xl-mt-20">
      
      {/* LEFT CONTENT */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight whitespace-nowrap">
          <TextChange />
        </h1>

        <p className="mt-6 text-gray-300 text-sm md:text-xl max-w-xl">
          Frontend Developer passionate about clean UI, smooth UX, and modern web tech. 
          Skilled in React.js, Tailwind, and building real-world responsive apps.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          
          <a href="#Footer">
            <button className="bg-purple-700 px-6 py-3 rounded-full font-semibold text-sm md:text-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
              Contact Me
            </button>
          </a>

  

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <div className="relative">
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-2xl opacity-30 rounded-full"></div>

          <img
            className="relative w-[250px] md:w-[350px] lg:w-[400px] rounded-full border-4 border-gray-700 shadow-2xl hover:scale-105 transition duration-500"
            src={avatarImg}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
