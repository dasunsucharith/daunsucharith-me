'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Flip } from 'gsap/Flip'
import { Menu, X } from 'lucide-react'

gsap.registerPlugin(Flip)

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    
    // Handle scroll for glassmorphism effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/#hero', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ]

  useGSAP(() => {
    // Simple shine effect for CTA button
    gsap.to('.shine-effect', {
      x: '100%',
      duration: 2.5,
      repeat: -1,
      ease: 'linear',
      repeatDelay: 5
    })
  }, { scope: navRef })

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.fromTo(mobileMenuRef.current, 
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' }
      );
    } else {
      gsap.to(mobileMenuRef.current, 
        { opacity: 0, y: -20, scale: 0.95, duration: 0.4, ease: 'power2.in' }
      );
    }
  }, { dependencies: [isMenuOpen], scope: navRef });

  return (
    <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent border-b border-transparent'
      }`}>
      {(isScrolled || isMenuOpen) && (
        <div className="nav-glow absolute inset-0 bg-gradient-to-r from-primary-sky/5 via-transparent to-primary-sky/5 opacity-20" />
      )}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <span className={`nav-logo logo-shadow text-xl md:text-2xl font-bold font-josefin relative z-10 transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              Dasun Sucharith
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item relative group text-base md:text-lg font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-white/90 hover:text-primary-sky' 
                    : 'text-white/90 hover:text-primary-sky'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="#contact">
              <button
                className={`btn-primary btn-glass nav-cta cta-shadow relative overflow-hidden group ${
                isScrolled 
                  ? 'bg-white/10 border-primary-sky/50 shadow-lg text-white hover:bg-white/20' 
                  : 'bg-white/15 border-white/40 shadow-xl text-white hover:bg-white/25'
              }`}
              >
                <div className="shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative z-10">Let's Talk</span>
              </button>
            </Link>
          </div>

          <button
            className={`btn-icon btn-glass md:hidden relative rounded-xl group overflow-hidden ${
              isScrolled 
                ? 'bg-black/30 border-white/20' 
                : 'bg-white/10 border-white/30'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="relative z-10">
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed top-16 inset-x-0 bottom-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-2xl border-t border-white/10 shadow-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.9) 100%)',
              backdropFilter: 'blur(30px)',
              boxShadow: '0 0 40px rgba(14, 165, 233, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-sky/20 to-primary-sky-light/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-sky-light/10 to-primary-sky/20 rounded-full blur-xl" />
            </div>
            <div className="relative z-10 px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="relative px-4 py-3 rounded-xl bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm border border-white/10 hover:from-primary-sky/20 hover:to-primary-sky-light/10 hover:border-primary-sky/30 transition-all duration-300">
                      <span className="text-body-lg font-medium transition-colors text-white group-hover:text-primary-sky">
                        {item.label}
                      </span>
                      <div className="shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl" />
                    </div>
                  </Link>
                </div>
              ))}
              <div className="pt-4">
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  <button
                    className="w-full bg-white/15 text-white px-6 py-4 rounded-2xl font-semibold text-body-lg backdrop-blur-xl border border-primary-sky/40 relative overflow-hidden group shadow-lg hover:bg-white/25 transition-all duration-300"
                  >
                    <div className="shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <span className="relative z-10">Let's Talk</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navigation