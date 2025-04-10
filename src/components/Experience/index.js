import React, { useState } from "react";
import "./style.css";

const Experience = () => {
  const [showOverview, setShowOverview] = useState(null);

  const handleOverviewClick = (company) => {
    setShowOverview(company);
  };

  const closeModal = () => {
    setShowOverview(null);
  };

  return (
    <section id="experience">
    <div className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <p className="experience-intro">
        I am a dedicated Software Developer who successfully transitioned from a Civil Engineering background into the world of tech—driven by passion, consistent learning, and relentless hard work.
        <br /><br />
        I'm skilled in HTML, CSS, JavaScript, Python, SQL, ReactJS, NodeJS, ExpressJS and more. With a strong foundation in both frontend and backend technologies, I aim to build intuitive, user-friendly applications that solve real-world problems.
      </p>

      <div className="experience-cards">

        {/* Clinix Sphere */}
        <div className="experience-card">
          <h3>Clinix Sphere</h3>
          <p className="position">Full Stack Developer Intern</p>
          <p className="duration">September 2024 – Present</p>
          <a
            className="linkedin-link"
            href="https://www.linkedin.com/company/clinixsphere/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit on LinkedIn
          </a>
          <div className="experience-buttons">
            <button className="exp-btn" onClick={() => handleOverviewClick("clinix")}>Overview</button>
            <a href="../Internship-offer-letterdocx.pdf" className="exp-btn" target="_blank" rel="noreferrer">Offer Letter</a>
          </div>
        </div>

        {/* Izeon Innovative */}
        <div className="experience-card">
          <h3>Izeon Innovative</h3>
          <p className="position">Web Developer Intern</p>
          <p className="duration">Dec 2024 – Present</p>
          <a
            className="linkedin-link"
            href="https://www.linkedin.com/company/sbl-itsolutions/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit on LinkedIn
          </a>
          <div className="experience-buttons">
            <button className="exp-btn" onClick={() => handleOverviewClick("izeon")}>Overview</button>
            <a href="../Izeon_Innovative_Internship_Certificate.pdf" className="exp-btn" target="_blank" rel="noreferrer">Offer Letter</a>
          </div>
        </div>
      </div>

      {/* Overview Modal */}
      {showOverview && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content animated" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            {showOverview === "clinix" && (
              <>
                <h3>Clinix Sphere – Overview</h3>
                <p>
    At <strong>Clinix Sphere</strong>, I worked as a Full Stack Developer Intern, contributing to the development of multiple core modules in a healthcare platform.
  </p>
  <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.8" }}>
    <li className="bullet-points">💻 Designed and implemented modules for <strong>patient registration</strong>, <strong>appointment scheduling</strong>, and <strong>doctor availability</strong> tracking.</li>
    <li className="bullet-points">⚛️ Created dynamic and reusable forms using <strong>React.js</strong> and styled them with custom <strong>CSS</strong> and <strong>Tailwind CSS</strong>.</li>
    <li className="bullet-points">🔗 Integrated backend APIs using <strong>Node.js</strong> and <strong>Express.js</strong> for seamless data handling and communication.</li>
    <li className="bullet-points">🎨 Worked closely with <strong>UI/UX designers</strong> to ensure accurate implementation of <strong>Figma</strong> designs.</li>
    <li className="bullet-points">⚠️ Implemented <strong>form validations</strong>, <strong>conditional rendering</strong>, and <strong>error handling</strong> to improve reliability.</li>
    <li className="bullet-points">🚀 Focused on <strong>performance optimization</strong> and <strong>responsive design</strong> to enhance user experience across all devices.</li>
    <li className="bullet-points">🤝 Collaborated in an agile environment, attending daily stand-ups and providing regular code updates.</li>
  </ul>
              </>
            )}
            {showOverview === "izeon" && (
              <>
                <h3>Izeon Innovative – Overview</h3>
                <p>
  At <strong>Izeon Innovative</strong>, I worked as a Web Developer Intern, where I focused on building responsive user interfaces and enhancing web experiences.
</p>
<ul style={{ paddingLeft: "1.2rem", lineHeight: "1.8" }}>
  <li className="bullet-points">🌐 Developed fully responsive websites using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React.js</strong>.</li>
  <li className="bullet-points">📱 Ensured mobile-first design and cross-browser compatibility for all pages and components.</li>
  <li className="bullet-points">🔄 Integrated external <strong>APIs</strong> and implemented <strong>form validations</strong> to ensure data accuracy.</li>
  <li className="bullet-points">🎯 Focused on clean UI layout design and improving user flow.</li>
  <li className="bullet-points">🧩 Gained hands-on experience in <strong>Git version control</strong> for collaborative development and code management.</li>
  <li className="bullet-points">📐 Designed UI components aligned with client requirements and business goals.</li>
  <li className="bullet-points">🔄 Worked in a fast-paced environment, adapting to agile project timelines and tight deadlines.</li>
  <li className="bullet-points">🧠 Learned best practices in frontend development, accessibility, and performance optimization.</li>
</ul>

              </>
            )}
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default Experience;
