'use client'

import React, { useEffect, useRef } from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const AnimatedTitle = () => {
  const titleRef = useRef(null)

  useGSAP(() => {
    gsap.to(titleRef.current, {
      duration: 2,
      text: "Marketing Automation Developer",
      ease: "none",
      repeat: -1,
      repeatDelay: 2,
      yoyo: true,
    })
  }, { scope: titleRef })

  return (
    <h1 ref={titleRef} className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-light-accent via-gray-800 to-light-strong dark:from-brand-accent dark:via-white dark:to-brand-strong font-josefin mb-6 leading-tight" style={{ textShadow: '0 0 30px rgba(255, 165, 134, 0.3)', filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))' }}></h1>
  )
}

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from('.hero-reveal', { opacity: 0, y: 40, duration: 0.8, stagger: 0.2 })

    const svg = document.getElementById('hero-bg-svg')
    const orb = document.getElementById('bg-orb')
    const orb2 = document.getElementById('bg-orb-2')
    const particles = document.querySelectorAll('.floating-particle')

    if (!svg || !orb) return

    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = e.clientX / innerWidth
      const y = e.clientY / innerHeight

      gsap.to(orb, { attr: { cx: 960 + (x - 0.5) * 400, cy: 540 + (y - 0.5) * 300 }, duration: 0.3, ease: 'power2.out' })
      if (orb2) {
        gsap.to(orb2, { attr: { cx: 960 - (x - 0.5) * 200, cy: 540 - (y - 0.5) * 150 }, duration: 0.4, ease: 'power2.out' })
      }

      particles.forEach((particle, index) => {
        const intensity = (index + 1) * 0.1
        const offsetX = (x - 0.5) * 50 * intensity
        const offsetY = (y - 0.5) * 30 * intensity
        gsap.to(particle, { x: offsetX, y: offsetY, duration: 0.5, ease: 'power1.out' })
      })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)

  }, { scope: sectionRef })

  return (
    <>
      <section
        ref={sectionRef}
        id="hero"
        className="w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-light-base via-light-muted to-light-base dark:bg-gradient-to-br dark:from-brand-base dark:via-brand-surface dark:to-brand-base"
        style={{ position: 'relative', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg id="hero-bg-svg" width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id="bg-grad" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" className="dark:stop-color-[#ffa586]" />
                <stop offset="50%" stopColor="#1e40af" stopOpacity="0.2" className="dark:stop-color-[#ff6b4a]" />
                <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" className="dark:stop-color-[#161e2f]" />
              </radialGradient>
              <radialGradient id="bg-grad-2" cx="50%" cy="50%" r="40%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.3" className="dark:stop-color-[#b51a2b]" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.15" className="dark:stop-color-[#ff4757]" />
                <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" className="dark:stop-color-[#161e2f]" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle id="bg-orb" cx="960" cy="540" r="300" fill="url(#bg-grad)" filter="url(#glow)" />
            <circle id="bg-orb-2" cx="1200" cy="300" r="200" fill="url(#bg-grad-2)" />
            <g className="animate-pulse">
              <circle cx="300" cy="200" r="2" fill="#3b82f6" opacity="0.6" className="floating-particle dark:fill-[#ffa586]">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="1500" cy="800" r="1.5" fill="#1e40af" opacity="0.7" className="floating-particle dark:fill-[#ff6b4a]">
                <animate attributeName="opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="200" cy="700" r="1" fill="#1e3a8a" opacity="0.5" className="floating-particle dark:fill-[#b51a2b]">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="5s" repeatCount="indefinite"/>
              </circle>
            </g>
          </svg>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-light-accent/10 to-transparent dark:from-brand-accent/10 dark:to-transparent animate-pulse floating-particle" style={{ animationDuration: '6s', animationDelay: '0s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-l from-light-strong/15 to-transparent dark:from-brand-strong/15 dark:to-transparent animate-pulse floating-particle" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-gradient-to-t from-light-accent/8 to-transparent dark:from-brand-accent/8 dark:to-transparent animate-pulse floating-particle" style={{ animationDuration: '7s', animationDelay: '4s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-8 space-y-8 text-center relative z-10 h-full flex flex-col justify-center hero-reveal">
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-white/90 font-josefin mb-4 tracking-wide hero-reveal">
              Hello, I'm Dasun,
            </h2>
            <AnimatedTitle />
            <p className="text-gray-600 dark:text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto hero-reveal" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '16px' }}>
              helping brands grow with smarter SEO, web development, and automation.<br />
              Crafting digital experiences that look great and perform even better.
            </p>
          </div>
          <div className="mt-12 hero-reveal">
            <div className="flex gap-8 justify-center">
              <a href="mailto:sucharith.dasun@gmail.com" className="relative group">
                <div className="relative bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong text-white w-12 h-12 rounded-full border-2 border-gray-300/30 dark:border-white/30 flex items-center justify-center shadow-2xl backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Mail className="w-5 h-5" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/dasun-sucharith/" target="_blank" rel="noopener noreferrer" className="relative group">
                <div className="relative bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong text-white w-12 h-12 rounded-full border-2 border-gray-300/30 dark:border-white/30 flex items-center justify-center shadow-2xl backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Linkedin className="w-5 h-5" />
                </div>
              </a>
              <a href="https://github.com/dasunsucharith" target="_blank" rel="noopener noreferrer" className="relative group">
                <div className="relative bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong text-white w-12 h-12 rounded-full border-2 border-gray-300/30 dark:border-white/30 flex items-center justify-center shadow-2xl backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
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
