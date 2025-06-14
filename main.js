import './style.css'

document.querySelector('#app').innerHTML = `
  <canvas id="futuristic-canvas"></canvas>
  <button id="start-button">START</button>
  <div id="terminal" class="hidden">
    <div id="terminal-header">
      <span class="terminal-title">SYSTEM_TERMINAL_v2.0</span>
      <div class="terminal-controls">
        <span class="control-btn minimize">_</span>
        <span class="control-btn maximize">□</span>
        <span class="control-btn close">×</span>
      </div>
    </div>
    <div id="terminal-content">
      <div class="terminal-line">
        <span class="prompt">root@system:~$</span>
        <span class="cursor">|</span>
      </div>
    </div>
  </div>
`

const canvas = document.getElementById('futuristic-canvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start-button');
const terminal = document.getElementById('terminal');
const closeBtn = document.querySelector('.control-btn.close');
const terminalContent = document.getElementById('terminal-content');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const connections = [];
let mouseX = 0;
let mouseY = 0;

// Button properties for collision detection
const buttonRect = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 150,
  height: 60,
  radius: 30
};

// Shockwave properties
let shockwaves = [];

// Terminal typing animation
const terminalText = `Hello,

I'm Dasun Sucharith, a marketing-tech-driven developer and automation strategist helping brands grow smarter with SEO, web development, and AI-powered marketing systems.

I specialize in creating digital experiences that not only look good—but work brilliantly behind the scenes too.

Get in touch: sucharith.dasun@gmail.com
LinkedIn: linkedin.com/in/dasun-sucharith`;

let currentIndex = 0;
let isTyping = false;

function typeText() {
  console.log('typeText called, currentIndex:', currentIndex, 'text length:', terminalText.length);
  
  if (currentIndex >= terminalText.length) {
    console.log('Typing complete, making links clickable');
    makeLinksClickable();
    return;
  }
  
  const currentChar = terminalText[currentIndex];
  console.log('Typing character:', currentChar, 'at index:', currentIndex);
  
  // Get current content without the cursor
  let currentContent = terminalContent.innerHTML.replace(/<span class="cursor">.*?<\/span>/g, '');
  
  if (currentChar === '\n') {
    currentContent += '<br>';
  } else {
    currentContent += currentChar;
  }
  
  // Add cursor back
  terminalContent.innerHTML = currentContent + '<span class="cursor">|</span>';
  
  currentIndex++;
  
  // Variable typing speed for more realistic effect
  const delay = currentChar === '\n' ? 500 : Math.random() * 50 + 50;
  
  setTimeout(() => {
    typeText();
  }, delay);
}

function makeLinksClickable() {
  let content = terminalContent.innerHTML;
  
  // Make email clickable
  content = content.replace(
    'sucharith.dasun@gmail.com',
    '<a href="mailto:sucharith.dasun@gmail.com" class="terminal-link">sucharith.dasun@gmail.com</a>'
  );
  
  // Make LinkedIn clickable
  content = content.replace(
    'linkedin.com/in/dasun-sucharith',
    '<a href="https://linkedin.com/in/dasun-sucharith" target="_blank" class="terminal-link">linkedin.com/in/dasun-sucharith</a>'
  );
  
  terminalContent.innerHTML = content;
}

function startTyping() {
  // Reset terminal content
  currentIndex = 0;
  isTyping = false;
  
  // Start typing after a short delay
  setTimeout(() => {
    // Start with empty content and cursor
    terminalContent.innerHTML = '<span class="cursor">|</span>';
    console.log('Starting typing animation...');
    console.log('Text to type:', terminalText);
    typeText();
  }, 1000);
}

class Shockwave {
  constructor(x, y) {
    this.centerX = x;
    this.centerY = y;
    this.radius = 0;
    this.maxRadius = Math.max(canvas.width, canvas.height) * 1.5;
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
    
    // Update hexagon opacities based on wave position
    this.hexagons.forEach(hex => {
      if (hex.distance <= this.radius) {
        // Hex is within the wave - make it visible
        const age = (this.radius - hex.distance) / this.speed;
        if (age < 10) {
          hex.opacity = Math.min(hex.maxOpacity, age / 10);
        } else {
          // Start fading out after being visible for a while
          const fadeAge = age - 10;
          hex.opacity = Math.max(0, hex.maxOpacity - (fadeAge / 20));
        }
      }
    });
  }

