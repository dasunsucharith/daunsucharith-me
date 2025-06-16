'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, Mail, Linkedin, Github } from 'lucide-react'

const HomePage = () => {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const transitionRef = useRef(null)
  const timelineRef = useRef(null)
  const containerRef = useRef(null)
  
  // Hero section scroll tracking
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
    smooth: true
  })

  // Transition section scroll tracking for smooth fade effects
  const { scrollYProgress: transitionProgress } = useScroll({
    target: transitionRef,
    offset: ["start end", "end start"],
    layoutEffect: false
  })

  // Global scroll progress for timeline animation
  const { scrollYProgress: timelineProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    layoutEffect: false
  })
  
  // Subtle scroll-reactive transforms to prevent flickering
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -15], { clamp: false })
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -8], { clamp: false })
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -20], { clamp: false })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45], { clamp: false })
  const rotateReverse = useTransform(scrollYProgress, [0, 1], [0, -45], { clamp: false })
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 0.95], { clamp: false })
  const scale2 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.98, 1.08, 1], { clamp: false })
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.8, 0.6], { clamp: false })
  const opacity2 = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.6, 0.7, 0.65, 0.5], { clamp: false })
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 8], { clamp: false })
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -5], { clamp: false })

  // Transition scroll effects
  const heroContentOpacity = useTransform(transitionProgress, [0, 0.4, 0.8], [1, 0.6, 0], { clamp: false })
  const heroContentScale = useTransform(transitionProgress, [0, 0.6, 1], [1, 0.96, 0.92], { clamp: false })
  const heroContentY = useTransform(transitionProgress, [0, 1], [0, -80], { clamp: false })
  
  const aboutContentOpacity = useTransform(transitionProgress, [0.2, 0.5, 0.8], [0, 0.7, 1], { clamp: false })
  const aboutContentScale = useTransform(transitionProgress, [0, 0.4, 0.8], [0.92, 0.96, 1], { clamp: false })
  const aboutContentY = useTransform(transitionProgress, [0, 1], [60, 0], { clamp: false })
  
  // Growing line animation
  const lineWidth = useTransform(transitionProgress, [0.1, 0.9], [0, 100], { clamp: false })
  
  // Timeline vertical line height based on scroll progress
  const timelineHeight = useTransform(timelineProgress, [0, 1], [0, 100], { clamp: false })

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


  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '20+', label: 'Technologies' },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Dasun delivered an exceptional website that exceeded our expectations. Professional, fast, and incredibly talented.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, DigitalFlow',
      content: 'Working with Dasun was a game-changer for our business. The results speak for themselves.',
      rating: 5
    },
    {
      name: 'Emma Wilson',
      role: 'Marketing Director, InnovateCorp',
      content: 'Amazing attention to detail and excellent communication throughout the project.',
      rating: 5
    }
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-brand-base overflow-hidden">
        {/* Infinity Background Animation */}
        <div className="absolute inset-0 overflow-hidden will-change-transform">
          {/* Multiple infinity symbols with scroll-reactive animations */}
          <motion.div
            style={{ 
              y: y1,
              rotate: rotate,
              scale: scale1,
              opacity: opacity1,
              x: x1,
              willChange: "transform"
            }}
            className="absolute top-10 left-10"
            animate={{ 
              scale: [1, 1.05, 1],
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
            style={{ 
              y: y2,
              scale: scale2,
              opacity: opacity2,
              willChange: "transform"
            }}
            className="absolute top-1/4 right-20"
            animate={{ 
              rotate: [0, 360],
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
            style={{ 
              y: y3,
              rotate: rotateReverse,
              scale: scale1,
              x: x2,
              willChange: "transform"
            }}
            className="absolute bottom-20 left-1/4 opacity-55"
            animate={{ 
              scale: [1, 1.08, 1],
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
            style={{ 
              y: y1,
              scale: scale2,
              opacity: opacity1,
              willChange: "transform"
            }}
            className="absolute top-1/2 right-10"
            animate={{ 
              rotate: [0, 180, 360],
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
            style={{ 
              y: y2,
              rotate: rotate,
              scale: scale1,
              opacity: opacity2,
              x: x1,
              willChange: "transform"
            }}
            className="absolute bottom-10 right-1/3"
            animate={{ 
              scale: [1, 1.1, 1],
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
            style={{ 
              y: y1,
              scale: scale1,
              opacity: opacity1,
              willChange: "transform"
            }}
            className="absolute top-20 right-1/3 text-4xl"
            animate={{ 
              y: [-3, 3, -3],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          >
            💻
          </motion.div>

          <motion.div
            style={{ 
              y: y2,
              scale: scale2,
              rotate: rotateReverse,
              opacity: opacity2,
              willChange: "transform"
            }}
            className="absolute top-1/3 left-16 text-3xl"
            animate={{ 
              y: [-5, 5, -5],
            }}
            transition={{ 
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          >
            🚀
          </motion.div>

          <motion.div
            style={{ 
              y: y3,
              scale: scale1,
              rotate: rotate,
              opacity: opacity1,
              x: x2,
              willChange: "transform"
            }}
            className="absolute bottom-1/4 left-1/3 text-3xl"
            animate={{ 
              rotateZ: [0, 180, 360],
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
            style={{ 
              y: y1,
              scale: scale2,
              opacity: opacity2,
              willChange: "transform"
            }}
            className="absolute bottom-20 right-20 text-4xl"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            🎯
          </motion.div>

          <motion.div
            style={{ 
              y: y2,
              scale: scale1,
              opacity: opacity1,
              willChange: "transform"
            }}
            className="absolute top-2/3 right-1/2 text-3xl"
            animate={{ 
              rotate: [0, 360],
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
            style={{ 
              y: y3,
              scale: scale2,
              opacity: opacity2,
              willChange: "transform"
            }}
            className="absolute top-1/3 left-1/2 text-3xl"
            animate={{ 
              y: [-4, 4, -4],
              scale: [1, 1.08, 1],
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
          style={{
            opacity: heroContentOpacity,
            scale: heroContentScale,
            y: heroContentY
          }}
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

      {/* Timeline Container */}
      <div ref={timelineRef} className="relative bg-gradient-to-b from-brand-base to-brand-surface">
        {/* Vertical Timeline Line */}
        <motion.div
          className="absolute left-8 top-0 w-1 bg-gradient-to-b from-brand-accent to-brand-strong origin-top z-30"
          style={{
            height: `${timelineHeight}%`
          }}
        />

        {/* Timeline Sections */}
        <div className="relative pl-20">
          {/* About Section */}
          <section className="min-h-screen flex items-center py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -left-24 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-brand-accent to-brand-strong rounded-full border-4 border-brand-base shadow-lg z-40"
              />
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >

                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-josefin">
                      About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-strong mb-8"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-6"
                  >
                    <p className="text-lg md:text-xl text-white leading-relaxed">
                      With over 5 years of experience in digital marketing and web development, I specialize in creating 
                      comprehensive solutions that bridge the gap between beautiful design and powerful functionality.
                    </p>
                    
                    <p className="text-lg md:text-xl text-white font-normal leading-relaxed">
                      My journey began with a passion for understanding how technology can drive business growth. 
                      Today, I help brands automate their marketing processes, optimize their web presence, and 
                      create digital experiences that convert visitors into loyal customers.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-josefin">
                      Core Expertise
                    </h3>
                    <div className="space-y-3">
                      {['Web Development & Automation', 'SEO Optimization & Strategy', 'Marketing Automation Systems', 'UI/UX Design & Development'].map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-brand-accent to-brand-strong rounded-full flex-shrink-0"></div>
                          <span className="text-white font-medium text-lg">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-2 gap-6 pt-6"
                  >
                    <div className="p-4 bg-brand-base/50 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-brand-accent mb-1">5+</div>
                      <div className="text-sm text-brand-muted">Years Experience</div>
                    </div>
                    
                    <div className="p-4 bg-brand-base/50 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold text-brand-accent mb-1">50+</div>
                      <div className="text-sm text-brand-muted">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section className="min-h-screen flex items-center py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -left-24 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-brand-accent to-brand-strong rounded-full border-4 border-brand-base shadow-lg z-40"
              />
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >

                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-josefin">
                      Services
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-strong mb-8"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    {[
                      { title: 'Web Development', desc: 'Custom websites and web applications built with modern technologies' },
                      { title: 'SEO Optimization', desc: 'Boost your search rankings and drive organic traffic' },
                      { title: 'Marketing Automation', desc: 'Streamline your marketing processes with smart automation' },
                      { title: 'UI/UX Design', desc: 'Beautiful, user-friendly interfaces that convert' }
                    ].map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        className="p-6 bg-brand-base/50 rounded-xl backdrop-blur-sm border border-brand-muted/30 hover:border-brand-accent/50 transition-colors"
                      >
                        <h3 className="text-xl font-bold text-white mb-3 font-josefin">{service.title}</h3>
                        <p className="text-brand-muted leading-relaxed">{service.desc}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="pt-4"
                  >
                    <Link href="/contact">
                      <motion.button
                        className="bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all glow-primary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get Started
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="min-h-screen flex items-center py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -left-24 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-brand-accent to-brand-strong rounded-full border-4 border-brand-base shadow-lg z-40"
              />
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >

                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-josefin">
                      Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-strong mb-8"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-6"
                  >
                    <p className="text-lg md:text-xl text-white leading-relaxed">
                      Take a look at some of my recent work that showcases my expertise in web development, 
                      marketing automation, and digital strategy.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {[
                        { name: 'E-commerce Platform', tech: 'Next.js, Stripe, MongoDB' },
                        { name: 'Marketing Dashboard', tech: 'React, D3.js, Node.js' },
                        { name: 'SaaS Application', tech: 'TypeScript, PostgreSQL' },
                        { name: 'Portfolio Website', tech: 'Next.js, Tailwind CSS' }
                      ].map((project, index) => (
                        <motion.div
                          key={project.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                          className="p-4 bg-brand-base/50 rounded-xl backdrop-blur-sm border border-brand-muted/30"
                        >
                          <h4 className="text-lg font-bold text-white mb-2">{project.name}</h4>
                          <p className="text-sm text-brand-muted">{project.tech}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="pt-4"
                  >
                    <Link href="/projects">
                      <motion.button
                        className="bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all glow-primary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View All Projects
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="min-h-screen flex items-center py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -left-24 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-brand-accent to-brand-strong rounded-full border-4 border-brand-base shadow-lg z-40"
              />
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >

                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-josefin">
                      Let's Work Together
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-strong mb-8"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-6"
                  >
                    <p className="text-lg md:text-xl text-white leading-relaxed">
                      Ready to transform your digital presence? I'd love to hear about your project and discuss how we can bring your vision to life.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-bold text-white mb-4 font-josefin">Get In Touch</h3>
                        <div className="space-y-3">
                          <a href="mailto:sucharith.dasun@gmail.com" className="flex items-center space-x-3 text-brand-muted hover:text-brand-accent transition-colors">
                            <Mail className="w-5 h-5" />
                            <span>sucharith.dasun@gmail.com</span>
                          </a>
                          <a href="https://www.linkedin.com/in/dasun-sucharith/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-brand-muted hover:text-brand-accent transition-colors">
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn Profile</span>
                          </a>
                          <a href="https://github.com/dasunsucharith" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-brand-muted hover:text-brand-accent transition-colors">
                            <Github className="w-5 h-5" />
                            <span>GitHub Profile</span>
                          </a>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-bold text-white mb-4 font-josefin">What's Next?</h3>
                        <div className="space-y-3 text-brand-muted">
                          <p>• Free consultation call</p>
                          <p>• Project scope & timeline</p>
                          <p>• Custom proposal</p>
                          <p>• Let's build something amazing</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="pt-4"
                  >
                    <Link href="/contact">
                      <motion.button
                        className="bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all glow-primary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Start Your Project
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>


      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Track Record
            </h2>
            <p className="text-xl text-brand-base/80 max-w-2xl mx-auto">
              Numbers that showcase my commitment to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-brand-base/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-brand-surface p-8 rounded-2xl border border-brand-muted hover:glow-primary transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-accent fill-current" />
                  ))}
                </div>
                <p className="text-brand-muted mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-brand-muted text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-brand-muted mb-8">
              Let's discuss how I can help bring your vision to life with exceptional web solutions.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all glow-primary hover:animate-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage