'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, ArrowUp } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-brand-surface to-brand-base text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-br from-brand-accent/5 to-brand-strong/3 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '15s', animationDelay: '0s' }}></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-gradient-to-tl from-brand-strong/4 to-brand-accent/2 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '18s', animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-strong font-josefin mb-3">
                  Dasun Sucharith
                </h3>
                <p className="text-white/70 leading-relaxed max-w-md" style={{ fontSize: '16px' }}>
                  Marketing Automation Developer passionate about creating digital experiences that bridge the gap between marketing and technology.
                </p>
              </div>
              
              {/* Social links */}
              <div className="flex space-x-4">
                <motion.a
                  href="mailto:sucharith.dasun@gmail.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-brand-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-brand-accent/30 hover:border-brand-accent/60 hover:bg-brand-accent/30 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-brand-accent" />
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/dasun-sucharith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-brand-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-brand-accent/30 hover:border-brand-accent/60 hover:bg-brand-accent/30 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-brand-accent" />
                </motion.a>
                
                <motion.a
                  href="https://github.com/dasunsucharith"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-brand-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-brand-accent/30 hover:border-brand-accent/60 hover:bg-brand-accent/30 transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-brand-accent" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-brand-accent mb-4 font-josefin">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' },
                ].map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-brand-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-brand-accent mb-4 font-josefin">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <span className="text-white/70 text-sm">sucharith.dasun@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <span className="text-white/70 text-sm">Sri Lanka</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent mb-8"
          ></motion.div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © {currentYear} Dasun Sucharith. All rights reserved.
              </p>
              <p className="text-white/40 text-xs mt-1">
                Built with Next.js, TypeScript & Framer Motion
              </p>
            </div>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 px-4 py-2 bg-brand-accent/20 backdrop-blur-sm rounded-full border border-brand-accent/30 hover:border-brand-accent/60 hover:bg-brand-accent/30 transition-all duration-300 group"
            >
              <span className="text-brand-accent text-sm font-medium">Back to Top</span>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp className="w-4 h-4 text-brand-accent" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom gradient */}
        <div className="h-1 bg-gradient-to-r from-brand-accent via-brand-strong to-brand-accent"></div>
      </div>
    </footer>
  )
}

export default Footer