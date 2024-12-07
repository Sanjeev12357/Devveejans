import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedTitle from "./AnimatedTitle";

const Skills = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-container",
        start: "top 70%", // Trigger when the top of skills reaches 70% of the viewport
        end: "bottom 20%", // End when the bottom of skills reaches 20%
        scrub: true,
        // Enable for debugging, remove later
      },
    });

    t1.to(".skills h4", {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      stagger: 0.2, // Animates each skill sequentially
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
    id="skills"
    className="parent min-h-screen w-screen">
      {/* Animated Title */}
      <div className="relative mb-8 mt-20 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px] text-gray-500">
          Welcome to MySkills
        </h2>
        <AnimatedTitle
          title={
            "Disc <b>o</b>ver the world's <br/> a<b>m</b>azing projects"
          }
          containerClass={"mt-5 !text-black text-center"}
        />
      </div>

      {/* Skills Section */}
      <div className="skills-container w-full flex items-center justify-center">
        <div className="skills w-[90%] min-h-[50vh] flex flex-wrap gap-4 items-center justify-center px-[5vw] py-[4vh] bg-gray-100 rounded-lg shadow-lg">
          {[
            "Html",
            "Css",
            "Js",
            "React",
            "Node",
            "Express",
            "Mongo",
            "Tailwind",
            "Bootstrap",
            "React Native",
            "Docker",
            "Kubernetes",
            "Aws",
            "Gcp",
            "CI/CD",
            "Git",
            "Github",
            "TypeScript",
          ].map((skill, index) => (
            <h4
              key={index}
              id={skill.toLowerCase()}
              className="rounded-full blur-md opacity-0 border-gray-400 border px-6 py-1 text-black font-general bg-white shadow-sm transform translate-y-10"
            >
              {skill}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
