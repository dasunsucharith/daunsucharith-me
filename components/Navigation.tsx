'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-light-surface/80 via-light-base/70 to-light-surface/80 dark:from-brand-base/80 dark:via-brand-surface/70 dark:to-brand-base/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-white/10 shadow-2xl">
      {/* Animated background glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-light-accent/10 via-transparent to-light-strong/10 dark:from-brand-accent/10 dark:via-transparent dark:to-brand-strong/10"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.span
              className="text-xl font-bold text-gray-800 dark:text-white font-josefin relative z-10"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 20px rgba(255, 165, 134, 0.6)"
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                textShadow: [
                  "0 0 10px rgba(255, 165, 134, 0.3)",
                  "0 0 15px rgba(255, 165, 134, 0.5)",
                  "0 0 10px rgba(255, 165, 134, 0.3)"
                ]
              }}
              transition={{
                textShadow: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Dasun Sucharith
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="relative w-10 h-10 bg-gradient-to-br from-light-muted/50 to-light-surface/50 dark:from-brand-surface/30 dark:to-brand-base/30 backdrop-blur-xl rounded-xl border border-gray-200/20 dark:border-white/10 flex items-center justify-center group overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255, 165, 134, 0.4)",
                borderColor: "rgba(255, 165, 134, 0.6)"
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
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <AnimatePresence mode="wait">
                {!mounted ? (
                  <motion.div
                    key="loading"
                    initial={{ rotate: 0, opacity: 1 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    className="relative z-10"
                  >
                    <Sun className="w-5 h-5 text-gray-700 dark:text-white" />
                  </motion.div>
                ) : theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-gray-700 dark:text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 text-gray-700 dark:text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            {/* CTA Button */}
            <Link href="#contact">
              <motion.button
                className="bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong text-white px-6 py-2 rounded-full font-semibold text-sm backdrop-blur-xl border border-gray-300/20 dark:border-white/20 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(59, 130, 246, 0.3)",
                    "0 0 25px rgba(59, 130, 246, 0.5)",
                    "0 0 15px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                style={{
                  backdropFilter: 'blur(20px)'
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 4
                  }}
                />
                <span className="relative z-10">Let's Talk</span>
              </motion.button>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-12 h-12 bg-gradient-to-br from-light-muted/50 to-light-surface/50 dark:from-brand-surface/30 dark:to-brand-base/30 backdrop-blur-xl rounded-xl border border-gray-200/20 dark:border-white/10 flex items-center justify-center group overflow-hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)",
              borderColor: "rgba(59, 130, 246, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(59, 130, 246, 0.2)",
                "0 0 20px rgba(59, 130, 246, 0.4)",
                "0 0 10px rgba(59, 130, 246, 0.2)"
              ]
            }}
            transition={{
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 4
              }}
            />
            
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <X className="w-6 h-6 text-gray-800 dark:text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile dropdown */}
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-brand-surface/95 via-brand-base/90 to-brand-surface/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.1
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(36, 47, 73, 0.95) 0%, rgba(36, 47, 73, 0.85) 50%, rgba(36, 47, 73, 0.95) 100%)',
                backdropFilter: 'blur(30px)',
                boxShadow: '0 0 40px rgba(255, 165, 134, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Animated background patterns */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-accent/10 to-brand-strong/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, 10, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-strong/10 to-brand-accent/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.5, 0.2],
                    x: [0, -8, 0],
                    y: [0, 8, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>
              
              <div className="relative z-10 px-6 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      href={item.href}
                      className="group relative block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.div
                        className="relative px-4 py-3 rounded-xl bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm border border-white/10 hover:from-brand-accent/10 hover:to-brand-strong/10 hover:border-brand-accent/20 transition-all duration-300"
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(255, 165, 134, 0.2)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-base font-medium transition-colors text-white group-hover:text-brand-accent">
                          {item.label}
                        </span>
                        
                        {/* Hover shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl"
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 3
                          }}
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Theme Toggle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: navItems.length * 0.1 + 0.1,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                >
                  <motion.button
                    onClick={toggleTheme}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl bg-gradient-to-r from-light-muted/50 to-light-surface/50 dark:from-white/5 dark:to-transparent backdrop-blur-sm border border-gray-200/20 dark:border-white/10 hover:from-light-accent/10 hover:to-light-strong/10 dark:hover:from-brand-accent/10 dark:hover:to-brand-strong/10 hover:border-light-accent/20 dark:hover:border-brand-accent/20 transition-all duration-300"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-light-accent/20 to-light-strong/20 dark:from-brand-accent/20 dark:to-brand-strong/20 rounded-full flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        {!mounted ? (
                          <Sun className="w-4 h-4 text-light-accent dark:text-brand-accent" />
                        ) : theme === 'dark' ? (
                          <motion.div
                            key="sun"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Sun className="w-4 h-4 text-light-accent dark:text-brand-accent" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="moon"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Moon className="w-4 h-4 text-light-accent dark:text-brand-accent" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <span className="text-base font-medium text-gray-700 dark:text-white">
                      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </span>
                  </motion.button>
                </motion.div>
                
                {/* Enhanced CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: navItems.length * 0.1 + 0.2,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  className="pt-4"
                >
                  <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                    <motion.button
                      className="w-full bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong text-white px-6 py-4 rounded-2xl font-semibold text-base backdrop-blur-xl border border-gray-300/20 dark:border-white/20 relative overflow-hidden group shadow-lg"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                          "0 0 30px rgba(59, 130, 246, 0.5)",
                          "0 0 20px rgba(59, 130, 246, 0.3)"
                        ]
                      }}
                      transition={{
                        boxShadow: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                      style={{
                        backdropFilter: 'blur(20px)'
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          repeatDelay: 3
                        }}
                      />
                      <span className="relative z-10">Let's Talk</span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
