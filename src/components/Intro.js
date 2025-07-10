import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import gameBoyAnim from '../assets/game-boy.json';
import './Intro.css';

const Intro = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 700); // allow fade-out
    }, 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`intro-anim${visible ? '' : ' fade-out'}`}>
      <div className="intro-center">
        <Lottie
          loop
          play
          animationData={gameBoyAnim}
          style={{ width: 260, height: 260 }}
        />
        <h1 className="intro-title">Hi, I'm Shivam!</h1>
        <p className="intro-desc">Let’s visit my portfolio.</p>
      </div>
    </div>
  );
};

export default Intro; 