import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className='navbar'>
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <h2>Annaya</h2>

      {/* Desktop Menu */}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
        <li><ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink></li>
        <li><ScrollLink to="mywork" smooth={true} duration={500}>Projects</ScrollLink></li>
      </ul>

      <div className='nav-actions'>
        <button className='theme-toggle' onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {/* Mobile Toggle Button */}
        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
