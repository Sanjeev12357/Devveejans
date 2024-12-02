import React, { useState } from 'react'
import '../index.css'
import Butoon from './Butoon';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import img from '../assets/Sanjeevimg.jpg';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const [isLoading] = useState(false);

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%,72% 0%,90% 90%,0% 100%)',
            borderRadius: '0 0 40% 10%'
        })

        gsap.from('#video-frame', {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: "#video-frame",
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    })

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            {isLoading && (
                <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
                    <div className='three-body'>
                        <div className='three-body__dot'></div>
                        <div className='three-body__dot'></div>
                        <div className='three-body__dot'></div>
                    </div>
                </div>
            )}
            <div 
                id="video-frame" 
                className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg 
                bg-gradient-to-br from-blue-500/70 via-purple-500/70 to-pink-500/70'
            >
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                            <img
                                src={img}
                                id="current-video"
                                className='size-64 origin-center scale-150 object-cover object-center'
                                alt="Sanjeev Profile"
                            />
                        </div>
                    </div>
                    <div
                       
                        className='absolute-center text-blue-75 flex justify-center items-center ]  absolute z-20 size-64 object-cover object-center'
                        
                    > 🐰 </div>
                </div>
                <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
                    W<b>o</b>nders
                </h1>

                <div className='absolute left-0 top-0 z-40 size-full'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className='special-font hero-heading  text-blue-75'>Devel<b>o</b>ping</h1>
                        <p className='mb-5 max-w-64 font-robert-medium text-white'>
                            Full Stack Developer <br />
                            Crafting Digital Solutions
                        </p>
                    </div>
                    <div className='px-5 sm:px-10 space-y-4'>
                        <a target='_blank' href='https://drive.google.com/file/d/1ReuunKNxpfWmkocB_OwSjlPsydBaWZn2/view'>
                            <Butoon 
                                id="watch-trailer"
                                title="View Resume"
                                leftIcon={<TiLocationArrow />}
                                containerClass="!bg-yellow-300 flex-center gap-1"
                            />
                        </a>
                        
                        <div className='bg-white/10 text-black font-robert-medium w-1/2 backdrop-blur-sm rounded-lg p-4'>
                            <p className='text-blue-75 font-medium italic mb-2'>
                                "Trust me, I'm a software engineer."
                            </p>
                            <p className=''>
                                Meet Sanjeev Singh Saini, a third-year Computer Science Engineering student and a passionate full-stack web developer. I specialize in React Native development and am currently honing my skills in DevOps.
                            </p>
                            <ul className='list-none space-y-1 mt-2 text-sm'>
                                <li className='flex items-center'>
                                    <span className='mr-2'>✨</span> Building innovative web and mobile applications
                                </li>
                                <li className='flex items-center'>
                                    <span className='mr-2'>🌟</span> Collaborated in teams to win 2 hackathons
                                </li>
                                <li className='flex items-center'>
                                    <span className='mr-2'>💻</span> Qualified for the SIH internal hackathon
                                </li>
                                <li className='flex items-center'>
                                    <span className='mr-2'>🚀</span> Passionate about creating impactful digital experiences
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black'>
                W<b>o</b>nders
            </h1>
        </div>
    )
}

export default Hero