'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Youtube } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const YouTubeChannelSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none none'
      }
    })

    tl.from('.yt-reveal', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2
    })

    gsap.from('.yt-heading', {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.yt-heading',
        start: 'top 80%'
      }
    })

    gsap.from('.yt-image', {
      opacity: 0,
      scale: 0.92,
      y: 16,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.yt-image',
        start: 'top 80%'
      }
    })

    gsap.to('.yt-arrow', { x: 4, repeat: -1, yoyo: true, duration: 2, ease: 'power1.inOut' })

    // YouTube icon gentle pulse
    gsap.to('.yt-icon', { scale: 1.1, repeat: -1, yoyo: true, duration: 1.6, ease: 'power1.inOut', delay: 0.3 })

    // Button shine sweep
    gsap.to('.yt-shine', { xPercent: 240, repeat: -1, duration: 2.2, ease: 'power2.out', delay: 0.5 })

    // Gentle floating for background icons
    gsap.to('.yt-float-1', { y: 8, repeat: -1, yoyo: true, duration: 3, ease: 'sine.inOut' })
    gsap.to('.yt-float-2', { y: -6, repeat: -1, yoyo: true, duration: 2.8, ease: 'sine.inOut', delay: 0.2 })
    gsap.to('.yt-float-3', { y: 5, repeat: -1, yoyo: true, duration: 3.2, ease: 'sine.inOut', delay: 0.4 })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="youtube" className="relative py-24 text-gray-900 overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
      {/* subtle background accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-red-300/30 to-red-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-l from-red-400/25 to-red-300/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(239,68,68,0.45) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        {/* additional soft glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-b from-red-200/20 to-transparent blur-3xl"></div>

        {/* subtle angled stripes */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(239,68,68,0.2) 0px, rgba(239,68,68,0.2) 1px, transparent 1px, transparent 14px)' }}></div>

        {/* decorative YouTube icons */}
        <div className="absolute top-28 right-28 yt-float-1">
          <Youtube className="w-16 h-16 text-red-500/15 blur-[1px]" />
        </div>
        <div className="absolute bottom-24 left-24 yt-float-2">
          <Youtube className="w-12 h-12 text-red-500/10 blur-[0.5px]" />
        </div>
        <div className="absolute top-1/2 left-[12%] yt-float-3">
          <Youtube className="w-10 h-10 text-red-500/10" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="yt-reveal">
          <div className="relative p-8 md:p-12 rounded-3xl bg-white/70 backdrop-blur-xl border border-black/5 shadow-2xl hover:bg-white/90 transition-all duration-500">
            {/* Header */}
            <div className="text-center mb-8 yt-heading">
              <h2 className="heading-hero mb-4">
                Dasun Sucharith on <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-600 drop-shadow" style={{ textShadow: '0 0 16px rgba(239,68,68,0.35)' }}>YouTube</span>
              </h2>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto w-32 mb-6"></div>
              <p className="text-gray-900 font-medium">
                Weekly videos on marketing tech, automation, and practical dev tips
              </p>
            </div>

            {/* Content Layout */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Image */}
              <div className="flex-shrink-0 yt-image">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/30 to-red-500/30 rounded-3xl blur-xl opacity-30"></div>
                  <Image
                    src="/assets/Images/linkedin%20profile-new2.png"
                    alt="Dasun Sucharith YouTube Channel"
                    width={600}
                    height={600}
                    sizes="(max-width: 1024px) 50vw, 400px"
                    className="relative w-64 h-auto md:w-80 md:h-auto object-contain rounded-3xl border border-black/10 shadow-2xl"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="space-y-6 text-gray-800 leading-relaxed mb-8">
                  <p className="text-body-lg">
                    I create Sinhala content on <span className="text-primary-sky font-semibold">marketing automation, web development</span>, and the tools I use daily.
                  </p>
                  <p className="text-body-lg">
                    Join the channel to support the work and get early access and member-only perks.
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <a
                    href="https://www.youtube.com/channel/UCIgNRo3_Vb71hD4QRiz5jMg/join"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden inline-flex items-center gap-3 text-white bg-red-600 hover:bg-red-700 border border-red-600/30 group shadow-[0_10px_30px_rgba(239,68,68,0.35)] hover:shadow-[0_14px_40px_rgba(220,38,38,0.45)] rounded-2xl px-5 py-3 yt-cta"
                  >
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 yt-cta-glow" style={{ boxShadow: '0 0 40px rgba(239,68,68,0.45) inset' }}></span>
                    <Youtube className="w-4 h-4 yt-icon" fill="currentColor" />
                    <span className="relative z-10">Join Channel on YouTube</span>
                    <span className="yt-arrow relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                    <span className="yt-shine absolute left-[-40%] top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-12"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YouTubeChannelSection
