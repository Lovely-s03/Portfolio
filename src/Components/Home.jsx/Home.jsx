import React from "react";
import avatarImg from "../../assets/avatar.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col lg:flex-row w-full justify-between items-start p-10 lg:p-20">
      <div className="lg:w-2/4 lg:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl pt-8 tracking-tight ">
      Frontend Developer passionate about clean UI, smooth UX, and modern web tech. Skilled in React.js, Tailwind, and building real-world responsive apps.
        </p>
       <a href="#Footer">
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
        </a>
      </div>
      <div>
        <img className="h-auto w-full lg:w-[400px] mt-5 lg:mt-0" src={avatarImg} alt=""/>
      </div>
    </div>
  );
};

export default Home;
