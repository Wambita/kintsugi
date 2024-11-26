import React from 'react';
import './style.css';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Fighting Gender-Based Violence Together</h1>
        <p>Empowering communities through technology and support to create a safer society for all.</p>
        <a href="/report" className="action-button">Report an Incident</a>
      </div>
    </section>
  );
};

export default Hero;
