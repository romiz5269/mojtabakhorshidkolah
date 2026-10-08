"use client";

import {motion, useMotionValue, useSpring} from "framer-motion";
import {useEffect, useState} from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.3,
  });

  const cursorY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.3,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Circle */}
      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          h-8
          w-8
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-white/60
        "
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />

      {/* Center Dot */}
      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[10000]
          h-1.5
          w-1.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
        "
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
    </>
  );
}
