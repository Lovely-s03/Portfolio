import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const techStack = [

  { icon: <FaHtml5 size={30} color="#e34c26" />, color: "#e34c26", name: "HTML5" },
  { icon: <FaCss3 size={30} color="#1572B6" />, color: "#1572B6", name: "CSS3" },
  { icon: <FaJs size={30} color="#f7df1e" />, color: "#f7df1e", name: "JavaScript" },
  { icon: <FaReact size={30} color="#61DBFB" />, color: "#61DBFB", name: "React" }
,
  {
    icon: (
      <img
        src="https://www.svgrepo.com/show/374118/tailwind.svg"
        alt="Tailwind"
        className="w-7 h-7"
      />
    ),
    color: "#38BDF8",
    name: "Tailwind",
  },
  { icon: <SiNextdotjs size={30} />, color: "#ffffff", name: "Next.js" },
];

const Experience = () => {
  return (
    <div
      id="Experience"
      className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 md:px-20 py-16"
    >
      <h1 className="text-4xl text-white font-bold text-center mb-12">My Experience</h1>

      {/* Experience Card */}
      <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-10 shadow-lg transition-all duration-300 hover:shadow-2xl mx-auto max-w-4xl mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1750049645/Kds_logo_1_2_piufdc.svg"
            alt="Kushel Logo"
            className="w-16 h-16 object-contain"
          />
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Frontend Developer | Kushel Digi Solution
            </h2>
            <p className="text-sm text-gray-300 mt-1">Internship | 6 Months</p>
          </div>
        </div>
        <ul className="mt-6 text-gray-300 text-sm md:text-base list-disc pl-5 space-y-2">
          <li>Developed responsive UIs using React and Tailwind CSS</li>
          <li>Worked on Next.js for building fast, SEO-friendly pages</li>
          <li>Collaborated with backend team to integrate APIs</li>
        </ul>
      </div>

      {/* Tech Stack Grid */}
      <h3 className="text-white text-2xl font-semibold text-center mb-6">Tech Stack</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div
              className="p-4 rounded-xl shadow-xl"
              style={{
                background: "#1f1f1f",
                boxShadow: `0 0 15px ${tech.color}`,
              }}
            >
              {tech.icon}
            </div>
            <p className="mt-2 text-white text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
