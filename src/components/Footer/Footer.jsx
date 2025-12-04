import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="portfolio10-footer">
      <div className="portfolio10-footer-content">
        <div className="portfolio10-footer-left">
          <div className="portfolio10-logo-circle">B</div>
          <span className="portfolio10-brand-name">Brooklyn</span>
        </div>

        <ul className="portfolio10-footer-menu">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Process</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <span className="portfolio10-footer-copy">Copyright © 2022 Picto.</span>
      </div>
    </footer>
  );
};
export default Footer;
