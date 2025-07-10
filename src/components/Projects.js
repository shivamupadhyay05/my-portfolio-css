import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="fade-in">
    <h2>Projects</h2>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
      <div className="card slide-in" style={{minWidth: 250, flex: 1}}>
        <h3>Eco-Earn</h3>
        <p>Developed the Eco-Earn platform, effectively communicating AI-powered features and incentivized recycling processes, increasing user engagement by 40%. Crafted and optimized website copy and UI text, ensuring clarity and compelling messaging. Integrated AI and Machine Learning (ML) for enhanced user experience.</p>
      </div>
    </div>
  </section>
);

export default Projects; 