  draw() {
    ctx.save();
    ctx.shadowColor = '#00ffff';
    ctx.shadowBlur = 5;
    
    // Draw all visible hexagons
    this.hexagons.forEach(hex => {
      if (hex.opacity > 0) {
        ctx.strokeStyle = `rgba(0, 255, 255, ${hex.opacity})`;
        ctx.lineWidth = 1.5 * hex.opacity;
        this.drawHexagon(hex.x, hex.y, this.hexSize);
      }
    });
    
    ctx.restore();
  }

  drawHexagon(x, y, size) {
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
    // Check if all hexagons have faded out
    return this.hexagons.every(hex => hex.opacity <= 0) && this.radius > this.maxRadius * 0.5;
  }
}

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
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

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

    // Mouse/touch repulsion
    const distToMouse = Math.sqrt((this.x - mouseX) ** 2 + (this.y - mouseY) ** 2);
    if (distToMouse < 150 && mouseX > 0 && mouseY > 0) {
      const force = (150 - distToMouse) / 150;
      this.vx += (this.x - mouseX) * force * 0.01;
      this.vy += (this.y - mouseY) * force * 0.01;
    }

    // Button collision detection (rounded rectangle)
    const distToButtonCenter = Math.sqrt((this.x - buttonRect.x) ** 2 + (this.y - buttonRect.y) ** 2);
    
    // Check if particle is within button area
    const dx = Math.abs(this.x - buttonRect.x);
    const dy = Math.abs(this.y - buttonRect.y);
    
    if (dx <= (buttonRect.width / 2 + buttonRect.radius) && dy <= (buttonRect.height / 2 + buttonRect.radius)) {
      // Handle collision with rounded corners
      if (dx > buttonRect.width / 2 || dy > buttonRect.height / 2) {
        const cornerDx = dx - buttonRect.width / 2;
        const cornerDy = dy - buttonRect.height / 2;
        if (cornerDx * cornerDx + cornerDy * cornerDy <= buttonRect.radius * buttonRect.radius) {
          // Collision with rounded corner
          const angle = Math.atan2(this.y - buttonRect.y, this.x - buttonRect.x);
          this.vx = Math.cos(angle) * Math.abs(this.vx + this.vy) * 0.7;
          this.vy = Math.sin(angle) * Math.abs(this.vx + this.vy) * 0.7;
        }
      } else {
        // Collision with main rectangle
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

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    
    // Glow effect
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

for (let i = 0; i < 100; i++) {
  particles.push(new Particle());
}

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dist = Math.sqrt(
        (particles[i].x - particles[j].x) ** 2 + 
        (particles[i].y - particles[j].y) ** 2
      );
      
      if (dist < 100) {
        const opacity = (100 - dist) / 100 * 0.3;
        ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function drawHexGrid() {
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
}

function drawCustomCursor() {
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
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  drawHexGrid();
  
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });
  
  drawConnections();
  
  // Update and draw shockwaves
  shockwaves = shockwaves.filter(shockwave => {
    shockwave.update();
    shockwave.draw();
    return !shockwave.isDead();
  });
  
  drawCustomCursor();
  
  requestAnimationFrame(animate);
}

canvas.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  mouseX = touch.clientX;
  mouseY = touch.clientY;
});

canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  mouseX = touch.clientX;
  mouseY = touch.clientY;
});

canvas.addEventListener('touchend', (e) => {
  e.preventDefault();
  mouseX = 0;
  mouseY = 0;
});

// Button click event
startButton.addEventListener('click', (e) => {
  e.preventDefault();
  // Create shockwave at button center and show terminal immediately
  shockwaves.push(new Shockwave(buttonRect.x, buttonRect.y));
  startButton.classList.add('hidden');
  terminal.classList.remove('hidden');
  
  // Start typing animation
  startTyping();
});

// Terminal close button event
closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // Hide terminal
  terminal.classList.add('hidden');
  // Show start button again
  startButton.classList.remove('hidden');
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  buttonRect.x = canvas.width / 2;
  buttonRect.y = canvas.height / 2;
});

animate();