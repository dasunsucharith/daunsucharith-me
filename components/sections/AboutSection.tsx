'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 heading-reveal">
            <div className="inline-block p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
              <h2 className="heading-hero text-transparent bg-clip-text bg-gradient-to-r from-primary-sky via-white to-primary-sky mb-4" style={{ textShadow: '0 0 20px rgba(14, 165, 233, 0.5)' }}>
                About Me
              </h2>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-primary-sky to-transparent mx-auto w-32"></div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Profile Image Card */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-sky/20 to-primary-sky-dark/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <Image
                      src="/assets/dasun.webp"
                      alt="Dasun Sucharith"
                      width={320}
                      height={320}
                      className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border border-white/20 shadow-xl transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-sky rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-sky-light rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bio Card */}
            <div className="lg:col-span-2">
              <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/8 transition-all duration-500">
                <h3 className="heading-subsection text-white mb-6 flex items-center">
                  <span className="w-2 h-2 bg-primary-sky rounded-full mr-4 animate-pulse"></span>
                  Marketing Automation Developer
                </h3>
                <div className="space-y-4 text-white/90 leading-relaxed">
                  <p className="text-body-lg">
                    I'm currently working as a <span className="text-primary-sky font-semibold">Marketing Automation Developer</span> at Wavenet Pvt Ltd since October 2022. So yes, you could say I'm a developer with a marketer's mindset, combining code and strategy to solve real business problems.
                  </p>
                  <p className="text-body-lg">
                    With a background in <span className="text-primary-sky font-semibold">marketing automation, SEO, and web development</span>, I help brands create seamless digital systems, from high-converting email flows to fast, scalable websites and search-first content strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Cards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/8 hover:border-primary-sky/30 transition-all duration-500 group">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary-sky rounded-full mt-2 group-hover:animate-pulse"></div>
                <div>
                  <h4 className="heading-component text-white mb-4 group-hover:text-primary-sky transition-colors">My Approach</h4>
                  <p className="text-body text-white/90 leading-relaxed">
                    I work with a wide range of tools across marketing, SEO, AI, and web development, giving me the flexibility to plug into any part of a digital growth engine, technical or creative.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/8 hover:border-primary-sky/30 transition-all duration-500 group">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary-sky-light rounded-full mt-2 group-hover:animate-pulse"></div>
                <div>
                  <h4 className="heading-component text-white mb-4 group-hover:text-primary-sky transition-colors">My Philosophy</h4>
                  <p className="text-body text-white/90 leading-relaxed">
                    I believe great digital experiences aren't just beautiful, they're <span className="text-primary-sky font-semibold">purposeful, measurable, and built to evolve</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Card */}
          <div className="text-center">
            <div className="inline-block p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/8 transition-all duration-500">
              <p className="text-secondary text-white/90 mb-6">
                If you're looking for someone who can bridge the gap between marketing and tech, I'm your guy.
              </p>

              <a
                href="/assets/files/dasun%20sucharith%20CV%206172025.pdf"
                download
                className="btn-primary btn-glass inline-flex items-center gap-3 text-white bg-white/10 border-white/20 hover:bg-white/20 hover:border-primary-sky/50 group shadow-2xl rounded-2xl"
              >
                <span className="relative z-10">Download My CV</span>
                <span className="cv-arrow group-hover:translate-x-1 transition-transform duration-300">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-sky/10 to-primary-sky-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection
