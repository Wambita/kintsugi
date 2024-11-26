import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if the Google Translate script is already loaded
    if (!window.google || !window.google.translate) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = () => {
        // Initialize Google Translate after the script has loaded
        if (window.google && window.google.translate) {
          window.googleTranslateElementInit();
        }
      };
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        // Ensure InlineLayout is available before using it
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,sw,fr,ar',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          }, 'google_translate_element');
        }
      };

      return () => {
        // Clean up and remove the script when the component unmounts
        document.body.removeChild(script);
      };
    } else {
      // If the script is already loaded, initialize it
      window.googleTranslateElementInit();
    }
  }, []); // Only run once on initial render

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="logo">
          <img src="https://i.postimg.cc/j2VkHzqz/logo.png" alt="Kintara Logo" height="100" />
          KINTARAA
        </a>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/statistics" className="nav-link">Statistics</Link>
          <Link to="/kintara-coin" className="nav-link">Kintara Coin</Link>
          <Link to="/community" className="nav-link">Community</Link>
          <Link to="/donate" className="donate-btn">Donate</Link>
          <div id="google_translate_element" className="nav-link"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
