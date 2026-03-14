"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return;

    const cursor = document.querySelector(".custom-cursor");
    const cursorBlur = document.querySelector(".custom-cursor-blur");

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(cursorBlur, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div className="custom-cursor fixed top-0 left-0 w-4 h-4 bg-orange-400 rounded-full pointer-events-none z-9999 mix-blend-difference -translate-x-1/2 -translate-y-1/2" />
      <div className="custom-cursor-blur fixed top-0 left-0 w-40 h-40 bg-orange-400/20 rounded-full pointer-events-none z-9998 blur-2xl -translate-x-1/2 -translate-y-1/2" />
    </>
  );
}
