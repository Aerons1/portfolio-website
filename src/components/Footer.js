import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => (
  <footer className="footer-section text-white py-4">
    <div className="container text-center">
      <div className="mb-3">
        <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://wa.me/2349052356667" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="aeronsosezua@gmail.com"><FaEnvelope /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Aeron Osezua. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
