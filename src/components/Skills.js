import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaVuejs } from 'react-icons/fa';
import { Fa5 } from 'react-icons/fa6';
import { SiFastapi } from 'react-icons/si';

const Skills = () => (
  <div id="skills" className="skills-section py-5 bg-light">
    <Container>
      <h2 className="text-center fw-bold mb-4">My Skills</h2>
      <Row className="text-center">
        <Col md={4} sm={6} className="mb-4">
          <FaReact size={50} color="#61dafb" />
          <h5 className="mt-2">React</h5>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <FaNodeJs size={50} color="#68a063" />
          <h5 className="mt-2">Node.js</h5>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <FaHtml5 size={50} color="#e34f26" />
          <h5 className="mt-2">HTML5</h5>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <FaCss3Alt size={50} color="#1572b6" />
          <h5 className="mt-2">CSS3</h5>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <FaJsSquare size={50} color="#f7df1e" />
          <h5 className="mt-2">JavaScript</h5>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <FaReact size={50} color="green" />
          <h5 className="mt-2">React Native</h5>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <FaBootstrap size={50} color="#f7df1e" />
          <h5 className="mt-2">bootstrap</h5>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <FaVuejs size={50} color="gray" />
          <h5 className="mt-2">Vue</h5>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <FaJsSquare size={50} color="gray" />
          <h5 className="mt-2">RESTful API</h5>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Skills;
