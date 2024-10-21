import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img  from "./assets/Sanjeevimg.jpg"
import p1img from './assets/proj1/Screenshot 2024-10-21 221805.png'
import p2img from './assets/proj2/Screenshot 2024-10-21 221928.png'
import p3img from './assets/proj3/Screenshot 2024-10-21 222303.png'
import p4img from './assets/proj4/image.png'
import p5img from './assets/proj5/image1.png'
import p6img from './assets/proj6/Screenshot 2024-10-21 225416.png'

import a1img from './assets/achievements/Screenshot 2024-10-21 225703.png'
import a2img from './assets/achievements/Screenshot 2024-10-21 225811.png'
import a3img from './assets/achievements/Screenshot 2024-10-21 225924.png'

const Navbar = () => (
  <div className="fixed top-0 left-0 right-0 flex justify-center z-50 p-4">
    <nav className="bg-[#26262A] rounded-full px-8 py-4 flex items-center">
      <div className="text-2xl font-bold font-montserrat text-white mr-8">
        <img src={img} className="rounded-full w-10 h-10 inline-block mr-2" alt="Sanjeev Singh" />
         Sanjeev Singh
      </div>
      <ul className="flex space-x-9">
        <li><a href="#about" className="text-white hover:bg-[#4b4b4c] flex items-center justify-center px-4 py-2 rounded-md transition-colors duration-300 font-montserrat">About</a></li>
        <li><a href="#skills" className="text-white hover:bg-[#4b4b4c] flex items-center justify-center px-4 py-2 rounded-md transition-colors duration-300 font-montserrat">Skills</a></li>
        <li><a href="#projects" className="text-white hover:bg-[#4b4b4c] flex items-center justify-center px-4 py-2 rounded-md transition-colors duration-300 font-montserrat">Projects</a></li>
        <li><a href="#achievements" className="text-white hover:bg-[#4b4b4c] flex items-center justify-center px-4 py-2 rounded-md transition-colors duration-300 font-montserrat">Achievements</a></li>
        <li><a href="#contact" className="text-white hover:bg-[#4b4b4c] flex items-center justify-center px-4 py-2 rounded-md transition-colors duration-300 font-montserrat">Contact</a></li>
      </ul>
    </nav>
  </div>
);

const AnimatedSection = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      {children}
    </motion.section>
  );
};

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <span className="inline-block text-blue-400 text-3xl font-montserrat font-bold">
      {displayText}
    </span>
  );
};

const SkillBubble = ({ skill }) => (
  <motion.div
    className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full m-2 font-montserrat text-lg"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {skill}
  </motion.div>
);

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <h3 className="text-xl font-bold mb-2 font-montserrat">{project.name}</h3>
        <p className="text-sm mb-4 font-lato">{project.description}</p>
        <div className="flex space-x-4">
          <a  target="_blank" 
          rel="noopener noreferrer" href={project.liveLink} className="px-4 py-2 bg-[#07B7D4] rounded hover:bg-blue-700 transition font-montserrat">Live</a>
          <a  target="_blank" 
          rel="noopener noreferrer" href={project.githubLink} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition font-montserrat">GitHub</a>
        </div>
      </motion.div>
    </motion.div>
  );
};



