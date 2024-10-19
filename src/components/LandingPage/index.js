import React from "react";
import "./style.css";

import image from "../../DSC_0009 copy.jpg";
import resume from "../../Pavithra_Resume_new.pdf"; // Adjust the path to your resume

const LandingPage = () => (
    <section id="intro">
        <div className="landing-content">
            <span className="greeting-badge">Hello!</span>
            <h1>I'm <span className="name-highlight">Pavithra Sri Bhavani</span></h1>

            <p className="sub-text-1">Full Stack Developer</p>
            <p className="sub-text">I'm a skilled Full Stack Developer with expertise in creating visually appealing <br/> and user-friendly websites.</p>

            <div className="button-container">
                <a href={resume} download>
                    <button className="buttons-1">Download CV</button>
                </a>
                <a href="#contact"> 
                <button className="buttons-2">Get in Touch!</button>
                </a>
            </div>
        </div>
        <div className="image-content">
            <img src={image} alt="profile-image" className="profile-image" />
        </div>
    </section>
);

export default LandingPage;
