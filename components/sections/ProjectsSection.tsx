'use client'

import Link from 'next/link'
import { projects } from '../../lib/projects'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const handleManualNavigation = (callback: () => void) => {
    setIsAutoPlaying(false)
    callback()
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none none'
      }
    })

    tl.from('.heading-reveal', { 
      opacity: 0, 
      scale: 0.9, 
      duration: 0.8 
    })
    .from('.slider-reveal', { 
      opacity: 0, 
      y: 40, 
      duration: 0.8, 
      delay: 0.2 
    }, '<')

    // Animate slider on index change
    gsap.to('.slider-track', {
      x: `-${currentIndex * 100}%`,
      duration: 0.7,
      ease: 'power2.out'
    })

  }, { scope: sectionRef, dependencies: [currentIndex] })

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#0C0A0E' }}>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary-sky/10 to-primary-sky-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-l from-primary-sky-dark/8 to-primary-sky/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-t from-primary-sky/8 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '6s' }}></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(14, 165, 233, 0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 heading-reveal">
          <div className="inline-block p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <h2 className="heading-hero text-transparent bg-clip-text bg-gradient-to-r from-primary-sky via-white to-primary-sky mb-4" style={{ textShadow: '0 0 20px rgba(14, 165, 233, 0.5)' }}>
              Featured Projects
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-primary-sky to-transparent mx-auto w-32 mb-6"></div>
            <p className="text-body-lg text-white/80 max-w-2xl mx-auto">
              A showcase of innovative solutions spanning marketing automation, web development, and digital strategy.
            </p>
          </div>
        </div>

        {/* Modern Slider */}
        <div className="relative slider-reveal">
          <div ref={carouselRef} className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-8">
            
            {/* Navigation Buttons */}
            <button 
              onClick={() => handleManualNavigation(goToPrev)} 
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 btn-icon btn-glass bg-white/10 border-white/20 hover:bg-white/20 hover:border-primary-sky/50 group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white group-hover:text-primary-sky transition-colors duration-300">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            
            <button 
              onClick={() => handleManualNavigation(goToNext)} 
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 btn-icon btn-glass bg-white/10 border-white/20 hover:bg-white/20 hover:border-primary-sky/50 group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white group-hover:text-primary-sky transition-colors duration-300">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Slider Track */}
            <div className="slider-track flex">
              {projects.map((project, index) => (
                <div key={project.slug} className="flex-shrink-0 w-full px-4">
                  <Link href={`/projects/${project.slug}`} className="block group">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      
                      {/* Project Image */}
                      <div className="relative group/image">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-sky/20 to-primary-sky-dark/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                        <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-80 md:h-96 object-cover transform transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                          <div className="absolute top-4 right-4 bg-primary-sky/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-primary-sky text-sm font-bold border border-primary-sky/30">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-sky rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-sky-light rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>

                      {/* Project Content */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="heading-subsection text-white mb-4 group-hover:text-primary-sky transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-body-lg text-white/90 leading-relaxed mb-6">
                            {project.shortDescription}
                          </p>
                        </div>
                        
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-primary-sky/50 group/cta shadow-2xl transition-all duration-300">
                          <span className="text-white font-medium">View Project</span>
                          <span className="text-primary-sky group-hover/cta:translate-x-1 transition-transform duration-300">→</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-sky/10 to-primary-sky-dark/10 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        </div>
                      </div>

                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button 
                key={index} 
                onClick={() => handleManualNavigation(() => setCurrentIndex(index))} 
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary-sky scale-125 shadow-lg shadow-primary-sky/30' 
                    : 'bg-white/30 hover:bg-primary-sky/50 hover:scale-110'
                }`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
