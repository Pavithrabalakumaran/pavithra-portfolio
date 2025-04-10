import React from "react";
import "./style.css";
import image1 from "../../IMG-20141006-WA0002.jpg";

const About = () => {
  const skills = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 85 },
    { name: "JavaScript", percent: 80 },
    { name: "React", percent: 75 },
    { name: "Node.js", percent: 70 },
    { name: "Express.js", percent: 65 },
    { name: "MongoDB", percent: 60 },
    { name: "MySQL", percent: 70 },
  ];

  return (

  <>
    <section id="about">
      <div className="about-container">
        <div className="about-section">
          <h1 className="overview">A brief overview</h1>
          <p className="about-description">
  Hi, I'm <span className="name">Pavithra</span>,<br />
  A passionate and self-driven web developer with a Bachelor's degree in Civil Engineering. Despite transitioning from a non-IT background, I have worked diligently to build a strong foundation in HTML, CSS, JavaScript, Python, and SQL, while expanding my skills in modern frameworks like ReactJS and backend technologies like NodeJS and ExpressJS.<br /><br />
  My journey into tech is fueled by consistent preparation, hands-on learning, and an unwavering dedication to growth. Through hard work and perseverance, I've successfully carved a space for myself in the world of web development.<br /><br />
  As a fresher, I’m eager to contribute to real-world projects, collaborate with experienced professionals, and create meaningful digital experiences that make a difference.
</p>

        </div>
        <div className="profile-image-1">
          <img src={image1} alt="profile" className="profile-pic-1" />
        </div>
      </div>
    </section>

     <section className="skills-section">
      <h2 className="Skills-heading">My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-name-percent">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.percent}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
)};

export default About;
