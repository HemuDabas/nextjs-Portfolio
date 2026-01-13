"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", `/${id}`);
    setIsOpen(false); // close menu after click
  };

  const goHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", "/");
    setIsOpen(false); // close menu on mobile
  };

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="font-bold text-xl tracking-wide">My Portfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-base font-medium">
          <button onClick={goHome} className="hover:text-orange-400 transition">
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-orange-400 transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-orange-400 transition"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="hover:text-orange-400 transition"
          >
            Portfolio
          </button>
         
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-6">
          <button
            onClick={goHome}
            className="block w-full text-left py-2 hover:text-orange-400 transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left py-2 hover:text-orange-400 transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="block w-full text-left py-2 hover:text-orange-400 transition"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="block w-full text-left py-2 hover:text-orange-400 transition"
          >
            Portfolio
          </button>
          
        </div>
      )}
    </nav>
  );
}
