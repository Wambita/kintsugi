import React from 'react';
// import 'swiper/swiper-bundle.min.css';
import './style.css'


const Testimonials = () => {
  return (
    <section className="section" id="testimonials">
      <h2 className="section-title">Voices of Impact</h2>
      <div className="swiper testimonial-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-card">
              <p>"Kintara gave me the courage to speak up and seek help. Their support changed my life."</p>
              <cite>- Sarah K.</cite>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-card">
              <p>"The platform's anonymous reporting feature helped me feel safe while seeking support."</p>
              <cite>- James M.</cite>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-card">
              <p>"As a community leader, I've seen how Kintara has transformed lives in our area."</p>
              <cite>- Elizabeth W.</cite>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-card">
              <p>"The blockchain technology ensures our data is secure and transparent. It's revolutionary!"</p>
              <cite>- John D.</cite>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>
  );
};

export default Testimonials;
