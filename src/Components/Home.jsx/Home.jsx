import React from "react";
import { motion } from "framer-motion";
import avatarImg from "../../assets/avatar.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-10 text-white overflow-hidden">
      
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 text-center lg:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          <TextChange />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 text-gray-300 text-sm md:text-xl max-w-xl"
        >
          Frontend Developer passionate about clean UI, smooth UX, and
          modern web tech. Skilled in React.js, Tailwind, and building
          real-world responsive apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8"
        >
          <a href="#Footer">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px #9333ea",
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-purple-700 px-6 py-3 rounded-full font-semibold text-sm md:text-lg"
            >
              Contact Me
            </motion.button>
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 flex justify-center mb-10 lg:mb-0"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-3xl opacity-30 rounded-full"></div>

          <motion.img
            whileHover={{ scale: 1.05 }}
            className="relative w-[250px] md:w-[350px] lg:w-[400px] rounded-full border-4 border-gray-700 shadow-2xl"
            src={avatarImg}
            alt="profile"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;