const AchievementCard = ({ achievement }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event) => {
    setIsHovered(true);
    updateMousePosition(event);
  };

  const handleMouseMove = (event) => {
    updateMousePosition(event);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const updateMousePosition = (event) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({ x: clientX - left, y: clientY - top });
  };

  return (
    <motion.div
      className="bg-black border-b-2 border-white rounded-lg overflow-visible shadow-md hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-32">
        {isHovered && (
          <motion.img
            src={achievement.image}
            alt={achievement.title}
            className="absolute top-0 left-0 w-56 h-56 object-cover rounded-t-lg"
            animate={{ x: mousePosition.x, y: mousePosition.y }}
            transition={{ type: 'tween', duration: 0.3 }}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{achievement.title}</h3>
        <p className="text-gray-400">{achievement.description}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    { name: "DevFlow", description: "Welcome to our Stack Overflow clone, a platform designed to foster collaboration and knowledge sharing among developers. Built with Next.js 14, Clerk.js for authentication, and TinyMCE for the editor, this application aims to provide a seamless experience for users to ask questions, provide answers, and engage in discussions on various programming topics", image: p1img, liveLink: "https://devflow-sage.vercel.app/", githubLink: "https://github.com/Sanjeev12357/devflow" },
    { name: "Learning Management System", description: "Study Notion is a web-based Learning Management System (LMS) built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a feature-rich environment for users to explore courses, manage profiles, and engage in learning activities. The project incorporates various functionalities, including user authentication, OTP generation, course catalog, instructor dashboards, and more.", image: p2img, liveLink: "https://learning-mangement-system-pi.vercel.app/", githubLink: "https://github.com/Sanjeev12357/Learning-Mangement-system" },
    { name: "Ecom", description: "Ecommerce platform especially made for college students", image: p3img, liveLink: "https://ecom-frontend-tawny-three.vercel.app/cart", githubLink: "https://github.com/Sanjeev12357/EcomFrontend" },
    { name: "Job Finder", description: "Job Finder Platform for finding jobs made using React Native ", image:p4img, liveLink: "https://www.linkedin.com/posts/sanjeev-singh-saini_androiddevelopment-reactnative-activity-7214474594966024192-ikGS?utm_source=share&utm_medium=member_desktop", githubLink: "https://github.com/Sanjeev12357/Job-Finder-" },
    { name: "Black Board", description: "Excali draw clone a black board application", image: p6img, liveLink: "https://excalidraw-clone-rho.vercel.app/", githubLink: "https://github.com/Sanjeev12357/Excalidraw-clone" },
    { name: "Faculty Finder", description: "Faculty Finder used by 200+ college students for finding faculty", image: p5img, liveLink: "https://www.linkedin.com/posts/activity-7220492334738681856-IXrp?utm_source=share&utm_medium=member_desktop", githubLink: "#" },
  ];

  const achievements = [
    { title: "MLSA runner Up", description: "2nd Place in m microsoft student learn chapter 6 made a blockchain based waste transaction platform where blockchain tooken will be distribute based on the waste exchanged by the governemnt carrying vehicles", image: a2img},
    { title: "React Mentor", description: "Mentored more than 150+ students in React ", image: a1img },
    { title: "300 + question solve on Leetcode ", description: "Problem Solver", image: a3img },
  ];

  const skills = [
    "JavaScript", "React", "Node.js", "HTML/CSS", "Python", "GraphQL", "Docker", "AWS", "PostgressSql"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24 px-8 max-w-6xl mx-auto">
        <AnimatedSection id="about">
         
          <div className="flex items-center">
          <div className="w-1/2 pr-8">
          <p className="text-5xl font-bold font-montserrat mb-4">
            Trust me, I'm a <span className='text-[#07B7D4]'>software engineer.</span>
          </p>
          <p className="text-xl font-lato mb-4">
            Meet Sanjeev Singh Saini, a third-year Computer Science Engineering student and a passionate full-stack web developer. I specialize in React Native development and am currently honing my skills in DevOps. I have built over 50 projects, some of which are mentioned below, and have taken workshops where I mentored 150+ students in React.
          </p>
          <ul className="text-lg font-lato space-y-2">
            <li>✨ Building innovative web and mobile applications</li>
            <li>🌟 Collaborated in teams to win 2 hackathons</li>
            <li>💻 Qualified for the SIH internal hackathon</li>
            <li>🚀 Passionate about creating impactful digital experiences</li>
          </ul>
          <a 
            href="https://drive.google.com/file/d/1ReuunKNxpfWmkocB_OwSjlPsydBaWZn2/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-[#07B7D4] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 mt-6"
          >
            View My Resume
          </a>
        </div>
        
            <div className="w-1/2">
              <img src={img} alt="Sanjeev Singh" className="rounded-md w-96 h-96 mx-auto" />
            </div>
          </div>
          <div className="flex space-x-4 mt-8">
          <motion.a
            href="https://github.com/Sanjeev12357"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 rounded-full p-3 hover:bg-[#07B7D4] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
              <path d="M12 2C6.475 2 2 6.475 2 12c0 4.417 2.865 8.178 6.839 9.488.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.782.605-3.369-1.187-3.369-1.187-.454-1.151-1.11-1.458-1.11-1.458-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.032-2.688-.103-.253-.448-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0022 12c0-5.525-4.475-10-10-10z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sanjeev-singh-saini"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 rounded-full p-3 hover:bg-[#07B7D4] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/offx.sanjeev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 rounded-full p-3 hover:bg-[#07B7D4] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://twitter.com/Sanjeev__dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 rounded-full p-3 hover:bg-[#07B7D4] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
            </svg>
          </motion.a>
        </div>
        </AnimatedSection>

        <AnimatedSection id="skills">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-8 font-montserrat">Skills</h2>
          <div className="grid grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-full px-6 py-3 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className="text-lg font-montserrat">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

        <AnimatedSection id="projects">
          <h2 className="text-4xl font-bold mb-8 font-montserrat">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="achievements">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-8 font-montserrat">Achievements</h2>
          <div className="flex flex-col gap-8 w-full">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AchievementCard achievement={achievement} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8 font-montserrat">Contact Me</h2>
        <div className="flex flex-col space-y-4 items-center">
          <p className="font-lato">Email: sanjeevsinghsaini48@gmail.com</p>
          <p className="font-lato">Phone: +91 8494097965</p>
         
        </div>
      </div>
    </AnimatedSection>
      </main>
    </div>
  );
};

export default Portfolio;