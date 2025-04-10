import React from "react";
import { Link } from "react-scroll";
import "./style.css";

const Header = () => (
  <nav className="nav-bar">
    <div className="header-container">
    <Link className="nav-item-name" to="intro" smooth={true} duration={500}>
      <h1 className="portfolio-name">PAVITHRA SRI BHAVANI CC</h1> </Link>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

      <ul className="nav-links">
        <li><Link className="nav-item" to="intro" smooth={true} duration={500}>Home</Link></li>
        <li><Link className="nav-item" to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link className="nav-item" to="experience" smooth={true} duration={500}>Experience</Link></li>
        <li><Link className="nav-item" to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link className="nav-item" to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Header;
