"use client";

import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
}

export default function SkillBar({ skill, percentage }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm font-semibold text-gray-700">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full rounded-full bg-white transition-all duration-1000 ease-out"
          style={{ width: animate ? `${percentage}%` : "0%" }}
        />
      </div>
    </div>
  );
}
