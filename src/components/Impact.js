import React from 'react';
import './style.css';

const Impact = () => {
  return (
    <section className="section" id="impact">
      <h2 className="section-title">Our Impact</h2>
      <div className="impact-grid">
        <div className="impact-stat">
          <h3>10,000+</h3>
          <p>Lives Touched</p>
        </div>
        <div className="impact-stat">
          <h3>47</h3>
          <p>Counties Reached</p>
        </div>
        <div className="impact-stat">
          <h3>95%</h3>
          <p>Case Resolution</p>
        </div>
        <div className="impact-stat">
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
