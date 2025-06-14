import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particlesRef = useRef([]);
  const navigate = useNavigate();

  class Particle {
    constructor() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.vx = (Math.random() - 0.5) * 1;
      this.vy = (Math.random() - 0.5) * 1;
      this.size = Math.random() * 8 + 4;
      this.opacity = Math.random() * 0.5 + 0.3;
      this.char = Math.random() > 0.5 ? '1' : '0';
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.01;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotationSpeed;

      if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
      if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;

      if (Math.random() < 0.005) {
        this.char = Math.random() > 0.5 ? '1' : '0';
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      
      ctx.shadowColor = this.char === '1' ? '#00ffff' : '#00ff00';
      ctx.shadowBlur = 8;
      
      ctx.fillStyle = this.char === '1' ? 
        `rgba(0, 255, 255, ${this.opacity})` : 
        `rgba(0, 255, 0, ${this.opacity})`;
      
      ctx.font = `${this.size}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.char, 0, 0);
      
      ctx.restore();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize particles (reduced number for better performance)
    particlesRef.current = [];
    for (let i = 0; i < 30; i++) {
      particlesRef.current.push(new Particle());
    }

    const drawGrid = () => {
      const size = 50;
      const time = Date.now() * 0.001;
      
      ctx.strokeStyle = 'rgba(0, 100, 150, 0.1)';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += size) {
        const opacity = Math.sin(time + x * 0.01) * 0.1 + 0.05;
        ctx.strokeStyle = `rgba(0, 150, 200, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += size) {
        const opacity = Math.sin(time + y * 0.01) * 0.1 + 0.05;
        ctx.strokeStyle = `rgba(0, 150, 200, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dist = Math.sqrt(
            (particlesRef.current[i].x - particlesRef.current[j].x) ** 2 + 
            (particlesRef.current[i].y - particlesRef.current[j].y) ** 2
          );
          
          if (dist < 150) {
            const opacity = (150 - dist) / 150 * 0.2;
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawGrid();
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      drawConnections();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCanvasClick = () => {
    navigate('/dashboard/about');
  };

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 cursor-pointer"
        onClick={handleCanvasClick}
      />
      
      {/* Click anywhere text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4 font-mono tracking-wider">
            DASUN SUCHARITH
          </h1>
          <p className="text-lg md:text-xl text-cyan-300 mb-8 font-mono">
            Developer & Digital Strategist
          </p>
          <div className="animate-pulse">
            <p className="text-sm text-cyan-500 font-mono">
              Click anywhere to enter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;