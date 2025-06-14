import './style.css'

document.querySelector('#app').innerHTML = `
  <canvas id="futuristic-canvas"></canvas>
`

const canvas = document.getElementById('futuristic-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const connections = [];
let mouseX = 0;
let mouseY = 0;

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

    const distToMouse = Math.sqrt((this.x - mouseX) ** 2 + (this.y - mouseY) ** 2);
    if (distToMouse < 150) {
      const force = (150 - distToMouse) / 150;
      this.vx += (this.x - mouseX) * force * 0.01;
      this.vy += (this.y - mouseY) * force * 0.01;
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
  drawCustomCursor();
  
  requestAnimationFrame(animate);
}

canvas.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();