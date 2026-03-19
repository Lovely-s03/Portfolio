import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const techStack = [
  { icon: <FaHtml5 />, name: "HTML5", color: "#e34c26" },
  { icon: <FaCss3 />, name: "CSS3", color: "#1572B6" },
  { icon: <FaJs />, name: "JavaScript", color: "#f7df1e" },
  { icon: <FaReact />, name: "React", color: "#61DBFB" },
  {
    icon: (
      <img
        src="https://www.svgrepo.com/show/374118/tailwind.svg"
        alt="Tailwind"
        className="w-4 h-4"
      />
    ),
    name: "Tailwind",
    color: "#38BDF8",
  },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#ccc" },
];

const experiences = [
  {
    company: "Harifly Technologies Pvt. Ltd.",
    role: "Frontend Developer",
    duration: "Sep 2025 – Present",
    points: [
       "Developing scalable UI using React js",
     "Building SEO-friendly and optimized web pages",
     "API integration and dynamic rendering",
     "Working on live client projects",
    ],
  },
  {
    company: "Kushel Digi Solution",
    role: "Frontend Developer Intern",
    duration: "Dec 2024 - July 2025",
    points: [
     "Developed responsive UIs using React & Tailwind",
    "Building SEO-friendly and optimized web pages",
    "Worked with Next.js for fast rendering",
   "Collaborated with backend team for API integration",
    ],
  },
];

const Experience = () => {
  return (
    <section  id="Experience" className=" scroll-mt-24 bg-gray-800 text-white px-6 md:px-20 py-20">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-14">
        Experience
      </h1>

      {/* Experience Row */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition duration-300"
          >
            <h2 className="text-xl font-semibold">{exp.role}</h2>

            <p className="text-sm text-gray-400 mt-1">
              {exp.company}
            </p>

            <p className="text-sm text-gray-500 mb-4">
              {exp.duration}
            </p>

            <ul className="space-y-2 text-md text-gray-300 list-disc pl-5">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-center mt-20 mb-8">
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-2 bg-[#111] border border-gray-800 rounded-md hover:border-gray-600 transition"
          >
            <span style={{ color: tech.color }}>
              {tech.icon}
            </span>
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Experience;