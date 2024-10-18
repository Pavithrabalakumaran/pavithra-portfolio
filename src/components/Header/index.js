import React from "react";
import { Link } from "react-scroll"; // Use Link from react-scroll for smooth scrolling
import "./style.css";

const Header = () => (
  <header>
    <nav>
      <div className="header-design"> {/* Changed class to className */}
        <h1 className="portfolio-name">PAVITHRA SRI BHAVANI CC</h1>

        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">&#9776;</label> {/* htmlFor instead of for */}

        <ul className="features-section">
          {/* Use the Link component properly */}
          <li>
            <Link
              className="links-section"
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="links-section"
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="links-section"
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="links-section"
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="links-section"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
