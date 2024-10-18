import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a
          href="https://www.instagram.com/pavithra_chandrasekar"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://github.com/Pavithrabalakumaran"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/pavithra-sri-bhavani-cc-8abb78280/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p className="footer-text">© 2024 Pavithra Sri Bhavani. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
