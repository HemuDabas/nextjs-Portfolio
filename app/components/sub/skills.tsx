"use client";

import SkillBar from "../main/skillbar";

export default function Skills() {
  const skills = [
    { skill: "HTML", percentage: 92 },
    { skill: "CSS", percentage: 90 },
    { skill: "JavaScript", percentage: 85 },
    { skill: "React.js", percentage: 82 },
    { skill: "Next.js", percentage: 95 },
    { skill: "Styling & UI", percentage: 100 },
    { skill: "Tailwind CSS", percentage: 100 },
    { skill: "Bootstrap", percentage: 85 },
    { skill: "Responsive Design", percentage: 100 },
    { skill: "UI/UX Principles", percentage: 84 },
  ];

  return (
    <section id="skills" className="py-16 w-full  bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black text-left mb-10">
          My Skills & Expertise
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((s, i) => (
            <SkillBar key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
