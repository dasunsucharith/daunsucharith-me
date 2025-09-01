import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'

const AnimatedTitle = () => {
  return (
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
      Marketing Automation Developer
    </h1>
  )
}

const HeroSection = () => {

  return (
    <>
      <section
        id="hero"
        className="w-full flex items-center justify-center relative overflow-hidden"
        style={{ position: 'relative', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/Images/night-sky-background.webp"
            alt="Night sky background"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
          />
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 z-10 bg-black/20" />
        {/* Gradient transition to about section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 z-15"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(12, 10, 14, 0.3) 40%, rgba(12, 10, 14, 0.7) 70%, #0F0D11 100%)'
          }}
        />
        <div className="max-w-4xl mx-auto px-8 space-y-8 text-center relative z-30 h-full flex flex-col justify-center hero-reveal">
          <div className="relative">
            <h2 className="text-xl md:text-2xl text-white mb-4 tracking-wide">
              Hello, I'm Dasun,
            </h2>
            <AnimatedTitle />
            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              helping brands grow with smarter SEO, web development, and automation.<br />
              Crafting digital experiences that look great and perform even better.
            </p>
          </div>
          <div className="mt-12">
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:sucharith.dasun@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/dasun-sucharith/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/dasunsucharith" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
