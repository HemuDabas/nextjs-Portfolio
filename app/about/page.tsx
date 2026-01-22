"use client";

import Card from "@/app/components/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section id="about" className="bg-white py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-16"
        >
          About Me
        </motion.h1>

        {/* Intro Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  I&apos;m a Frontend Developer
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  I&apos;m a passionate Frontend Developer specializing in building
                  visually appealing, user-friendly, and responsive web interfaces.
                  My primary focus is on crafting seamless UI/UX experiences using
                  <span className="font-medium text-black">
                    {" "}React.js, Next.js, Tailwind CSS, and modern HTML
                  </span>.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  I enjoy transforming complex ideas into elegant, intuitive designs
                  and scalable frontend architectures. I strongly believe that great
                  design combined with clean code creates impactful digital products.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  UI / UX & Frontend Expertise
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  I specialize in managing complete UI/UX workflows — from layout
                  planning and wireframing to final responsive implementation.
                  My approach ensures consistency, accessibility, and performance
                  across all devices.
                </p>

                <ul className="mt-5 space-y-2 text-gray-700 list-disc list-inside">
                  <li>Responsive & mobile-first design</li>
                  <li>Component-based UI architecture</li>
                  <li>Clean Tailwind CSS utility styling</li>
                  <li>Optimized Next.js rendering & routing</li>
                  <li>User-focused design principles</li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* ----------------------------- User Image Section ----------------------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center w-full my-10 bg-black py-6 px-4 rounded-lg shadow-lg"
        >
          {/* Left Line */}
          <div className="hidden md:block flex-1 border-b-4 border-white">
            <hr className="w-full border-white h-1 rounded-r-2xl" />
          </div>

          {/* User Image */}
          <div className="flex justify-center items-center my-4 md:my-0 mx-6">
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition-transform duration-500">
              <Image
                src="/img2.webp"
                alt="User Profile Image"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Line */}
          <div className="hidden md:block flex-1 border-b-4 border-white">
            <hr className="w-full border-white h-1 rounded-l-2xl" />
          </div>
        </motion.div>
        {/* ----------------------------- User Image Section ----------------------------- */}

        {/* Experience & Qualification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Professional Experience
                </h2>

                <h3 className="text-lg font-semibold text-gray-700">
                  Frontend Developer
                </h3>
                <p className="text-gray-600 mb-2">
                  Kesya International Pvt. Ltd. — 1 Year
                </p>

                <p className="text-gray-700 leading-relaxed">
                  At Kesya International Pvt. Ltd., I worked as a Frontend Developer
                  where I was responsible for designing, developing, and maintaining
                  interactive web interfaces. I collaborated closely with designers
                  and backend teams to deliver smooth user experiences and
                  performance-optimized applications.
                </p>

                <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                  <li>Developed reusable React & Next.js components</li>
                  <li>Implemented modern UI/UX designs using Tailwind CSS</li>
                  <li>Optimized website performance and responsiveness</li>
                  <li>Worked on real-world production-level projects</li>
                </ul>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           <Card>
  <div className="flex flex-col">
    <h2 className="text-2xl font-semibold mb-4 text-black">
      Qualifications
    </h2>

    <ul className="space-y-4 text-gray-700">
      <li>
        <span className="font-medium text-black">
          10th (CBSE Board) – 2019
        </span>
        <p className="text-sm text-gray-600">
          Tulips International Sr. Sec. School,  
          Bhawana Road, Puth Khurd, Delhi – 110039
        </p>
      </li>

      <li>
        <span className="font-medium text-black">
          12th (NIOS Board) – 2021
        </span>
        <p className="text-sm text-gray-600">
          National Institute of Open Schooling (NIOS),  
          Sector 62, Noida, Uttar Pradesh – 201010
        </p>
      </li>

      <li>
        <span className="font-medium text-black">
          Diploma in Mechanical Engineering – 2021
        </span>
        <p className="text-sm text-gray-600">
          Chhotu Ram Rural Institute of Technology (CRRIT),  
          Kanjhawala, Near Ghevra Metro Station, Delhi – 110081
        </p>
      </li>

      <li>
        <span className="font-medium text-black">
          B.Tech in Computer Science – 2024
        </span>
        <p className="text-sm text-gray-600">
          PDM University, Sector 3A, Bahadurgarh,  
          Haryana – 124507
        </p>
      </li>

      <li>
        <span className="font-medium text-black">
          Full Stack Web Development – 2024
        </span>
        <p className="text-sm text-gray-600">
          Jeetech Academy, A1-106, First Floor,  
          Sector 6A, Rohini, New Delhi – 110085
        </p>
      </li>
    </ul>
  </div>
</Card>

          </motion.div>
        </div>

        {/* Personal Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card>
            <div className="flex flex-col w-full">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                Personal Details
                <hr className="w-[20%] border-2 border-gray-400 mt-2" />
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 ">
                <p className="bg-gray-100 p-5 rounded-2xl flex items-center space-x-3 hover:bg-gray-200 transition">
                
                  <span>
                    <span className="font-bold text-black">Name:</span> Kuldeep Dabas
                  </span>
                </p>
                <p className="bg-gray-100 p-5 rounded-2xl flex items-center space-x-3 hover:bg-gray-200 transition">
                  
                  <span>
                    <span className="font-bold text-black">Role:</span> Frontend Developer
                  </span>
                </p>
                <p className="bg-gray-100 p-5 rounded-2xl flex items-center space-x-3 hover:bg-gray-200 transition">
              
                  <span>
                    <span className="font-bold text-black">Experience:</span> 1 Year
                  </span>
                </p>
                <p className="bg-gray-100 p-5 rounded-2xl flex items-center space-x-3 hover:bg-gray-200 transition">
               
                  <span>
                    <span className="font-bold text-black">Company:</span> Kesya International Pvt. Ltd.
                  </span>
                </p>
                <p className="bg-gray-100 p-5 rounded-2xl flex items-center space-x-3 hover:bg-gray-200 transition">
                  
                  <span>
                    <span className="font-bold text-black">Skills:</span> React, Next.js, Tailwind CSS, HTML
                  </span>
                </p>
                <p className="bg-gray-100 p-5 rounded-2xl flex items-center space-x-3 hover:bg-gray-200 transition">
                 
                  <span>
                    <span className="font-bold text-black">Location:</span> India
                  </span>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}
