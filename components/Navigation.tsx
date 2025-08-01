'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Flip } from 'gsap/Flip'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

gsap.registerPlugin(Flip)

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: '/#hero', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ]

  useGSAP(() => {
    gsap.to('.nav-glow', {
      opacity: 0.6,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    gsap.to('.logo-shadow', {
      textShadow: '0 0 15px rgba(255, 165, 134, 0.5)',
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    gsap.to('.cta-shadow', {
      boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    gsap.to('.shine-effect', {
      x: '100%',
      duration: 2,
      repeat: -1,
      ease: 'linear',
      repeatDelay: 4
    })
  }, { scope: navRef })

  useGSAP(() => {
    const state = Flip.getState(mobileMenuRef.current)
    if (isMenuOpen) {
      gsap.fromTo(mobileMenuRef.current, 
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' }
      )
    } else {
      gsap.to(mobileMenuRef.current, 
        { opacity: 0, y: -20, scale: 0.95, duration: 0.4, ease: 'power2.in' }
      )
    }
    Flip.from(state, { duration: 0.4, ease: 'power2.inOut' })
  }, { dependencies: [isMenuOpen], scope: navRef })

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-light-surface/80 via-light-base/70 to-light-surface/80 dark:from-brand-base/80 dark:via-brand-surface/70 dark:to-brand-base/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-white/10 shadow-2xl">
      <div className="nav-glow absolute inset-0 bg-gradient-to-r from-light-accent/10 via-transparent to-light-strong/10 dark:from-brand-accent/10 dark:via-transparent dark:to-brand-strong/10 opacity-30" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <span className="logo-shadow text-xl font-bold text-gray-800 dark:text-white font-josefin relative z-10">
              Dasun Sucharith
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group text-gray-700 dark:text-white hover:text-light-accent dark:hover:text-brand-accent text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 bg-gradient-to-br from-light-muted/50 to-light-surface/50 dark:from-brand-surface/30 dark:to-brand-base/30 backdrop-blur-xl rounded-xl border border-gray-200/20 dark:border-white/10 flex items-center justify-center group overflow-hidden"
            >
              <div className="relative z-10">
                {mounted && (theme === 'dark' ? <Sun className="w-5 h-5 text-gray-700 dark:text-white" /> : <Moon className="w-5 h-5 text-gray-700 dark:text-white" />)}
              </div>
            </button>
            <Link href="#contact">
              <button
                className="cta-shadow bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong text-white px-6 py-2 rounded-full font-semibold text-sm backdrop-blur-xl border border-gray-300/20 dark:border-white/20 relative overflow-hidden group"
              >
                <div className="shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative z-10">Let's Talk</span>
              </button>
            </Link>
          </div>

          <button
            className="md:hidden relative w-12 h-12 bg-gradient-to-br from-light-muted/50 to-light-surface/50 dark:from-brand-surface/30 dark:to-brand-base/30 backdrop-blur-xl rounded-xl border border-gray-200/20 dark:border-white/10 flex items-center justify-center group overflow-hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="relative z-10">
              {isMenuOpen ? <X className="w-6 h-6 text-gray-800 dark:text-white" /> : <Menu className="w-6 h-6 text-gray-800 dark:text-white" />}
            </div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-brand-surface/95 via-brand-base/90 to-brand-surface/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(36, 47, 73, 0.95) 0%, rgba(36, 47, 73, 0.85) 50%, rgba(36, 47, 73, 0.95) 100%)',
              backdropFilter: 'blur(30px)',
              boxShadow: '0 0 40px rgba(255, 165, 134, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-accent/10 to-brand-strong/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-strong/10 to-brand-accent/10 rounded-full blur-xl" />
            </div>
            <div className="relative z-10 px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="relative px-4 py-3 rounded-xl bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm border border-white/10 hover:from-brand-accent/10 hover:to-brand-strong/10 hover:border-brand-accent/20 transition-all duration-300">
                      <span className="text-base font-medium transition-colors text-white group-hover:text-brand-accent">
                        {item.label}
                      </span>
                      <div className="shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl" />
                    </div>
                  </Link>
                </div>
              ))}
              <div className="pt-4">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-light-muted/50 to-light-surface/50 dark:from-white/5 dark:to-transparent backdrop-blur-sm border border-gray-200/20 dark:border-white/10 hover:from-light-accent/10 hover:to-light-strong/10 dark:hover:from-brand-accent/10 dark:hover:to-brand-strong/10 hover:border-light-accent/20 dark:hover:border-brand-accent/20 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-light-accent/20 to-light-strong/20 dark:from-brand-accent/20 dark:to-brand-strong/20 rounded-full flex items-center justify-center">
                    {mounted && (theme === 'dark' ? <Sun className="w-4 h-4 text-light-accent dark:text-brand-accent" /> : <Moon className="w-4 h-4 text-light-accent dark:text-brand-accent" />)}
                  </div>
                  <span className="text-base font-medium text-gray-700 dark:text-white">
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </span>
                </button>
              </div>
              <div className="pt-4">
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  <button
                    className="w-full bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong text-white px-6 py-4 rounded-2xl font-semibold text-base backdrop-blur-xl border border-gray-300/20 dark:border-white/20 relative overflow-hidden group shadow-lg"
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