'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={scrollToTop}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 10px 30px rgba(255, 165, 134, 0.4)" 
          }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-brand-accent to-brand-strong rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20 group"
          style={{ 
            background: 'linear-gradient(135deg, rgba(255, 165, 134, 0.9) 0%, rgba(181, 26, 43, 0.9) 100%)',
            backdropFilter: 'blur(20px)'
          }}
          aria-label="Back to top"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-strong opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full blur-md"></div>
          
          {/* Icon with animation */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.div>
          
          {/* Ripple effect on click */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            whileTap={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop