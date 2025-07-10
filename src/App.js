import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Intro from './components/Intro';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="App">
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      {!showIntro && <>
        {/* Global background SVG and image accent */}
        <svg className="global-bg-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <text x="50%" y="60%" textAnchor="middle" fontSize="180" fontWeight="bold" fill="#a084ca" fillOpacity="0.08" fontFamily="monospace">{'</>'}</text>
        </svg>
        <div className="global-bg-img" aria-hidden="true"></div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </>}
    </div>
  );
}

export default App; 