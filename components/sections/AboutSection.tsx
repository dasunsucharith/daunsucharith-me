'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none none'
      }
    })

    tl.from('.about-reveal', { 
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

    gsap.from('.divider-reveal', {
      width: 0,
      duration: 1.2,
      delay: 0.3,
      scrollTrigger: {
        trigger: '.divider-reveal',
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

    gsap.to('.particle-1', { y: -10, opacity: 1, repeat: -1, yoyo: true, duration: 3, ease: 'power1.inOut' })
    gsap.to('.particle-2', { y: -8, opacity: 0.8, repeat: -1, yoyo: true, duration: 4, ease: 'power1.inOut', delay: 1 })
    gsap.to('.cv-arrow', { x: 4, repeat: -1, yoyo: true, duration: 2, ease: 'power1.inOut' })

  }, { scope: sectionRef })

  return (
    <>
      <section ref={sectionRef} id="about" className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#0C0A0E' }}>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary-sky/10 to-primary-sky-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '0s' }}></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-l from-primary-sky-dark/8 to-primary-sky/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-t from-primary-sky/8 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '6s' }}></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(14, 165, 233, 0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <div className="text-center mb-12 heading-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-sky via-white to-primary-sky font-josefin mb-4" style={{ textShadow: '0 0 20px rgba(14, 165, 233, 0.5)' }}>
              About Me
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-primary-sky to-transparent mx-auto divider-reveal"></div>
          </div>

          <div className="relative mb-12 flex justify-center image-reveal">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-sky to-primary-sky-dark rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" style={{ transform: 'scale(1.1)' }}></div>
              <img
                src="/assets/dasun.png"
                alt="Dasun Sucharith"
                className="relative w-44 h-44 object-cover rounded-full border-4 border-primary-sky/60 shadow-2xl backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2"
                style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(14, 165, 233, 0.2)' }}
              />
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary-sky rounded-full particle-1"></div>
              <div className="absolute -bottom-1 -left-3 w-2 h-2 bg-primary-sky-dark rounded-full particle-2"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="leading-relaxed text-white/90 text-center max-w-3xl mx-auto about-reveal" style={{ fontSize: '16px', textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
              I'm currently working as a <span className="text-primary-sky font-semibold">Marketing Automation Developer</span> at Wavenet Pvt Ltd since October 2022. So yes, you could say I'm a developer with a marketer's mindset, combining code and strategy to solve real business problems.
            </p>
            <p className="leading-relaxed text-white/90 text-center max-w-3xl mx-auto about-reveal" style={{ fontSize: '16px', textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
              With a background in <span className="text-primary-sky font-semibold">marketing automation, SEO, and web development</span>, I help brands create seamless digital systems, from high-converting email flows to fast, scalable websites and search-first content strategies.
            </p>
            <p className="leading-relaxed text-white/90 text-center max-w-3xl mx-auto about-reveal" style={{ fontSize: '16px', textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
              I work with a wide range of tools across marketing, SEO, AI, and web development, giving me the flexibility to plug into any part of a digital growth engine, technical or creative.
            </p>
            <p className="leading-relaxed text-white/90 text-center max-w-3xl mx-auto font-medium about-reveal" style={{ fontSize: '16px', textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
              I believe great digital experiences aren't just beautiful, they're <span className="text-primary-sky">purposeful, measurable, and built to evolve</span>.
            </p>
            <p className="leading-relaxed text-white/90 text-center max-w-3xl mx-auto font-medium about-reveal" style={{ fontSize: '16px', textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
              If you're looking for someone who can bridge the gap between marketing and tech, I'm your guy.
            </p>
          </div>

          <div className="text-center mt-12 about-reveal">
            <a
              href="/assets/files/dasun%20sucharith%20CV%206172025.pdf"
              download
              className="relative inline-block px-8 py-3 rounded-full font-semibold text-sm text-white border-2 border-primary-sky/50 group overflow-hidden bg-gradient-to-r from-primary-sky to-primary-sky-dark transform transition-transform duration-300 hover:scale-105"
              style={{ backdropFilter: 'blur(20px)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-sky to-primary-sky-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
              <span className="relative z-10 flex items-center gap-2">
                <span>Download My CV</span>
                <span className="cv-arrow">→</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection
