import React, { useEffect, useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti';
import Butoon from './Butoon'
import gsap from 'gsap';
import img from '../assets/Sanjeevimg.jpg';
import { Link } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
const Navbar = () => {
    const navContainerRef=useRef(null);
    const navItems=['About',"Skills",'Projects','Contact']
    const audioElementRef=useRef(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScrollY,setLastScrollY]=useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const {y:currentScrollY}=useWindowScroll();
    useEffect(()=>{
        if(currentScrollY===0){
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        }else if(currentScrollY>lastScrollY){
            setIsNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        }else if(currentScrollY<lastScrollY){
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }

        setLastScrollY(currentScrollY);
    },[currentScrollY,lastScrollY ]);

    useEffect(()=>{
        gsap.to(navContainerRef.current,{
            y:isNavVisible ? 0 : -100,
            opacity:isNavVisible ? 1 : 0,
            duration:0.2,

        })
    },[isNavVisible])

    const toggleAudioIndicator=()=>{
        setIsAudioPlaying((prev)=>!prev);
        setIsIndicatorActive((prev)=>!prev);

    }
    useEffect(()=>{
        if(isAudioPlaying){
            audioElementRef.current.play();
        }else{
            audioElementRef.current.pause();
        }
    },[isAudioPlaying]);
  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav
            className='flex size-full items-center justify-between p-4 '
            >
                <div className='items-center flex gap-7'>
                    <img src={img}
                    alt="logo"
                    className='w-10 h-10 rounded-full'
                    />
                   
                    <Butoon id="product-button"
                    title="Sanjeev"
                    rightIcon={<TiLocationArrow/>}
                    containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"

                    />
                   
                </div>

                <div className='flex h-full items-center '>

                    <div className="hidden md:block">
                        {navItems.map((item)=>(
                            <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
                                {item}
                            </a>
                        ))}
                    </div>
                    <button onClick={toggleAudioIndicator} className='ml-10 flex items-center space-x-0.5'>
                        <audio ref={audioElementRef}
                        className='hidden'
                        src='/audio/loop.mp3'
                        loop
                        />
                        {[1,2,3,4].map((bar)=>(
                            <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' :''}`} style ={{animationDelay:`${bar*0.1}s`}}>

                            </div>
                        ))}
                        
                    </button>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar