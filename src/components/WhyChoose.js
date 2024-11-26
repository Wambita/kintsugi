import React from 'react';
import './style.css';

const WhyChoose = () => {
  return (
    <section className="section" id="why-choose">
      <h2 className="section-title">Why Choose Kintara</h2>
      <div className="features-grid">
        <div className="feature-card">
          <i className="fas fa-lock"></i>
          <h3>Secure &amp; Anonymous</h3>
          <p>Blockchain-powered security ensures your privacy</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-globe"></i>
          <h3>Nationwide Network</h3>
          <p>Connected support across all 47 counties</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-users"></i>
          <h3>Community-Driven</h3>
          <p>Built by and for the community</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
