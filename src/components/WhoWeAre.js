import React from 'react';
import './style.css';

const WhoWeAre = () => {
  return (
    <section className="section" id="who-we-are">
      <h2 className="section-title">Who We Are</h2>
      <div className="content-grid">
        <div className="text-content">
          <p>Kintara is a pioneering platform leveraging blockchain technology to combat gender-based violence in Kenya. We provide secure, anonymous reporting and support services while building a transparent ecosystem of care.</p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Trust</h3>
            <p>Built on blockchain for complete transparency and security</p>
          </div>
          <div className="value-card">
            <i className="fas fa-heart"></i>
            <h3>Compassion</h3>
            <p>Supporting survivors with dignity and understanding</p>
          </div>
          <div className="value-card">
            <i className="fas fa-balance-scale"></i>
            <h3>Justice</h3>
            <p>Working towards accountability and prevention</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
