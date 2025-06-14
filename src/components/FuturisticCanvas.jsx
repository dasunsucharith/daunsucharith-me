import React, { useEffect, useRef, useState } from 'react';

const FuturisticCanvas = ({ onStartClick }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particlesRef = useRef([]);
  const shockwavesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Button properties for collision detection
  const buttonRect = useRef({
    x: 0,
    y: 0,
    width: 150,
    height: 60,
    radius: 30
  });

  class Particle {
    constructor() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.size = Math.random() * 10 + 12;
      this.opacity = Math.random() * 0.5 + 0.5;
      this.char = Math.random() > 0.5 ? '1' : '0';
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      this.glowIntensity = Math.random() * 0.5 + 0.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotationSpeed;

      if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
      if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;

      // Mouse/touch repulsion
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const distToMouse = Math.sqrt((this.x - mouseX) ** 2 + (this.y - mouseY) ** 2);
      if (distToMouse < 150 && mouseX > 0 && mouseY > 0) {
        const force = (150 - distToMouse) / 150;
        this.vx += (this.x - mouseX) * force * 0.01;
        this.vy += (this.y - mouseY) * force * 0.01;
      }

      // Button collision detection
      const dx = Math.abs(this.x - buttonRect.current.x);
      const dy = Math.abs(this.y - buttonRect.current.y);
      
      if (dx <= (buttonRect.current.width / 2 + buttonRect.current.radius) && 
          dy <= (buttonRect.current.height / 2 + buttonRect.current.radius)) {
        if (dx > buttonRect.current.width / 2 || dy > buttonRect.current.height / 2) {
          const cornerDx = dx - buttonRect.current.width / 2;
          const cornerDy = dy - buttonRect.current.height / 2;
          if (cornerDx * cornerDx + cornerDy * cornerDy <= buttonRect.current.radius * buttonRect.current.radius) {
            const angle = Math.atan2(this.y - buttonRect.current.y, this.x - buttonRect.current.x);
            this.vx = Math.cos(angle) * Math.abs(this.vx + this.vy) * 0.7;
            this.vy = Math.sin(angle) * Math.abs(this.vx + this.vy) * 0.7;
          }
        } else {
          if (dx > dy) {
            this.vx *= -0.8;
          } else {
            this.vy *= -0.8;
          }
        }
      }

      if (Math.random() < 0.01) {
        this.char = Math.random() > 0.5 ? '1' : '0';
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      
      ctx.shadowColor = this.char === '1' ? '#00ffff' : '#00ff00';
      ctx.shadowBlur = this.glowIntensity * 10;
      
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

  class Shockwave {
    constructor(x, y) {
      this.centerX = x;
      this.centerY = y;
      this.radius = 0;
      this.maxRadius = Math.max(window.innerWidth, window.innerHeight) * 1.5;
      this.opacity = 1;
      this.speed = 20;
      this.hexSize = 25;
      this.hexagons = [];
      this.generateHexGrid();
    }

    generateHexGrid() {
      const hexWidth = this.hexSize * Math.sqrt(3);
      const hexHeight = this.hexSize * 2;
      const verticalSpacing = hexHeight * 0.75;
      
      for (let row = -Math.ceil(this.maxRadius / verticalSpacing); row <= Math.ceil(this.maxRadius / verticalSpacing); row++) {
        for (let col = -Math.ceil(this.maxRadius / hexWidth); col <= Math.ceil(this.maxRadius / hexWidth); col++) {
          const offsetX = (row % 2) * (hexWidth / 2);
          const hexX = this.centerX + col * hexWidth + offsetX;
          const hexY = this.centerY + row * verticalSpacing;
          
          const distFromCenter = Math.sqrt((hexX - this.centerX) ** 2 + (hexY - this.centerY) ** 2);
          
          this.hexagons.push({
            x: hexX,
            y: hexY,
            distance: distFromCenter,
            opacity: 0,
            maxOpacity: Math.random() * 0.8 + 0.2
          });
        }
      }
    }

    update() {
      this.radius += this.speed;
      
      this.hexagons.forEach(hex => {
        if (hex.distance <= this.radius) {
          const age = (this.radius - hex.distance) / this.speed;
          if (age < 10) {
            hex.opacity = Math.min(hex.maxOpacity, age / 10);
          } else {
            const fadeAge = age - 10;
            hex.opacity = Math.max(0, hex.maxOpacity - (fadeAge / 20));
          }
        }
      });
    }

    draw(ctx) {
      ctx.save();
      ctx.shadowColor = '#00ffff';
      ctx.shadowBlur = 5;
      
      this.hexagons.forEach(hex => {
        if (hex.opacity > 0) {
          ctx.strokeStyle = `rgba(0, 255, 255, ${hex.opacity})`;
          ctx.lineWidth = 1.5 * hex.opacity;
          this.drawHexagon(ctx, hex.x, hex.y, this.hexSize);
        }
      });
      
      ctx.restore();
    }

    drawHexagon(ctx, x, y, size) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const pointX = x + Math.cos(angle) * size;
        const pointY = y + Math.sin(angle) * size;
        
        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }
      ctx.closePath();
      ctx.stroke();
    }

    isDead() {
      return this.hexagons.every(hex => hex.opacity <= 0) && this.radius > this.maxRadius * 0.5;
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    buttonRect.current.x = canvas.width / 2;
    buttonRect.current.y = canvas.height / 2;

    // Initialize particles
    particlesRef.current = [];
    for (let i = 0; i < 50; i++) {
      particlesRef.current.push(new Particle());
    }

    const drawHexGrid = () => {
      const size = 40;
      const time = Date.now() * 0.002;
      
      for (let x = 0; x < canvas.width + size; x += size * 1.5) {
        for (let y = 0; y < canvas.height + size; y += size * Math.sqrt(3)) {
          const offsetX = (y % (size * Math.sqrt(3) * 2)) < size * Math.sqrt(3) ? 0 : size * 0.75;
          const hexX = x + offsetX;
          const hexY = y;
          
          const distToCenter = Math.sqrt((hexX - canvas.width/2) ** 2 + (hexY - canvas.height/2) ** 2);
          const pulse = Math.sin(time + distToCenter * 0.01) * 0.5 + 0.5;
          
          ctx.strokeStyle = `rgba(0, 100, 150, ${pulse * 0.1})`;
          ctx.lineWidth = 1;
          
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const pointX = hexX + Math.cos(angle) * size * 0.3;
            const pointY = hexY + Math.sin(angle) * size * 0.3;
            
            if (i === 0) {
              ctx.moveTo(pointX, pointY);
            } else {
              ctx.lineTo(pointX, pointY);
            }
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dist = Math.sqrt(
            (particlesRef.current[i].x - particlesRef.current[j].x) ** 2 + 
            (particlesRef.current[i].y - particlesRef.current[j].y) ** 2
          );
          
          if (dist < 100) {
            const opacity = (100 - dist) / 100 * 0.3;
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawCustomCursor = () => {
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      
      if (mouseX > 0 && mouseY > 0) {
        // Outer ring
        ctx.strokeStyle = 'rgba(255, 0, 150, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 15, 0, Math.PI * 2);
        ctx.stroke();
        
        // Inner particle
        ctx.fillStyle = 'rgba(255, 0, 150, 1)';
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Pulsing effect
        const pulse = Math.sin(Date.now() * 0.01) * 5 + 10;
        ctx.strokeStyle = 'rgba(255, 0, 150, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, pulse, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawHexGrid();
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      drawConnections();
      
      // Update and draw shockwaves
      shockwavesRef.current = shockwavesRef.current.filter(shockwave => {
        shockwave.update();
        shockwave.draw(ctx);
        return !shockwave.isDead();
      });
      
      drawCustomCursor();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buttonRect.current.x = canvas.width / 2;
      buttonRect.current.y = canvas.height / 2;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    mouseRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    mouseRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    mouseRef.current = { x: 0, y: 0 };
  };

  const handleStartClick = () => {
    // Create shockwave at button center
    const newShockwave = new Shockwave(buttonRect.current.x, buttonRect.current.y);
    shockwavesRef.current.push(newShockwave);
    onStartClick();
  };

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="block bg-black cursor-none"
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      <button
        onClick={handleStartClick}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   bg-transparent border-2 border-cyan-400 text-cyan-400 
                   font-mono text-2xl font-bold px-12 py-5 tracking-widest cursor-pointer 
                   transition-all duration-300 rounded-full z-10 backdrop-blur-sm
                   hover:bg-cyan-400/10 hover:scale-105 hover:shadow-cyan-400/60 hover:shadow-2xl
                   active:scale-95"
        style={{ 
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' 
        }}
      >
        START
      </button>
    </div>
  );
};

export default FuturisticCanvas;