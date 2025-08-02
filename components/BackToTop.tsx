'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowUp } from 'lucide-react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)

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

  useGSAP(() => {
    if (isVisible) {
      gsap.to(buttonRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'spring.out(1, 0.5, 0.7, 0.5)',
      })
    } else {
      gsap.to(buttonRef.current, {
        opacity: 0,
        scale: 0,
        y: 20,
        duration: 0.3,
        ease: 'spring.in(1, 0.5, 0.7, 0.5)',
      })
    }
  }, [isVisible])

  useGSAP(() => {
    gsap.to(arrowRef.current, {
      y: -5,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: 'power1.inOut',
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, { 
      scale: 1.1, 
      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
      duration: 0.3 
    })
  }

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, { 
      scale: 1, 
      boxShadow: 'none', 
      duration: 0.3 
    })
  }

  const handleTap = () => {
    gsap.to(buttonRef.current, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 })
  }

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleTap}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-300/20 dark:border-white/20 group"
      style={{
        backdropFilter: 'blur(20px)',
        opacity: 0,
        transform: 'scale(0) translateY(20px)'
      }}
      aria-label="Back to top"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full blur-md"></div>
      <div ref={arrowRef} className="relative z-10">
        <ArrowUp className="w-6 h-6 text-white" />
      </div>
    </button>
  )
}

export default BackToTop
