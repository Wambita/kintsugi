import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Kintaraa</h3>
        <img src="https://i.postimg.cc/j2VkHzqz/logo.png" alt="Kintara Logo" height="80"  width="100"/>
          <p>Empowering communities through blockchain technology</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="/report">Report Incident</a>
          <a href="/community">Support Groups</a>
        </div>
        <div>
          <h3>Contact</h3>
          <p>support@kintara.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
