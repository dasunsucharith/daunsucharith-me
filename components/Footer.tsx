'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Linkedin, Github, MapPin, ArrowUp } from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    tl.from('.footer-reveal', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2
    })

    gsap.from('.footer-divider', {
      scaleX: 0,
      scrollTrigger: {
        trigger: '.footer-divider',
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      duration: 1,
      delay: 0.6
    })

    gsap.from('.footer-bottom', {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: '.footer-bottom',
        start: 'top 95%',
        toggleActions: 'play none none none'
      },
      duration: 0.6,
      delay: 0.8
    })

    gsap.to('.back-to-top-arrow', {
      y: -2,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'power1.inOut'
    })

  }, { scope: footerRef })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-b from-light-muted to-light-surface dark:from-brand-surface dark:to-brand-base text-gray-800 dark:text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-br from-light-accent/5 to-light-strong/3 dark:from-brand-accent/5 dark:to-brand-strong/3 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '15s', animationDelay: '0s' }}></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-gradient-to-tl from-light-strong/4 to-light-accent/2 dark:from-brand-strong/4 dark:to-brand-accent/2 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '18s', animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand section */}
            <div className="lg:col-span-2 footer-reveal">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong font-josefin mb-3">
                  Dasun Sucharith
                </h3>
                <p className="text-gray-600 dark:text-white/70 leading-relaxed max-w-md" style={{ fontSize: '16px' }}>
                  Marketing Automation Developer passionate about creating digital experiences that bridge the gap between marketing and technology.
                </p>
              </div>
              
              {/* Social links */}
              <div className="flex space-x-4">
                <a
                  href="mailto:sucharith.dasun@gmail.com"
                  className="w-10 h-10 bg-light-accent/20 dark:bg-brand-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-light-accent/30 dark:border-brand-accent/30 hover:border-light-accent/60 dark:hover:border-brand-accent/60 hover:bg-light-accent/30 dark:hover:bg-brand-accent/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4 text-light-accent dark:text-brand-accent" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/dasun-sucharith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-light-accent/20 dark:bg-brand-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-light-accent/30 dark:border-brand-accent/30 hover:border-light-accent/60 dark:hover:border-brand-accent/60 hover:bg-light-accent/30 dark:hover:bg-brand-accent/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4 text-light-accent dark:text-brand-accent" />
                </a>
                
                <a
                  href="https://github.com/dasunsucharith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-light-accent/20 dark:bg-brand-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-light-accent/30 dark:border-brand-accent/30 hover:border-light-accent/60 dark:hover:border-brand-accent/60 hover:bg-light-accent/30 dark:hover:bg-brand-accent/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4 text-light-accent dark:text-brand-accent" />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="footer-reveal">
              <h4 className="text-lg font-semibold text-light-accent dark:text-brand-accent mb-4 font-josefin">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' },
                ].map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-white/70 hover:text-light-accent dark:hover:text-brand-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="footer-reveal">
              <h4 className="text-lg font-semibold text-light-accent dark:text-brand-accent mb-4 font-josefin">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-light-accent dark:text-brand-accent flex-shrink-0" />
                  <span className="text-gray-600 dark:text-white/70 text-sm">sucharith.dasun@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-light-accent dark:text-brand-accent flex-shrink-0" />
                  <span className="text-gray-600 dark:text-white/70 text-sm">Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-light-accent/30 dark:via-brand-accent/30 to-transparent mb-8 footer-divider"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 footer-bottom">
            <div className="text-center md:text-left">
              <p className="text-gray-500 dark:text-white/60 text-sm">
                © {currentYear} Dasun Sucharith. All rights reserved.
              </p>
              <p className="text-gray-400 dark:text-white/40 text-xs mt-1">
                Built with Next.js, TypeScript & GSAP
              </p>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-light-accent/20 dark:bg-brand-accent/20 backdrop-blur-sm rounded-full border border-light-accent/30 dark:border-brand-accent/30 hover:border-light-accent/60 dark:hover:border-brand-accent/60 hover:bg-light-accent/30 dark:hover:bg-brand-accent/30 transition-all duration-300 group transform hover:scale-110 hover:-translate-y-0.5"
            >
              <span className="text-light-accent dark:text-brand-accent text-sm font-medium">Back to Top</span>
              <div className="back-to-top-arrow">
                <ArrowUp className="w-4 h-4 text-light-accent dark:text-brand-accent" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="h-1 bg-gradient-to-r from-light-accent via-light-strong to-light-accent dark:from-brand-accent dark:via-brand-strong dark:to-brand-accent"></div>
      </div>
    </footer>
  )
}

export default Footer
