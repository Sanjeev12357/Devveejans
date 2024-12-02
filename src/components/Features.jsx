import React, { useRef, useState } from 'react';
import { TiLocationArrow, TiLink } from 'react-icons/ti';
import projectsData from './projects.json';

export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 10;
        const tiltY = (relativeX - 0.5) * -10;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.99, .99, .99)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

const BentoCard = ({ 
    title, 
    description, 
    githubLink, 
    liveLink, 
    imageSrc 
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
       
        <div 
            className="relative size-full border-violet-300  border-2 overflow-hidden rounded-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Image */}
           

            {/* Overlay for Description */}
            <div 
                className={`
                    absolute inset-0 z-20 bg-black/70 
                    flex flex-col justify-center items-center 
                    cursor-default h-[90%]
                    text-center p-4 transition-opacity duration-300
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                `}
            >
                <p className="text-white text-sm md:text-base max-w-[80%]">
                    {description}
                </p>
            </div>

            {/* Card Content */}
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 
                        className="bento-title  special-font" 
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-50 cursor-pointer hover:text-blue-200 flex items-center"
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

// Features Component remains the same as in the previous implementation
const Features = () => {
    const { projects } = projectsData;

    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">Into the Projects</p>

                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Explore the projects I've worked on, showcasing my full-stack development skills.
                    </p>
                </div>

                {/* Dynamic Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto] gap-7">
                    {projects.map((project, index) => (
                        <BentoTilt 
                            key={project.id} 
                            className={`
                                ${index === 0 ? 'md:col-span-2 h-96 md:h-[65vh]' : 'h-96'}
                                overflow-hidden rounded-md
                            `}
                        >
                            <BentoCard
                                title={project.title}
                                description={project.description}
                                githubLink={project.githubLink}
                                liveLink={project.liveLink}
                                imageSrc={project.imageSrc}
                            />
                        </BentoTilt>
                    ))}

                    {/* Additional Static Cards remain the same */}
                    <div className="bento-tilt_2 ">
                        <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                            <h1 className="bento-title special-font max-w-64 text-black">
                                M<b>o</b>re co<b>m</b>ing so<b>o</b>n!
                            </h1>
                            <TiLocationArrow className="m-5 scale-[5] self-end" />
                        </div>
                    </div>

                    <div className="bento-tilt_2 ">
                        <img
                            src="images/1.png"
                            alt="feature 5"
                            className="object-cover size-full   object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;