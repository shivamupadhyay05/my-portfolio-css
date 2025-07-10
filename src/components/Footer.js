import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer-fancy fade-in">
    <div className="footer-card">
      <div className="footer-left">
        <h2 className="footer-name-underline">Shivam Upadhyay</h2>
        <p className="footer-tagline">Blending creativity with code to bring your vision to life.</p>
        <div className="footer-socials">
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="footer-social linkedin" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/shivamupadhyay05" target="_blank" rel="noopener noreferrer" className="footer-social github" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:Shivamu0504@gmail.com" className="footer-social email" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+916390533255" className="footer-social phone" aria-label="Phone">
            <i className="fas fa-phone"></i>
          </a>
        </div>
        <div className="footer-contact-details">
          <span><strong>Email:</strong> <a href="mailto:Shivamu0504@gmail.com">Shivamu0504@gmail.com</a></span><br/>
          <span><strong>Phone:</strong> <a href="tel:+916390533255">+91-6390533255</a></span><br/>
          <span><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">linkedin.com/in/</a></span><br/>
          <span><strong>GitHub:</strong> <a href="https://github.com/shivamupadhyay05" target="_blank" rel="noopener noreferrer">github.com/shivamupadhyay05</a></span>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-contact-msg">Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
        <a href="mailto:Shivamu0504@gmail.com" className="footer-email-link">Shivamu0504@gmail.com</a>
      </div>
    </div>
    <div className="footer-copyright">
      © {new Date().getFullYear()} Shivam Upadhyay. All rights reserved.
    </div>
  </footer>
);

export default Footer; 