'use client'

import React, { useEffect, useState } from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import styles from '../../styles/HeroSection.module.css'

const AnimatedTitle = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const words = [
    { initial: 'M', full: 'Marketing' },
    { initial: 'A', full: 'Automation' },
    { initial: 'D', full: 'Developer' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 1500); // Wait 1.5 seconds before expanding

    return () => clearTimeout(timer);
  }, []);

  const AnimatedWord = ({ word, index }: { word: { initial: string; full: string }, index: number }) => {
    const [displayText, setDisplayText] = useState(word.initial);
    
    useEffect(() => {
      if (isExpanded) {
        const fullText = word.full;
        let currentIndex = 1; // Start from 1 since we already have the first letter
        
        const typeTimer = setInterval(() => {
          if (currentIndex <= fullText.length) {
            setDisplayText(fullText.substring(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typeTimer);
          }
        }, 100); // Typing speed
        
        return () => clearInterval(typeTimer);
      }
    }, [isExpanded, word.full]);

    return (
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="inline-block mr-4"
      >
        {displayText}
      </motion.span>
    );
  };

  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-brand-strong font-josefin mb-6 leading-tight"
      style={{
        textShadow: '0 0 30px rgba(255, 165, 134, 0.3)',
        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
      }}
    >
      {words.map((word, index) => (
        <AnimatedWord key={index} word={word} index={index} />
      ))}
    </motion.h1>
  );
};

const HeroSection = () => {
  useEffect(() => {
    const svg = document.getElementById('hero-bg-svg')
    const orb = document.getElementById('bg-orb')
    const orb2 = document.getElementById('bg-orb-2')
    const particles = document.querySelectorAll('.floating-particle')
    
    if (!svg || !orb) return
    
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = e.clientX / innerWidth
      const y = e.clientY / innerHeight
      
      // Main orb follows mouse more fluidly
      const cx = 960 + (x - 0.5) * 400
      const cy = 540 + (y - 0.5) * 300
      orb.setAttribute('cx', cx.toString())
      orb.setAttribute('cy', cy.toString())
      
      // Secondary orb moves in opposite direction
      if (orb2) {
        const cx2 = 960 - (x - 0.5) * 200
        const cy2 = 540 - (y - 0.5) * 150
        orb2.setAttribute('cx', cx2.toString())
        orb2.setAttribute('cy', cy2.toString())
      }
      
      // Animate floating particles
      particles.forEach((particle, index) => {
        const intensity = (index + 1) * 0.1
        const offsetX = (x - 0.5) * 50 * intensity
        const offsetY = (y - 0.5) * 30 * intensity
        const element = particle as HTMLElement
        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`
      })
    }
    
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <>
      {/* Hero section with Rive background */}
      <section
        id="hero"
        className="w-full flex items-center justify-center relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, var(--primary-color) 0%, #0f1419 50%, var(--primary-color) 100%)',
          position: 'relative', 
          minHeight: '100vh', 
          paddingTop: '5rem', 
          paddingBottom: '5rem' 
        }}
      >
        {/* Enhanced animated interactive background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            id="hero-bg-svg"
            width="100%"
            height="100%"
            viewBox="0 0 1920 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%' }}
          >
            <defs>
              <radialGradient
                id="bg-grad"
                cx="50%"
                cy="50%"
                r="60%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="#ffa586" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#ff6b4a" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#161e2f" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="bg-grad-2"
                cx="50%"
                cy="50%"
                r="40%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="#b51a2b" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#ff4757" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#161e2f" stopOpacity="0" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Primary interactive orb */}
            <circle
              id="bg-orb"
              cx="960"
              cy="540"
              r="300"
              fill="url(#bg-grad)"
              filter="url(#glow)"
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
            
            {/* Secondary orb for depth */}
            <circle
              id="bg-orb-2"
              cx="1200"
              cy="300"
              r="200"
              fill="url(#bg-grad-2)"
              style={{
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
            
            {/* Animated particles */}
            <g className="animate-pulse">
              <circle cx="300" cy="200" r="2" fill="#ffa586" opacity="0.6" className="floating-particle">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="1500" cy="800" r="1.5" fill="#ff6b4a" opacity="0.7" className="floating-particle">
                <animate attributeName="opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="200" cy="700" r="1" fill="#b51a2b" opacity="0.5" className="floating-particle">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="5s" repeatCount="indefinite"/>
              </circle>
            </g>
          </svg>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-brand-accent/10 to-transparent animate-pulse floating-particle" 
               style={{ animationDuration: '6s', animationDelay: '0s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-l from-brand-strong/15 to-transparent animate-pulse floating-particle" 
               style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-gradient-to-t from-brand-accent/8 to-transparent animate-pulse floating-particle" 
               style={{ animationDuration: '7s', animationDelay: '4s' }}></div>
        </div>
        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-8 space-y-8 text-center relative z-10 h-full flex flex-col justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-white/90 font-josefin mb-4 tracking-wide"
            >
              Hello, I'm Dasun,
            </motion.h2>
            <AnimatedTitle />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '16px' }}
            >
              helping brands grow with smarter SEO, web development, and automation.<br />
              Crafting digital experiences that look great and perform even better.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12"
          >
            <div className="flex gap-8 justify-center">
              <motion.a
                href="mailto:sucharith.dasun@gmail.com"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-r from-brand-accent to-brand-strong text-white w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                  <Mail className="w-5 h-5" />
                </div>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/dasun-sucharith/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: -5
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-r from-brand-accent to-brand-strong text-white w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                  <Linkedin className="w-5 h-5" />
                </div>
              </motion.a>
              <motion.a
                href="https://github.com/dasunsucharith"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-r from-brand-accent to-brand-strong text-white w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                  <Github className="w-5 h-5" />
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* Seamless color transition from hero to about */}
      <div className="relative h-24 overflow-hidden">
        {/* Smooth gradient blend between hero and about backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-color)] to-[var(--brand-surface)]"></div>
        
        {/* Subtle animated accent line */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 150 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent mx-auto"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
