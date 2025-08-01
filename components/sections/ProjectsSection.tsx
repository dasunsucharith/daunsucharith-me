'use client'

import Link from 'next/link'
import { projects } from '../../lib/projects'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger, Flip)

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768)
      }
    }
    checkMobile()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkMobile)
      }
    }
  }, [])

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

  const getVisibleProjects = () => {
    const visibleProjects = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length
      visibleProjects.push({ ...projects[index], position: i })
    }
    return visibleProjects
  }

  const visibleProjects = getVisibleProjects()

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none none'
      }
    })

    tl.from('.heading-reveal', { opacity: 0, scale: 0.9, duration: 0.8 })
      .from('.divider-reveal', { width: 0, duration: 1.2, delay: 0.3 }, '<')
      .from('.subheading-reveal', { opacity: 0, y: 20, duration: 0.8, delay: 0.4 }, '<')

    const state = Flip.getState('.project-card')
    Flip.from(state, {
      duration: 0.6,
      ease: 'power2.inOut',
      stagger: 0.1,
      absolute: true,
    })

  }, { scope: sectionRef, dependencies: [currentIndex] })

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 bg-light-muted dark:bg-brand-base text-gray-800 dark:text-white overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-br from-light-accent/5 to-light-strong/3 dark:from-brand-accent/8 dark:to-brand-strong/4 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '0s' }}></div>
        <div className="absolute bottom-32 left-20 w-64 h-64 bg-gradient-to-tr from-light-strong/4 to-light-accent/2 dark:from-brand-strong/6 dark:to-brand-accent/3 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '15s', animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-light-accent/3 to-light-strong/2 dark:from-brand-accent/5 dark:to-brand-strong/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '20s', animationDelay: '10s' }}></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255, 165, 134, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 165, 134, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 heading-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-light-accent via-gray-800 to-light-accent dark:from-brand-accent dark:via-white dark:to-brand-accent font-josefin mb-4" style={{ textShadow: '0 0 20px rgba(255, 165, 134, 0.3)' }}>
            Featured Projects
          </h2>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-light-accent dark:via-brand-accent to-transparent mx-auto mb-6 divider-reveal"></div>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto subheading-reveal" style={{ fontSize: '16px' }}>
            A showcase of innovative solutions spanning marketing automation, web development, and digital strategy.
          </p>
        </div>

        <div ref={carouselRef} className="relative overflow-hidden">
          <div className="flex items-center justify-center min-h-[700px] md:min-h-[600px]">
            <div className="relative w-full max-w-7xl mx-auto">
              <button onClick={() => handleManualNavigation(goToPrev)} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-110" style={{ backdropFilter: 'blur(10px)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700 dark:text-gray-300 group-hover:text-light-accent dark:group-hover:text-brand-accent transition-colors duration-300">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button onClick={() => handleManualNavigation(goToNext)} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-110" style={{ backdropFilter: 'blur(10px)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700 dark:text-gray-300 group-hover:text-light-accent dark:group-hover:text-brand-accent transition-colors duration-300">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="flex items-center justify-center relative">
                {visibleProjects.map((project, index) => {
                  const isCenter = project.position === 1
                  const isLeft = project.position === 0
                  const isRight = project.position === 2
                  return (
                    <div key={`${project.slug}-${currentIndex}`} data-flip-id={project.slug} className={`project-card absolute ${isCenter ? 'z-10' : 'z-0'}`}>
                      <Link href={`/projects/${project.slug}`} className="block group relative">
                        <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-light-surface to-light-muted/50 dark:from-brand-surface dark:to-brand-base/50 backdrop-blur-sm border border-gray-200/20 dark:border-white/10 shadow-2xl group-hover:shadow-light-accent/20 dark:group-hover:shadow-brand-accent/20 transition-all duration-500 ${isCenter ? 'w-80 sm:w-96 md:w-[420px]' : 'w-64 sm:w-72 md:w-80'}`} style={{ backdropFilter: 'blur(20px)', boxShadow: isCenter ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(255, 165, 134, 0.1)' : '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                          <div className="relative overflow-hidden">
                            <img src={project.image} alt={project.title} className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${isCenter ? 'h-52 sm:h-60 md:h-64' : 'h-40 sm:h-48 md:h-52'}`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-light-surface/90 via-light-surface/20 to-transparent dark:from-brand-base/90 dark:via-brand-base/20 dark:to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className={`absolute top-4 right-4 bg-light-accent/20 dark:bg-brand-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center text-light-accent dark:text-brand-accent text-sm font-bold border border-light-accent/30 dark:border-brand-accent/30 ${isCenter ? 'w-10 h-10' : 'w-8 h-8'}`}>
                              {String(projects.findIndex(p => p.slug === project.slug) + 1).padStart(2, '0')}
                            </div>
                          </div>
                          <div className={`relative ${isCenter ? 'p-6' : 'p-4'}`}>
                            <h3 className={`font-bold text-gray-800 dark:text-white mb-3 group-hover:text-light-accent dark:group-hover:text-brand-accent transition-colors duration-300 ${isCenter ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`} style={{ fontFamily: 'var(--font-josefin)' }}>
                              {project.title}
                            </h3>
                            <p className={`text-gray-600 dark:text-white/70 mb-4 line-clamp-3 leading-relaxed ${isCenter ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>
                              {project.shortDescription}
                            </p>
                            <div className={`flex items-center text-light-accent dark:text-brand-accent font-semibold group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300 ${isCenter ? 'text-sm' : 'text-xs'}`}>
                              <span>View Project</span>
                              <span className="ml-2">→</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-light-accent/5 to-light-strong/5 dark:from-brand-accent/5 dark:to-brand-strong/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                          </div>
                          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong"></div>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12 space-x-3">
            {projects.map((_, index) => (
              <button key={index} onClick={() => handleManualNavigation(() => setCurrentIndex(index))} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-light-accent dark:bg-brand-accent scale-125 shadow-lg' : 'bg-gray-300 dark:bg-gray-600 hover:bg-light-accent/50 dark:hover:bg-brand-accent/50 hover:scale-110'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
