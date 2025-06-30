import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white text-center font-bold">Projects</h1>
      <div className="py-12 xl:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8">
     
        <ProjectCard
          title="Ecommerce Website"
          main="Built a fully responsive e-commerce website using React.js and FakeStore API, featuring product filtering, cart functionality, and detailed product pages. Integrated Clerk for authentication, used Slick Carousel, Toastify, and Lottie for enhanced UX, and followed a modular structure with React Hooks for clean, maintainable code."
            link="https://ecommerce-website-vok3.vercel.app/"
        />
        <ProjectCard
          title="HRMS"
          main="Developed an HR management system with features like payroll, attendance, performance tracking, role-based access, real-time updates, and reporting. Built responsive UI with React, integrated backend APIs, designed database schema, implemented JWT-based authentication, and optimized overall system performance."
          link="https://hrms-2025-tan.vercel.app/login"
        />
           <ProjectCard
          title="Kushel digi Website"
          main="Contributed to Kushel Digi's official website, focusing on layout, design consistency, and mobile responsiveness. Improved UI/UX with clean, interactive components and collaborated in a real-time development environment."
          link="https://www.kusheldigi.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
