import React from 'react';
import './style.css';


const QuickLinks = () => {
    return (
      <section className="section" id="quick-links">
        <h2 className="section-title">Quick Resources</h2>
        <div className="quick-links-grid">
          <a href="https://hxclu-4qaaa-aaaal-ajxkq-cai.icp0.io/rights" className="quick-link-card">
            <i className="fas fa-gavel"></i>
            <h4>Know Your Rights</h4>
            <p>Learn about legal protections</p>
          </a>
          <a href="https://hxclu-4qaaa-aaaal-ajxkq-cai.icp0.io/donate" className="quick-link-card">
            <i className="fas fa-hand-holding-heart"></i>
            <h4>Donate</h4>
            <p>Support our cause</p>
          </a>
          <a href="https://hxclu-4qaaa-aaaal-ajxkq-cai.icp0.io/statistics" className="quick-link-card">
            <i className="fas fa-chart-bar"></i>
            <h4>Statistics</h4>
            <p>View impact data</p>
          </a>
          <a href="https://hxclu-4qaaa-aaaal-ajxkq-cai.icp0.io/kintara-coin" class="quick-link-card">
             <i class="fas fa-coins"></i>
             <h4>Kintara Coin</h4>
            <p>Learn about our token</p>
          </a>
        </div>
        </section>
    );
}

export default QuickLinks;
            