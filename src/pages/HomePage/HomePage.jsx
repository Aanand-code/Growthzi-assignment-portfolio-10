import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Portfolio from '../../components/Portfolio/Portfolio';
import CallToAction from '../../components/CallToAction/CallToAction';
import Blog from '../../components/Blog/Blog';
import WhatIDo from '../../components/WhatIDo/WhatIDo';
import HappyClients from '../../components/HappyClients/HappyClients';
import Testimonial from '../../components/Testimonial/Testimonial';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import personImage from '../../assets/1.png';

const HomePage = () => {
  return (
    <div className="portfolio10-homepage">
      <div className="gradient-blur-1"></div>
      <div className="gradient-blur-2"></div>
      <div className="gradient-blur-3"></div>
      <Header />

      {/* HERO SECTION */}
      <section className="portfolio10-hero-section">
        <div className="portfolio10-hero-left">
          <div className="portfolio10-hero-left-upper">
            <h1>
              Hello, I’m <br />
              <span>Brooklyn Gilbert</span>
            </h1>

            <p>
              I'm a Freelance <b>UI/UX Designer</b> and <b>Developer</b> based
              in London, England. I strive to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>

            <button className="portfolio10-say-hello-btn">Say Hello!</button>
          </div>

          {/* stats */}
          <div className="portfolio10-stats-row">
            <div className="portfolio10-stat-box">
              <h3>15 Y.</h3>
              <p>Experience</p>
            </div>
            <div className="portfolio10-stat-box">
              <h3>250+</h3>
              <p>Project Completed</p>
            </div>
            <div className="portfolio10-stat-box">
              <h3>58</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="portfolio10-hero-right">
          <img src={personImage} alt="hero" className="portfolio10-hero-img" />
        </div>
      </section>
      <About />
      <Portfolio />
      <CallToAction />
      <Blog />
      <WhatIDo />
      <HappyClients />
      <Testimonial />
      <div>
        <div>
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
