import React from 'react';
import { TiLink } from 'react-icons/ti';

const ProjectCard = ({ title, description, githubLink, liveLink, imageSrc }) => {
    return (
        <div className="relative size-full">
            <img 
                src={imageSrc} 
                alt={title} 
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">
                            {description}
                        </p>
                    )}
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <a 
                        href={githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-50 hover:text-blue-200 flex items-center"
                    >
                        <TiLink className="mr-2" /> GitHub
                    </a>
                    <a 
                        href={liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-50 hover:text-blue-200 flex items-center"
                    >
                        <TiLink className="mr-2" /> Live Project
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">My Projects</p>
                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Explore the projects I've worked on, showcasing my full-stack development skills.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    <ProjectCard
                        title="Learning Management System"
                        description="A complete platform for managing online courses and learning resources."
                        githubLink="https://github.com/Sanjeev12357/Learning-Management-System"
                        liveLink="https://your-live-link.com"
                        imageSrc="images/lms-image.jpg"
                    />
                    <ProjectCard
                        title="DevFlow"
                        description="A tool for developers to track and manage project workflows efficiently."
                        githubLink="https://github.com/Sanjeev12357/DevFlow"
                        liveLink="https://your-live-link.com"
                        imageSrc="images/devflow-image.jpg"
                    />
                    <ProjectCard
                        title="WebRTC Mentor-Student Platform"
                        description="A platform where mentors and students can connect through WebRTC video calls."
                        githubLink="https://github.com/Sanjeev12357/WebRTC-Mentor-Platform"
                        liveLink="https://your-live-link.com"
                        imageSrc="images/webrtc-image.jpg"
                    />
                    {/* Add more ProjectCard components here */}
                </div>
            </div>
        </section>
    );
};

export default Projects;
