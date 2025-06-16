'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-base/90 backdrop-blur-md border-b border-brand-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-brand-accent to-brand-strong rounded-lg flex items-center justify-center glow-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-brand-base font-bold text-lg">DS</span>
            </motion.div>
            <span className="text-xl font-bold text-white">Dasun Sucharith</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group"
              >
                <span
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-brand-accent'
                      : 'text-brand-muted hover:text-brand-accent'
                  }`}
                >
                  {item.label}
                </span>
                {isActive(item.href) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <motion.button
                className="bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base px-6 py-2 rounded-full font-medium text-sm hover:shadow-lg transition-all glow-primary hover:glow-accent"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-brand-surface border-t border-brand-muted"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-base font-medium ${
                    isActive(item.href)
                      ? 'text-brand-accent'
                      : 'text-brand-muted'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base px-6 py-3 rounded-full font-medium text-sm mt-4 glow-primary">
                  Let's Talk
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation