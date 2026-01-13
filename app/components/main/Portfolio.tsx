"use client";

import Link from "next/link";
import Card from "../card";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "InfyVault", url: "https://infyvault.com/", img: "/1.png" },
  { id: 2, title: "PwnSploit", url: "https://pwnsploit.com/", img: "/2.png" },
  { id: 3, title: "Project Three", url: "https://pwnsploit.com/", img: "/3.png" },
  { id: 4, title: "Project Four", url: "https://worlddigitalagency.in/sonekiduniya/", img: "/4.png" },
  { id: 5, title: "Project Five", url: "https://www.worlddigitalagency.in/shivammotors/", img: "/5.png" },
  { id: 6, title: "Project Six", url: "https://worlddigitalagency.in/justchillspa/", img: "/6.png" },
  { id: 7, title: "Project Seven", url: "https://www.kesyamart.com/", img: "/7.png" },
  { id: 8, title: "Project Eight", url: "https://www.multisolutionsindia.com/", img: "/8.png" },
  { id: 9, title: "Project Nine", url: "https://www.kavyapackermover.com/", img: "/9.png" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className=" bg-[#222429] px-6 py-16 text-white">
      <h1 className="font-extrabold text-3xl text-left mb-4">My Portfolio</h1>

      <p className="text-left text-white mb-10">
        Here are some of my projects. Click on any to view live!
      </p>

      {/* Projects Grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card>
              <Link href={project.url} target="_blank">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={650}
                  height={400}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
