import React from "react";

import "./style.css";
import image1 from "../../IMG-20141006-WA0002.jpg";

const About = () => (
  <>
<section id="about">
    <div className="about-container">
        <h1 className="overview">A brief overview</h1>
      <div className="profile-image">
        <img src={image1} alt="profile" className="profile-pic" />
      </div>

      <div className="about-section">
        <p className="about-description">
          Hi, I'm <span className="name">Pavithra</span>, <br />
          A passionate web developer with a Bachelor’s degree in Engineering. I
          have a solid foundation in HTML, CSS, JavaScript, Python, SQL, and
          growing expertise in modern frameworks like ReactJS and back-end
          technologies like NodeJS and ExpressJS. <br /> <br />
          As a fresher, I am eager to apply my skills in a professional setting,
          collaborate with experienced developers, and contribute to creating
          impactful web experiences.
        </p>
      </div>
    </div>
</section>

    {/* Skills Container */}
<section id="skills">
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="skill-bar">
        <span>HTML</span>
        <div className="progress"><div className="progress-fill html"></div></div>
        <span className="percentage">100%</span>
      </div>
      <div className="skill-bar">
        <span>CSS</span>
        <div className="progress"><div className="progress-fill css"></div></div>
        <span className="percentage">90%</span>
      </div>
      <div className="skill-bar">
        <span>JavaScript</span>
        <div className="progress"><div className="progress-fill js"></div></div>
        <span className="percentage">80%</span>
      </div>
      <div className="skill-bar">
        <span>Python</span>
        <div className="progress"><div className="progress-fill python"></div></div>
        <span className="percentage">75%</span>
      </div>
      <div className="skill-bar">
        <span>SQL</span>
        <div className="progress"><div className="progress-fill sql"></div></div>
        <span className="percentage">80%</span>
      </div>
      <div className="skill-bar">
        <span>Node.js</span>
        <div className="progress"><div className="progress-fill node"></div></div>
        <span className="percentage">70%</span>
      </div>
      <div className="skill-bar">
        <span>Express.js</span>
        <div className="progress"><div className="progress-fill express"></div></div>
        <span className="percentage">70%</span>
      </div>
      <div className="skill-bar">
        <span>React.js</span>
        <div className="progress"><div className="progress-fill react"></div></div>
        <span className="percentage">85%</span>
      </div>
    </div>
    </section>
  </>
);

export default About;
