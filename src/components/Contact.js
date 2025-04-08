import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/contact.css'; // Your contact styles here

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dp4srkd', 'template_bzhv6eb', form.current, 'uByBGWRxN7y6P8I9B')
      .then(
        (result) => {
          setStatus('success');
          form.current.reset();
        },
        (error) => {
          setStatus('error');
          console.error(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact-section py-5 bg-light" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5 text-dark">Contact Me</h2>

        {/* Contact Icons */}
        <Row className="mb-5 text-center">
          <Col md={3} xs={6} className="mb-4">
            <FaPhoneAlt size={28} className="mb-2 text-primary" />
            <p className="mb-0 fw-semibold">+234 8147300064</p>
          </Col>
          <Col md={3} xs={6} className="mb-4">
            <FaEnvelope size={28} className="mb-2 text-danger" />
            <p className="mb-0 fw-semibold">aeronsosezua@gmail.com</p>
          </Col>
          <Col md={3} xs={6} className="mb-4">
            <FaLinkedin size={28} className="mb-2 text-info" />
            <p className="mb-0 fw-semibold">
              <a href="https://www.linkedin.com/in/moses-osezua-097581359" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
                LinkedIn
              </a>
            </p>
          </Col>
          <Col md={3} xs={6} className="mb-4">
            <FaWhatsapp size={28} className="mb-2 text-success" />
            <p className="mb-0 fw-semibold">
              <a href="https://wa.me/2349052356667" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
                Chat on WhatsApp
              </a>
            </p>
          </Col>
        </Row>

        {/* Message Form */}
        <h5 className="text-center fw-semibold mb-4">Or send a quick message</h5>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control type="text" name="user_name" placeholder="Your Name" required />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control type="email" name="user_email" placeholder="Your Email" required />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" name="message" rows={4} placeholder="Your Message" required />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>

            {status === 'success' && (
              <Alert variant="success" className="mt-3 text-center">Message sent successfully!</Alert>
            )}
            {status === 'error' && (
              <Alert variant="danger" className="mt-3 text-center">Oops! Something went wrong. Please try again.</Alert>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
