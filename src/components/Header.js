// src/components/Header.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './header.css'; // Keep the CSS import

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="custom-navbar">
    <Container>
      <Navbar.Brand href="#hero" className="brand-text">
        <span className="logo-icon">💼</span> Dev Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ms-auto">
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
