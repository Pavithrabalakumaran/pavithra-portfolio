import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

import image from "../../DSC_0009 copy.jpg";
import resume from "../../Pavithra_resume_1.pdf";

const LandingPage = () => {
  const titles = [
    "Full Stack Developer",
    "Front End Developer",
    "Back End Developer",
    "Web Developer"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  


  return (
    <section id="intro">
      {/* Left Content */}
      <div className="landing-content">
        {/* Greeting Badge */}
        <motion.span 
          className="greeting-badge bg-[#FFD700] text-black px-4 py-1 rounded-full font-semibold text-lg shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
        >
          Hello!
        </motion.span>

        {/* Name */}
        <motion.h1 
          className="mt-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          I'm <span className="name-highlight">Pavithra Sri Bhavani</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
  className="sub-text-1 mt-2"
  key={titles[currentIndex]} // key triggers re-animation
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {titles[currentIndex]}
</motion.p>

        {/* Description */}
        <motion.p 
          className="sub-text mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
        
          I craft seamless, scalable, and visually engaging web applications that blend intuitive design with robust functionality. Passionate about transforming ideas into dynamic digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="button-container mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <a href={resume} download>
            <motion.button 
              className="buttons-1 hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.8)" }}
            >
              Download CV
            </motion.button>
          </a>

          <a href="#contact"> 
            <motion.button 
              className="buttons-2 hover:bg-[#FFD700] hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Get in Touch!
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* Profile Image */}
      <motion.div 
        className="image-content mt-10 md:mt-0 md:ml-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <img src={image} alt="profile" className="profile-image" />
      </motion.div>
    </section>
  );
};

export default LandingPage;
