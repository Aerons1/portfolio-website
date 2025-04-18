import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/projects.css';
// Use unique images if available
import portfolioImg from '../assets/portfolioimage.jpg';
import ecommerceImg from '../assets/portfolio-preview.jpeg';
import quizImg from '../assets/quizimage.jpg';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio for showcasing development work with animations and modern UI.',
    image: portfolioImg,
    live: 'https://portfolio-website-self-tau-36.vercel.app/',
    github: 'https://github.com/Aerons1/portfolio-website',
  },
  {
    title: 'E-Commerce App',
    description: 'A sleek mobile-friendly e-commerce platform with guest checkout and Paystack integration.',
    image: ecommerceImg,
    live: 'https://your-ecommerce-demo.com',
    github: 'https://github.com/yourusername/ecommerce',
  },
  {
    title: 'Quiz App',
    description: 'An interactive quiz app with swipe gestures, tap-to-reveal, and mobile-friendly UI built with Vue.js.',
    image: quizImg, // Replace with an actual image if you have one
    live: 'https://quiz-app-xi-amber.vercel.app/',
    github: 'https://github.com/Aerons1/quiz-app',
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
