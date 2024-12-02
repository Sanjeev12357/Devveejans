import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img  from "./assets/Sanjeevimg.jpg"

import AboutSection from './components/AboutSection';
import Navbar from './components/Navbar';

import Features from './components/Features';

import RunningBar from './components/Skills';
import Skills from './components/Skills1';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';


const Portfolio = () => {
 

  

  

  
 

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <AboutSection/>
      
        
      
      
      <Skills/>
      
      <Features/>

    
      
      <Contact/>
      <Footer/>
    
     
    </div>
  );
};

export default Portfolio;