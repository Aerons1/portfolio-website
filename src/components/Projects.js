import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/projects.css';
import projectImg from '../assets/portfolio-preview.jpeg'; // Use unique images if available

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio for showcasing development work with animations and modern UI.',
    image: projectImg,
    live: 'https://your-live-demo-link.com',
    github: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'E-Commerce App',
    description: 'A sleek mobile-friendly e-commerce platform with guest checkout and Paystack integration.',
    image: projectImg,
    live: 'https://your-ecommerce-demo.com',
    github: 'https://github.com/yourusername/ecommerce',
  },
  {
    title: 'Quiz App',
    description: 'An interactive quiz app with swipe gestures, tap-to-reveal, and mobile-friendly UI built with Vue.js.',
    image: projectImg, // Replace with an actual image if you have one
    live: 'https://your-quiz-app-demo.com',
    github: 'https://github.com/yourusername/quiz-app',
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2>Projects</h2>
      <Container>
        <Row>
          {projects.map((project, idx) => (
            <Col key={idx} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mt-auto d-flex justify-content-between">
                    <Button variant="primary" href={project.live} target="_blank">Live Demo</Button>
                    <Button variant="outline-dark" href={project.github} target="_blank">GitHub</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
