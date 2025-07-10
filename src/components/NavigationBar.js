import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default NavigationBar; 