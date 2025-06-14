import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FuturisticCanvas from '../components/FuturisticCanvas';
import Terminal from '../components/Terminal';

const LandingPage = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [showCanvas, setShowCanvas] = useState(true);
  const navigate = useNavigate();

  const handleStartClick = () => {
    setShowTerminal(true);
  };

  const handleTerminalClose = () => {
    setShowTerminal(false);
  };

  const handleAnimationComplete = () => {
    // Fade out terminal and canvas
    setShowCanvas(false);
    setTimeout(() => {
      navigate('/dashboard/about');
    }, 500);
  };

  return (
    <div className="w-full h-full relative">
      {showCanvas && (
        <div className={`transition-opacity duration-500 ${!showCanvas ? 'opacity-0' : 'opacity-100'}`}>
          <FuturisticCanvas onStartClick={handleStartClick} />
        </div>
      )}
      
      <Terminal 
        isVisible={showTerminal}
        onClose={handleTerminalClose}
        onAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
};

export default LandingPage;