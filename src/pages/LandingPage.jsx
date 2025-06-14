import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/dashboard/about');
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: 0
    }}>
      <button
        onClick={handleStartClick}
        style={{
          backgroundColor: 'transparent',
          border: '2px solid #00ffff',
          color: '#00ffff',
          fontFamily: 'monospace',
          fontSize: '24px',
          fontWeight: 'bold',
          padding: '20px 48px',
          letterSpacing: '3px',
          cursor: 'pointer',
          borderRadius: '50px',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(0, 255, 255, 0.1)';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.transform = 'scale(1)';
        }}
      >
        START
      </button>
    </div>
  );
};

export default LandingPage;