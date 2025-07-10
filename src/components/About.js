import React from 'react';
import myPhoto from '../assets/shivam.jpg.png';
import './About.css';

const About = () => (
  <section className="fade-in card about-exciting about-hero-bg">
    {/* SVG code symbol accent */}
    <svg className="about-bg-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="50%" y="60%" textAnchor="middle" fontSize="180" fontWeight="bold" fill="#a084ca" fillOpacity="0.08" fontFamily="monospace">{'</>'}</text>
    </svg>
    {/* Optional background image accent */}
    <div className="about-bg-img" aria-hidden="true"></div>
    <div className="about-flex">
      <div className="about-img-wrapper">
        <img
          src={myPhoto}
          alt="Shivam Upadhyay"
          className="about-img-animated"
        />
      </div>
      <div>
        <h2 className="about-name-gradient">Hi! I'm <span className="pulse">{
          [...'Shivam Upadhyay'].map((char, i) =>
            <span key={i} className={char !== ' ' ? 'glow-char' : ''}>{char === ' ' ? '\u00A0' : char}</span>
          )
        }</span></h2>
        <p className="about-title">B.Tech CSE @ Bennett University (2027) | Community Facilitator Lead | Content Head | Developer</p>
        <div className="about-socials">
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="about-social-icon linkedin" aria-label="LinkedIn">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#0077B5"/><path d="M10.67 13.33h2.66v8h-2.66v-8zm1.33-1.33a1.33 1.33 0 1 1 0-2.66 1.33 1.33 0 0 1 0 2.66zm3.33 1.33h2.56v1.09h.04c.36-.68 1.24-1.4 2.56-1.4 2.74 0 3.25 1.8 3.25 4.13v4.18h-2.66v-3.71c0-.89-.02-2.04-1.24-2.04-1.24 0-1.43.97-1.43 1.97v3.78h-2.66v-8z" fill="#fff"/></svg>
          </a>
          <a href="https://github.com/shivamupadhyay05" target="_blank" rel="noopener noreferrer" className="about-social-icon github" aria-label="GitHub">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#181717"/><path d="M16 7.5c-4.7 0-8.5 3.8-8.5 8.5 0 3.8 2.5 7 6 8.1.4.1.5-.2.5-.4v-1.4c-2.4.5-2.9-1-2.9-1-.4-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.8 2.4.6.1-.5.3-.8.5-1-1.9-.2-3.9-.9-3.9-4 0-.9.3-1.6.8-2.2-.1-.2-.3-1 .1-2.1 0 0 .7-.2 2.2.8.7-.2 1.5-.3 2.2-.3.7 0 1.5.1 2.2.3 1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-2 3.8-3.9 4 .3.3.5.7.5 1.4v2c0 .2.1.5.5.4 3.5-1.1 6-4.3 6-8.1 0-4.7-3.8-8.5-8.5-8.5z" fill="#fff"/></svg>
          </a>
        </div>
        <div className="about-contact">
          <strong>Email:</strong> <a href="mailto:Shivamu0504@gmail.com">Shivamu0504@gmail.com</a> <br/>
          <strong>Phone:</strong> <a href="tel:+916390533255">+91-6390533255</a>
        </div>
        <div className="about-edu">
          <strong>Education:</strong><br/>
          B.Tech in Computer Science, Bennett University – 7.52 CGPA (May 2027)<br/>
          Kendriya Vidyalaya Old Cantt, CBSE – 91% & 80% (March 2023)
        </div>
      </div>
    </div>
  </section>
);

export default About; 