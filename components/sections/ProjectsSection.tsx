'use client'

import Link from 'next/link'
import { projects } from '../../lib/projects'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({})
  const [isVisible, setIsVisible] = useState(false)


  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const section = document.getElementById('projects')
    if (section) observer.observe(section)
    
    return () => observer.disconnect()
  }, [])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const handleManualNavigation = (callback: () => void) => {
    setIsAutoPlaying(false)
    callback()
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }))
  }

  return (
    <section 
      id="projects" 
      className={`relative py-16 md:py-24 text-white transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} 
      style={{ backgroundColor: '#0C0A0E' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-primary-sky">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-sky mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            A showcase of innovative solutions spanning marketing automation, web development, and digital strategy.
          </p>
        </div>

        {/* Project Slider */}
        <div className="relative">
          {/* Main Project Display */}
          <div className="overflow-hidden rounded-2xl bg-white/5 border border-white/10">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.slug} className="w-full flex-shrink-0">
                  <Link href={`/projects/${project.slug}`} className="block group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative order-2 lg:order-1">
                        <div className="aspect-[4/3] lg:aspect-square relative overflow-hidden">
                          {!imageLoaded[index] && (
                            <div className="absolute inset-0 bg-white/5 animate-pulse flex items-center justify-center">
                              <div className="w-8 h-8 border-2 border-primary-sky border-t-transparent rounded-full animate-spin"></div>
                            </div>
                          )}
                          <Image 
                            src={project.image} 
                            alt={project.title}
                            width={800}
                            height={600}
                            onLoad={() => handleImageLoad(index)}
                            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                              imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                            }`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                          
                          {/* Project Number */}
                          <div className="absolute top-4 right-4 w-10 h-10 bg-primary-sky/90 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary-sky transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-white/80 leading-relaxed mb-8 text-base md:text-lg">
                          {project.shortDescription}
                        </p>
                        
                        <div className="inline-flex items-center gap-2 text-primary-sky font-medium group-hover:gap-4 transition-all duration-300">
                          <span>View Project</span>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transform group-hover:translate-x-1 transition-transform duration-300">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => handleManualNavigation(goToPrev)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 hover:border-primary-sky/50 rounded-full flex items-center justify-center text-white hover:text-primary-sky transition-all duration-300 z-10"
            aria-label="Previous project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          
          <button 
            onClick={() => handleManualNavigation(goToNext)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 border border-white/20 hover:border-primary-sky/50 rounded-full flex items-center justify-center text-white hover:text-primary-sky transition-all duration-300 z-10"
            aria-label="Next project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {projects.map((_, index) => (
            <button 
              key={index} 
              onClick={() => handleManualNavigation(() => setCurrentIndex(index))}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary-sky scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 max-w-xs mx-auto">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-sky to-primary-sky-light transition-all duration-500 ease-out"
              style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
            />
          </div>
          <div className="text-center mt-2 text-sm text-white/60">
            {currentIndex + 1} of {projects.length}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
