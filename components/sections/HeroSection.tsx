'use client'

import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

const AnimatedTitle = () => {
  return (
    <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl font-bold text-white font-josefin mb-6 leading-tight" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.3)', filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))' }}>
      Marketing Automation Developer
    </h1>
  )
}

const HeroSection = () => {

  return (
    <>
      <section
        id="hero"
        className="w-full flex items-center justify-center relative overflow-hidden"
        style={{ position: 'relative', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/Images/night-sky-background.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom' // Align bottom of image with bottom of section
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 z-10 bg-black/20" />
        {/* Gradient transition to about section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 z-15"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(12, 10, 14, 0.3) 40%, rgba(12, 10, 14, 0.7) 70%, #0F0D11 100%)'
          }}
        />
        <div className="max-w-4xl mx-auto px-8 space-y-8 text-center relative z-30 h-full flex flex-col justify-center hero-reveal">
          <div className="relative">
            <h2 className="hero-greeting text-2xl md:text-3xl font-bold text-white font-josefin mb-4 tracking-wide">
              Hello, I'm Dasun,
            </h2>
            <AnimatedTitle />
            <p className="hero-description text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '16px' }}>
              helping brands grow with smarter SEO, web development, and automation.<br />
              Crafting digital experiences that look great and perform even better.
            </p>
          </div>
          <div className="mt-12">
            <div className="flex gap-8 justify-center">
              <a href="mailto:sucharith.dasun@gmail.com" className="hero-social relative group">
                <div className="relative bg-white/15 text-white w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center shadow-2xl backdrop-blur-xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 hover:bg-white/25 hover:border-primary-sky/50">
                  <Mail className="w-5 h-5" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/dasun-sucharith/" target="_blank" rel="noopener noreferrer" className="hero-social relative group">
                <div className="relative bg-white/15 text-white w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center shadow-2xl backdrop-blur-xl transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 hover:bg-white/25 hover:border-primary-sky/50">
                  <Linkedin className="w-5 h-5" />
                </div>
              </a>
              <a href="https://github.com/dasunsucharith" target="_blank" rel="noopener noreferrer" className="hero-social relative group">
                <div className="relative bg-white/15 text-white w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center shadow-2xl backdrop-blur-xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 hover:bg-white/25 hover:border-primary-sky/50">
                  <Github className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
