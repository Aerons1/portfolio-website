import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => (
  <footer className="footer-section text-white py-4">
    <div className="container text-center">
      <div className="mb-3">
        <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://wa.me/2348012345678" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="mailto:youremail@example.com"><FaEnvelope /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
