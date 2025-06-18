'use client'

import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section id="hero" className="w-full h-screen flex items-center bg-brand-base">
      <div className="max-w-3xl mx-auto px-6 space-y-6 text-left">
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
  )
}

export default HeroSection
