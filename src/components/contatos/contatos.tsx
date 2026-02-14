"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiCss3,
  SiFirebase,
} from "react-icons/si";

const techs = [
  { icon: SiJavascript, color: "#F7DF1E" },
  { icon: SiTypescript, color: "#3178C6" },
  { icon: SiReact, color: "#61DAFB" },
  { icon: SiNextdotjs, color: "#FFFFFF" },
  { icon: SiTailwindcss, color: "#38BDF8" },
  { icon: SiSass, color: "#CC6699" },
  { icon: SiCss3, color: "#1572B6" },
  { icon: SiFirebase, color: "#FFCA28" },
];

export default function TechMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="relative snap-start w-full overflow-hidden py-10 ">
      <motion.div
        ref={containerRef}
        className="flex gap-16 w-max"
        animate={{ x: [0, -width] }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
      >
        {[...techs, ...techs].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex items-center justify-center text-6xl"
              style={{ color: tech.color }}
            >
              <Icon />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
