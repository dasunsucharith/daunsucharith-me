'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const HomePage = () => {
  // Prevent scrolling on homepage only
  useEffect(() => {
    // Only apply if we're on the homepage
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      
      return () => {
        document.body.style.overflow = 'auto'
        document.documentElement.style.overflow = 'auto'
      }
    }
  }, [])

  const InfinitySymbol = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 400 200" 
      className={className}
      fill="none"
    >
      <path
        d="M100 100C100 44.77 144.77 0 200 0C255.23 0 300 44.77 300 100C300 155.23 255.23 200 200 200C144.77 200 100 155.23 100 100ZM200 100C200 44.77 155.23 0 100 0C44.77 0 0 44.77 0 100C0 155.23 44.77 200 100 200C155.23 200 200 155.23 200 100Z"
        stroke="url(#gradient1)"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFA586" />
          <stop offset="50%" stopColor="#B51A2B" />
          <stop offset="100%" stopColor="#FFA586" />
        </linearGradient>
      </defs>
    </svg>
  )



  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-brand-base overflow-hidden">
        {/* Infinity Background Animation */}
        <div className="absolute inset-0 overflow-hidden will-change-transform">
          {/* Multiple infinity symbols with scroll-reactive animations */}
          <motion.div
            className="absolute top-10 left-10 opacity-60"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 45, 0],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          >
            <InfinitySymbol className="w-40 h-20" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/4 right-20 opacity-50"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <InfinitySymbol className="w-56 h-28" />
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-1/4 opacity-55"
            animate={{ 
              scale: [1, 1.08, 1],
              rotate: [0, -45, 0],
              x: [-15, 15, -15],
            }}
            transition={{ 
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          >
            <InfinitySymbol className="w-48 h-24" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 right-10 opacity-45"
            animate={{ 
              rotate: [0, 180, 360],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <InfinitySymbol className="w-64 h-32" />
          </motion.div>

          <motion.div
            className="absolute bottom-10 right-1/3 opacity-50"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0],
            }}
            transition={{ 
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          >
            <InfinitySymbol className="w-44 h-22" />
          </motion.div>

          {/* Scroll-Reactive Animated Emojis */}
          <motion.div
            className="absolute top-20 right-1/3 text-4xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            💻
          </motion.div>

          <motion.div
            className="absolute top-1/3 left-16 text-3xl"
            animate={{ 
              rotate: [0, -360],
            }}
            transition={{ 
              duration: 13,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            🚀
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 left-1/3 text-3xl"
            animate={{ 
              rotateZ: [0, 180, 360],
              scale: [1, 1.15, 1],
            }}
            transition={{ 
              duration: 11,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ⚡
          </motion.div>

          <motion.div
            className="absolute bottom-20 right-20 text-4xl"
            animate={{ 
              scale: [1, 0.9, 1.05, 1],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          >
            🎯
          </motion.div>

          <motion.div
            className="absolute top-2/3 right-1/2 text-2xl"
            animate={{ 
              rotate: [0, -360],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 9,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            🌟
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/2 text-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          >
            💡
          </motion.div>

          {/* Static Gradient overlays for better performance */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-accent/10 to-brand-strong/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-brand-strong/8 to-transparent rounded-full filter blur-2xl"></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-left"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white font-josefin">
                Hello!
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-2xl md:text-4xl font-bold text-white font-josefin">
                I am Dasun Sucharith
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-white font-normal leading-relaxed">
                A marketing automation developer helping brands grow smarter with SEO, Web Development, and marketing automations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg md:text-xl text-white font-normal leading-relaxed">
                I specialize in creating digital experiences that not only look good, but work brilliantly behind the scenes too.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8"
            >
              <div className="flex gap-6">
                <motion.a
                  href="mailto:sucharith.dasun@gmail.com"
                  className="w-12 h-12 bg-brand-surface border border-brand-muted rounded-full flex items-center justify-center text-white hover:text-brand-accent hover:border-brand-accent transition-all glow-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/dasun-sucharith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-brand-surface border border-brand-muted rounded-full flex items-center justify-center text-white hover:text-brand-accent hover:border-brand-accent transition-all glow-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://github.com/dasunsucharith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-brand-surface border border-brand-muted rounded-full flex items-center justify-center text-white hover:text-brand-accent hover:border-brand-accent transition-all glow-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>



    </div>
  )
}

export default HomePage