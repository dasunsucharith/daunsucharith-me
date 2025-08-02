'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play, ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const PodcastSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none none'
      }
    })

    tl.from('.podcast-reveal', { 
      opacity: 0, 
      y: 40, 
      duration: 0.8, 
      stagger: 0.2 
    })

    gsap.from('.heading-reveal', {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.heading-reveal',
        start: 'top 80%',
      }
    })

    gsap.from('.image-reveal', {
      opacity: 0,
      scale: 0.8,
      y: 20,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.image-reveal',
        start: 'top 80%',
      }
    })

    // Continuous animations
    gsap.to('.youtube-arrow', { x: 4, repeat: -1, yoyo: true, duration: 2, ease: 'power1.inOut' })

  }, { scope: sectionRef })

  return (
    <>
      <section ref={sectionRef} id="podcast" className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#0C0A0E' }}>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary-sky/10 to-primary-sky-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '0s' }}></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-l from-primary-sky-dark/8 to-primary-sky/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-t from-primary-sky/8 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '6s' }}></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(14, 165, 233, 0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Single Podcast Card */}
          <div className="podcast-reveal">
            <div className="relative p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/8 transition-all duration-500 group">
              
              {/* Header */}
              <div className="text-center mb-8 heading-reveal">
                <h2 className="heading-hero text-transparent bg-clip-text bg-gradient-to-r from-primary-sky via-white to-primary-sky mb-4" style={{ textShadow: '0 0 20px rgba(14, 165, 233, 0.5)' }}>
                  Ehema Wenne AI?
                </h2>
                <div className="h-0.5 bg-gradient-to-r from-transparent via-primary-sky to-transparent mx-auto w-32 mb-6"></div>
                <p className="text-secondary text-primary-sky/80 font-medium">
                  The Sinhala Podcast Exploring the Future of Artificial Intelligence
                </p>
              </div>

              {/* Content Layout */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                
                {/* Podcast Image */}
                <div className="flex-shrink-0 image-reveal">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-sky/20 to-primary-sky-dark/20 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <img
                      src="/assets/files/ehema-wenne-ai.jpeg"
                      alt="Ehema Wenne AI Podcast"
                      className="relative w-64 h-auto md:w-80 md:h-auto object-contain rounded-3xl border border-white/20 shadow-2xl transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-sky rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-sky-light rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="space-y-6 text-white/90 leading-relaxed mb-8">
                    <p className="text-body-lg">
                      I co-host <span className="text-primary-sky font-semibold">Ehema Wenne AI?</span>, a YouTube podcast where we unpack the real-world impact of artificial intelligence—from tech breakthroughs to cultural shifts—all in Sinhala.
                    </p>
                    <p className="text-body-lg">
                      Whether you're curious, confused, or just want to stay ahead of the curve, this show makes <span className="text-primary-sky font-semibold">AI easy to understand and fun to explore</span>.
                    </p>
                  </div>
                  
                  <div className="flex justify-center lg:justify-start">
                    <a
                      href="https://www.youtube.com/@EhemaWenne-AI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary btn-glass inline-flex items-center gap-3 text-white bg-white/10 border-white/20 hover:bg-white/20 hover:border-primary-sky/50 group shadow-2xl rounded-2xl"
                    >
                      <Play className="w-4 h-4" fill="currentColor" />
                      <span className="relative z-10">Watch on YouTube</span>
                      <span className="youtube-arrow group-hover:translate-x-1 transition-transform duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-sky/10 to-primary-sky-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PodcastSection
