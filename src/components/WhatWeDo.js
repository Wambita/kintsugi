import React from 'react';
import './style.css';

const WhatWeDo = () => {
  return (
    <section className="section" id="what-we-do">
      <h2 className="section-title">What We Do</h2>
      <div className="services-grid">
        <div className="service-card">
          <i className="fas fa-phone-alt"></i>
          <h3>24/7 Support</h3>
          <p>Round-the-clock assistance and crisis intervention</p>
        </div>
        <div className="service-card">
          <i className="fas fa-hands-helping"></i>
          <h3>Community Support</h3>
          <p>Local support groups and counseling services</p>
        </div>
        <div className="service-card">
          <i className="fas fa-university"></i>
          <h3>Legal Aid</h3>
          <p>Access to legal resources and advocacy</p>
        </div>
        <div className="service-card">
          <i className="fas fa-chart-line"></i>
          <h3>Data Insights</h3>
          <p>Research and analytics to inform prevention</p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
