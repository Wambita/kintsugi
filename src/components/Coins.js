import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import './coin.css';


const Coins = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const coinAnimationRef = useRef(null);

  // Navigation Toggle
  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Scroll to Section
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(false);
    }
  };

  // Scroll Animation for Coin
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (coinAnimationRef.current) {
        coinAnimationRef.current.style.transform = 
          `translateY(${scrolled * 0.5}px) rotate(${scrolled * 0.2}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form Handling
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  // Scroll to Learning Section
  const scrollToLearning = () => {
    scrollToSection('#learning');
  };

  // Buy Kintara Handler
  const handleBuyKintara = () => {
    window.location.href = 'https://buy.kintaracoin.com';
  };

  return (
    <div className="coin-page">
      {/* Header */}
     <Header/>

      {/* Hero Section */}
      <section className="heros">
      <svg 
  ref={coinAnimationRef} 
  className="coin-animation" 
  viewBox="0 0 100 100"
>
  <image 
    href="https://i.postimg.cc/j2VkHzqz/logo.png" 
    x="0" 
    y="0" 
    width="100" 
    height="100" 
    alt="coin" 
   
  />
</svg>

        <h1 className="title">KINTARAA COIN</h1>
        <p className="subtitle">
          The Future of Digital Currency Against Gender-Based Violence
        </p>
        <div className="hero-buttons">
          <button className="cta-button" onClick={scrollToLearning}>
            Start Learning
          </button>
          <button 
            className="cta-button secondary" 
            onClick={handleBuyKintara}
          >
            Buy Kintara
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        {[
          {
            title: 'Secure Transactions',
            description: 'Advanced encryption and blockchain technology ensures your transactions are always safe and private.'
          },
          {
            title: 'Fast Processing',
            description: 'Lightning-fast transaction speeds with minimal fees make Kintara perfect for daily use.'
          },
          {
            title: 'Global Access',
            description: 'Join our worldwide community and trade Kintara coins across borders effortlessly.'
          }
        ].map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Learning Section */}
      <section id="learning" className="about">
        <h2 className="section-title">Earn Kintara Coins</h2>
        <div className="learning-portal">
          <h3>Ways to Earn Kintara Coins:</h3>
          <ul>
            {[
              'Complete educational modules about gender-based violence prevention',
              'Successfully report and help prevent GBV incidents',
              'Participate in community awareness programs',
              'Support survivors through verified assistance programs',
              'Purchase coins directly to support the initiative'
            ].map((method, index) => (
              <li key={index}>{method}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="section-title">About Kintara</h2>
        <p>
          Kintara Coin represents the next evolution in cryptocurrency,
          combining cutting-edge blockchain technology with a social mission to
          combat gender-based violence. Founded in 2023, our mission is to
          incentivize learning, reporting, and prevention of GBV while making
          digital currency accessible, secure, and practical for everyday use.
        </p>
      </section>

      {/* Whitepaper Section */}
      <section id="whitepaper" className="whitepaper">
        <h2 className="section-title">Whitepaper</h2>
        <div className="whitepaper-content">
          <h3>Technical Specifications</h3>
          <p>
            Block Time: 30 seconds<br />
            Total Supply: 100 million coins<br />
            Consensus Mechanism: Proof of Stake (PoS)<br />
            Smart Contract Support: Yes
          </p>
          <h3>Technology</h3>
          <p>
            Kintara utilizes a revolutionary blockchain architecture that
            prioritizes scalability, security, and sustainability. Our unique
            consensus mechanism ensures minimal environmental impact while
            maintaining high transaction throughput.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Contact Us</h2>
        <form 
          className="contact-form" 
          onSubmit={handleFormSubmit}
        >
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleFormChange}
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleFormChange}
            required 
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleFormChange}
            required
          ></textarea>
          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>
      </section>

      {/* Google Translate Script */}
      {typeof window !== 'undefined' && (
        <script>
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                },
                'google_translate_element'
              );
            }
          `}
        </script>
      )}
      <Footer/>
    </div>
  );
 
};


export default Coins;