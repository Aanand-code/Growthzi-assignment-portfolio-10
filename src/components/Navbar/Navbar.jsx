import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="portfolio10-navbar">
      <div className="portfolio10-nav-left">
        <div className="portfolio10-logo-circle">B</div>
        <h2 className="portfolio10-logo-text">Brooklyn</h2>
      </div>

      <div className="portfolio10-nav-right">
        <ul className="portfolio10-nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Process</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Services</li>
        </ul>

        <button className="portfolio10-contact-btn">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
