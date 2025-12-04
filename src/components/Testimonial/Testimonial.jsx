import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="portfolio10-testimonial-section">
      <h1>Testimonial</h1>

      <p className="portfolio10-subtitle">
        There are many variations of passages of Lorem Ipsum available,
        <br /> but the majority have suffered alteration.
      </p>

      <p className="tportfolio10-estimonial-text">
        “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
        felis turpis, nec semper odio convallis at. Curabitur imperdiet semper
        arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est
        purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at
        libero suscipit porta.”
      </p>

      <h3 className="portfolio10-client-name">Esther Howard</h3>
      <p className="portfolio10-client-role">Managing Director, ABC company</p>

      <div className="portfolio10-testimonial-dots">
        <span className="portfolio10-dot active"></span>
        <span className="portfolio10-dot"></span>
        <span className="portfolio10-dot"></span>
      </div>
      {/* <div className="gradient-blur-4"></div> */}
    </section>
  );
};

export default Testimonial;
