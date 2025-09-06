import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Wave Background */}
      <div className="footer-waves">
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1a1a1a"
            fillOpacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,144C384,181,480,235,576,229.3C672,224,768,160,864,144C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0d47a1"
            fillOpacity="0.7"
            d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,181.3C672,181,768,203,864,197.3C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#2196f3"
            fillOpacity="1"
            d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,229.3C672,245,768,235,864,229.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Socials */}
      <div className="footer-socials">
        {/* <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a> */}
        <a href="https://linkedin.com/in/annaya-sharma-220519237" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/_anjali_s084" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.me/917903685531?text=Hello%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://github.com/annaya561" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>

      {/* Links */}
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        {/* <a href="#team">Team</a> */}
        <a href="#mywork">Projects</a>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Annaya Sharma | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
