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
        className="w-screen h-screen flex items-center relative overflow-x-hidden group"
        style={{ backgroundColor: 'var(--primary-color)', position: 'relative' }}
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
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-left relative z-10 h-full flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-brand-accent font-josefin"
          >
            Hello!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold text-white font-josefin"
          >
            I'm Dasun Sucharith
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-white"
          >
            A marketing automation developer helping brands grow smarter with SEO, Web Development, and marketing automations.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-white"
          >
            I specialize in creating digital experiences that not only look good, but work brilliantly behind the scenes too.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <div className="flex gap-6">
              <motion.a
                href="mailto:sucharith.dasun@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="social-button ios-safe w-12 h-12 bg-brand-surface border-2 border-brand-accent rounded-full flex items-center justify-center text-white"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/dasun-sucharith/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="social-button ios-safe w-12 h-12 bg-brand-surface border-2 border-brand-strong rounded-full flex items-center justify-center text-white"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com/dasunsucharith"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="social-button ios-safe w-12 h-12 bg-brand-surface border-2 border-brand-accent rounded-full flex items-center justify-center text-white"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
