import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "TypeScript",
  "C",
  "C++",
  "MongoDB",
  "SQL",
  "PostgreSQL",
  "React Native",
  "Redux",
  "AWS",
  "Docker",
  "Tailwind CSS",
];

const RunningBar = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    gsap.to(marquee, {
      xPercent: -100,
      repeat: -1,
      duration: 20,
      ease: "linear",
    });
  }, []);

  return (
    <div className="w-full bg-gradient-to-r font-robert-medium from-blue-500 to-purple-600 py-4 overflow-hidden">
      <div className="relative flex w-[200%]" ref={marqueeRef}>
        {Array(2)
          .fill(skills)
          .flat()
          .map((skill, index) => (
            <div
              key={index}
              className="text-white text-lg font-semibold mx-8 whitespace-nowrap"
            >
              {skill}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RunningBar;
