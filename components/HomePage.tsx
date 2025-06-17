'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
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

  const shouldReduceMotion = useReducedMotion()



  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[100dvh] flex items-center justify-center bg-gradient-to-br from-brand-base via-brand-surface to-brand-base overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-strong/5 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-brand-primary/10 via-brand-accent/5 to-transparent rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-strong/10 via-brand-secondary/5 to-transparent rounded-full blur-2xl animate-bounce" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden will-change-transform">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-brand-accent/20 to-brand-strong/20 rounded-3xl backdrop-blur-sm"
            animate={shouldReduceMotion ? {} : {
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={shouldReduceMotion ? { duration: 0 } : {
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-tl from-brand-primary/20 to-brand-accent/20 rounded-full backdrop-blur-sm"
            animate={shouldReduceMotion ? {} : {
              rotate: [0, -360],
              scale: [1, 0.8, 1.2, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={shouldReduceMotion ? { duration: 0 } : {
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-tr from-brand-strong/20 to-brand-secondary/20 rounded-2xl backdrop-blur-sm"
            animate={shouldReduceMotion ? {} : {
              rotate: [0, 180, 360],
              scale: [1, 1.3, 0.9, 1],
              x: [0, -25, 25, 0],
              y: [0, -50, 0],
            }}
            transition={shouldReduceMotion ? { duration: 0 } : {
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Enhanced Infinity Background Animation */}
        <div className="absolute inset-0 overflow-hidden will-change-transform">
          {/* Multiple infinity symbols with scroll-reactive animations */}
          <motion.div
            className="absolute top-10 left-10 opacity-60 drop-shadow-2xl"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.05, 1],
              rotate: [0, 45, 0],
              filter: ["drop-shadow(0 0 20px rgba(255, 165, 134, 0.3))", "drop-shadow(0 0 40px rgba(255, 165, 134, 0.6))", "drop-shadow(0 0 20px rgba(255, 165, 134, 0.3))"]
            }}
            transition={shouldReduceMotion ? { duration: 0 } : {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          >
            <InfinitySymbol className="w-40 h-20" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/4 right-20 opacity-50 drop-shadow-xl"
            animate={shouldReduceMotion ? {} : {
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              filter: ["drop-shadow(0 0 15px rgba(181, 26, 43, 0.4))", "drop-shadow(0 0 30px rgba(181, 26, 43, 0.7))", "drop-shadow(0 0 15px rgba(181, 26, 43, 0.4))"]
            }}
            transition={shouldReduceMotion ? { duration: 0 } : {
              duration: 9,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <InfinitySymbol className="w-56 h-28" />
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-1/4 opacity-55 drop-shadow-lg"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.08, 1],
              rotate: [0, -45, 0],
              x: [-15, 15, -15],
              filter: ["drop-shadow(0 0 25px rgba(255, 165, 134, 0.5))", "drop-shadow(0 0 50px rgba(255, 165, 134, 0.8))", "drop-shadow(0 0 25px rgba(255, 165, 134, 0.5))"]
            }}
            transition={shouldReduceMotion ? { duration: 0 } : {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          >
            <InfinitySymbol className="w-48 h-24" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 right-10 opacity-45"
            animate={shouldReduceMotion ? {} : {
              rotate: [0, 180, 360],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={shouldReduceMotion ? { duration: 0 } : {
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <InfinitySymbol className="w-64 h-32" />
          </motion.div>

          <motion.div
            className="absolute bottom-10 right-1/3 opacity-50"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0],
            }}
            transition={shouldReduceMotion ? { duration: 0 } : {
              duration: 10,
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
          className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative space-y-6 p-8 rounded-3xl bg-gradient-to-br from-brand-surface/20 via-brand-base/30 to-brand-surface/20 backdrop-blur-xl border border-brand-accent/10 shadow-2xl">
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-accent/20 via-brand-strong/20 to-brand-accent/20 blur-xl animate-pulse"></div>
            <div className="relative space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white font-josefin bg-gradient-to-r from-brand-accent via-white to-brand-strong bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Hello!
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p 
                className="text-2xl md:text-4xl font-bold font-josefin bg-gradient-to-r from-white via-brand-accent to-brand-strong bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                I am Dasun Sucharith
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.p 
                className="text-[16px] text-white font-normal leading-relaxed drop-shadow-lg"
                initial={{ opacity: 0.8 }}
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  textShadow: [
                    "0 0 10px rgba(255, 255, 255, 0.3)",
                    "0 0 20px rgba(255, 165, 134, 0.4)",
                    "0 0 10px rgba(255, 255, 255, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                A marketing automation developer helping brands grow smarter with SEO, Web Development, and marketing automations.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-[16px] text-white font-normal leading-relaxed">
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
                  className="social-button ios-safe relative w-12 h-12 bg-brand-surface border-2 border-brand-accent rounded-full flex items-center justify-center text-white hover:text-brand-accent transition-all shadow-lg"
                  style={{
                    background: 'rgba(36, 47, 73, 0.9)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(255, 165, 134, 0.6)",
                    borderColor: "rgba(255, 165, 134, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(255, 165, 134, 0.2)",
                      "0 0 20px rgba(255, 165, 134, 0.4)",
                      "0 0 10px rgba(255, 165, 134, 0.2)"
                    ]
                  }}
                  transition={{
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Mail className="w-5 h-5 relative z-10" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/dasun-sucharith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button ios-safe relative w-12 h-12 bg-brand-surface border-2 border-brand-strong rounded-full flex items-center justify-center text-white hover:text-brand-strong transition-all shadow-lg"
                  style={{
                    background: 'rgba(36, 47, 73, 0.9)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(181, 26, 43, 0.6)",
                    borderColor: "rgba(181, 26, 43, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(181, 26, 43, 0.2)",
                      "0 0 20px rgba(181, 26, 43, 0.4)",
                      "0 0 10px rgba(181, 26, 43, 0.2)"
                    ]
                  }}
                  transition={{
                    boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                  }}
                >
                  <Linkedin className="w-5 h-5 relative z-10" />
                </motion.a>

                <motion.a
                  href="https://github.com/dasunsucharith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button ios-safe relative w-12 h-12 bg-brand-surface border-2 border-brand-accent rounded-full flex items-center justify-center text-white hover:text-brand-accent transition-all shadow-lg"
                  style={{
                    background: 'rgba(36, 47, 73, 0.9)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(255, 165, 134, 0.6)",
                    borderColor: "rgba(255, 165, 134, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(255, 165, 134, 0.2)",
                      "0 0 20px rgba(255, 165, 134, 0.4)",
                      "0 0 10px rgba(255, 165, 134, 0.2)"
                    ]
                  }}
                  transition={{
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                  }}
                >
                  <Github className="w-5 h-5 relative z-10" />
                </motion.a>
              </div>
            </motion.div>
            </div>
          </div>
        </motion.div>
      </section>



    </div>
  )
}

export default HomePage
