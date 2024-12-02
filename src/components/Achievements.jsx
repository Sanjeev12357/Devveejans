import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Achievement Data
const achievementsData = [
    {
        title: "Global Hackathon Winner",
        description: "Secured first place in an international tech innovation challenge, developing a groundbreaking AI-driven solution.",
        year: 2023,
        icon: "🏆"
    },
    {
        title: "Open Source Contributor",
        description: "Top contributor to multiple high-impact open-source projects, with significant improvements to core functionalities.",
        year: 2022,
        icon: "💻"
    },
    {
        title: "Research Publication",
        description: "Published a peer-reviewed paper on machine learning algorithms in a prestigious international conference.",
        year: 2021,
        icon: "📜"
    },
    {
        title: "Innovation Award",
        description: "Recognized for developing an innovative tech solution that addresses critical social challenges.",
        year: 2022,
        icon: "🌟"
    }
];

const AchievementCard = ({ achievement, index }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;

        // GSAP Animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // Stagger animation with perspective and rotation
        tl.fromTo(card, 
            { 
                opacity: 0, 
                rotationX: -90, 
                transformOrigin: "top center",
                scale: 0.8
            },
            {
                opacity: 1,
                rotationX: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out"
            }
        );

        // Hover animation
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                duration: 0.3,
                ease: "power1.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                boxShadow: "none",
                duration: 0.3,
                ease: "power1.out"
            });
        });

        return () => {
            // Cleanup ScrollTrigger
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div 
            ref={cardRef}
            className="
                bg-black text-white 
                border border-gray-200 
                rounded-xl 
                p-6 
                shadow-lg 
                transform transition-transform 
                flex items-center 
                space-x-6
                opacity-0
            "
        >
            <div className="text-5xl">{achievement.icon}</div>
            <div>
                <h3 className="text-xl font-bold mb-2">
                    {achievement.title}
                    <span className="text-sm text-gray-500 ml-3">({achievement.year})</span>
                </h3>
                <p className="text-gray-700">{achievement.description}</p>
            </div>
        </div>
    );
};

const Achievements = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        // Background animation
        gsap.fromTo(
            container,
            { 
                backgroundColor: '#ffffff',
                scale: 0.9 
            },
            {
                backgroundColor: '#f0f0f0',
                scale: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: container,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <section 
            ref={containerRef}
            className="
                min-h-screen 
                flex flex-col 
                justify-center 
                items-center 
                bg-black 
                py-16 
                px-4
            "
        >
            <div className="container mx-auto max-w-4xl">
                <h2 
                    className="
                        text-4xl 
                        font-bold 
                        text-center 
                        mb-12 
                        text-black
                        opacity-0
                    "
                    id="achievements-title"
                >
                    Achievements & Milestones
                </h2>

                <div className="space-y-6">
                    {achievementsData.map((achievement, index) => (
                        <AchievementCard 
                            key={index} 
                            achievement={achievement} 
                            index={index} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;