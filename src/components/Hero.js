import React from 'react';
import { motion } from 'framer-motion';
import Typical from 'react-typical';
import profilePic from '../assets/profilepic.jpeg';
import '../styles/hero.css';

const Hero = () => (
  <section id="hero" className="hero-section py-5">
    <div className="container d-flex flex-column flex-lg-row align-items-center">
      <motion.img
        src={profilePic}
        alt="Profile"
        className="profile-img mb-4 mb-lg-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="text-center text-lg-start ms-lg-5">
        <h1 className="fw-bold">Moses Aeron Osezua</h1>
        <Typical
          steps={['Full-Stack Web Developer', 2000, 'Mobile App Developer', 2000, 'Software Engineer', 2000]}
          loop={Infinity}
          wrapper="h2"
          className="typing-text"
        />
        <p className="lead mt-3">
        Hi, I’m a Highly Motivated and A Very Passionate Full-Stack Web & Mobile App Developer, Crafting Exceptional And Innovative Digital Applications and Experience, With A Strong Foundation In Modern Web And Mobile Technologies. I specialize in building Fast, Scalable, and user-centric applications that solve real-world problems. From sleek, responsive websites to high-performance mobile apps, my mission is to merge beautiful design with seamless functionality.

I bring ideas to life through clean code, intuitive UI/UX, and a deep understanding of Full-Stack Development. Whether you're a startup looking to launch your MVP, a business aiming to scale digitally, or someone with a bold vision—I’m here to transform your ideas, concepts into impactful products.

I don't just build apps—I engineer experiences that resonate, drive engagement, and deliver real-world impact.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
