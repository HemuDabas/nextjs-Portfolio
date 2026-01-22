
"use client";
import AboutPage from "./components/main/about";

import Portfolio from "./components/main/Portfolio";
import { motion } from "framer-motion";
import Skills from "./components/sub/skills";



export default function HomePage() {
    
  const meteors = Array.from({ length: 10 });
  return (
   <>
    <main className="relative flex min-h-screen  w-full items-center justify-center">

      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover inset-0"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src="https://www.pexels.com/download/video/4709300/" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
        <div className="relative z-10 max-w-3xl text-center px-6">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Hi, I’m Kuldeep Dabas
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-lg md:text-xl text-gray-200"
          >
            A passionate <span className="text-orange-400 font-semibold">Frontend Developer</span>  
            building responsive, modern, and interactive web applications.
          </motion.p>

          {/* Key Skills */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-4 text-gray-300"
          >
            <span className="font-medium text-white">Tech Stack:</span>  HTML | CSS |JavaScript| Styling & UI | React.js | Next.js | Tailwind CSS
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-black border-[1px] border-white text-white px-6 py-3  font-medium hover:bg-orange-400 transition"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-transparent border border-white text-white px-6 py-3  font-medium hover:bg-white hover:text-black transition"
            >
             Know More
            </button>
          </motion.div>

        </div>
      </div>
    </main>

   <AboutPage/>
 <Skills/>
  <Portfolio/>
   
   </>

    
  );
}