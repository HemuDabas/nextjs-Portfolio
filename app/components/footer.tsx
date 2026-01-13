"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold">About Me</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            I am a Frontend Developer creating modern, responsive web
            applications. Passionate about design, development, and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#about" className="hover:text-orange-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-orange-500 transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Contact</h2>
          <p className="text-gray-400 text-sm">Email: hemudabas22@gmail.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 9958209646</p>
          <p className="text-gray-400 text-sm">Location: Bawana,New Delhi-110039</p>
        </div>

        {/* Social */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Follow Me</h2>
          <div className="flex space-x-4 text-gray-400 text-2xl">
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-orange-500 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-orange-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-orange-500 transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-5">
        &copy; {new Date().getFullYear()} Kuldeep Dabas. All rights reserved.
      </div>
    </footer>
  );
}
