'use client'

import React, { useEffect } from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import styles from '../../styles/HeroSection.module.css'

const HeroSection = () => {
  useEffect(() => {
    const svg = document.getElementById('hero-bg-svg')
    const orb = document.getElementById('bg-orb')
    if (!svg || !orb) return
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = e.clientX / innerWidth
      const y = e.clientY / innerHeight
      const cx = 960 + (x - 0.5) * 300
      const cy = 540 + (y - 0.5) * 200
      orb.setAttribute('cx', cx.toString())
      orb.setAttribute('cy', cy.toString())
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <>
      {/* Hero section with Rive background */}
      <section
        id="hero"
        className="w-screen flex items-center justify-center relative overflow-x-hidden group"
        style={{ backgroundColor: 'var(--primary-color)', position: 'relative', minHeight: '600px', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        {/* Animated interactive background */}
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
                r="80%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="#ffa586" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#161e2f" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle
              id="bg-orb"
              cx="960"
              cy="540"
              r="400"
              fill="url(#bg-grad)"
              style={{
                transition: 'all 0.5s cubic-bezier(.4,2,.6,1)',
              }}
            />
          </svg>
        </div>
        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6 space-y-6 text-center relative z-10 h-full flex flex-col justify-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-white font-josefin mb-2"
          >
            Hello!
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-brand-accent font-josefin mb-4"
          >
            Marketing Automation Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-white mb-6"
          >
            helping brands grow with smarter SEO, web development, and automation.<br />
            Crafting digital experiences that look great and perform even better.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <div className="flex gap-6 justify-center">
              <motion.a
                href="mailto:sucharith.dasun@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 165, 134, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-brand-accent to-brand-strong text-white w-12 h-12 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden group shadow-md"
                style={{ background: 'linear-gradient(135deg, rgba(255, 165, 134, 0.9) 0%, rgba(181, 26, 43, 0.9) 100%)', backdropFilter: 'blur(20px)' }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/dasun-sucharith/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 165, 134, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-brand-accent to-brand-strong text-white w-12 h-12 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden group shadow-md"
                style={{ background: 'linear-gradient(135deg, rgba(255, 165, 134, 0.9) 0%, rgba(181, 26, 43, 0.9) 100%)', backdropFilter: 'blur(20px)' }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com/dasunsucharith"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 165, 134, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-brand-accent to-brand-strong text-white w-12 h-12 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden group shadow-md"
                style={{ background: 'linear-gradient(135deg, rgba(255, 165, 134, 0.9) 0%, rgba(181, 26, 43, 0.9) 100%)', backdropFilter: 'blur(20px)' }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* Curved SVG divider between Hero and About sections */}
      <div className="w-full overflow-hidden leading-none" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 120" width="100%" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block' }}>
          <defs>
            <linearGradient id="heroToAbout" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary-color)" />
              <stop offset="100%" stopColor="var(--brand-surface, #181f2f)" />
            </linearGradient>
          </defs>
          <path d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z" fill="url(#heroToAbout)" />
        </svg>
      </div>
    </>
  )
}

export default HeroSection
