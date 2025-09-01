'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, ExternalLink, Tag, Globe } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  slug: string
  title: string
  description: string
  image: string
  url: string
}

interface ProjectPageClientProps {
  project: Project
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const pageRef = useRef<HTMLDivElement>(null)

  // Generate schema markup for the project
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: project.url,
    image: `https://daunsucharith.me${project.image}`,
    author: {
      '@type': 'Person',
      name: 'Dasun Sucharith',
      url: 'https://daunsucharith.me',
      sameAs: [
        'https://www.linkedin.com/in/dasun-sucharith/',
        'https://github.com/dasunsucharith',
        'https://twitter.com/dasunsucharith'
      ]
    },
    creator: {
      '@type': 'Person',
      name: 'Dasun Sucharith'
    },
    genre: 'Web Development',
    category: 'Technology',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://daunsucharith.me/projects/${project.slug}`
    }
  }

  useGSAP(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    const tl = gsap.timeline()

    tl.from('.nav-reveal', { opacity: 0, y: -20, duration: 0.6 })
      .from('.project-info-reveal', { opacity: 0, x: -40, duration: 0.8, delay: 0.2 }, '<')
      .from('.project-image-reveal', { opacity: 0, x: 40, scale: 0.9, duration: 0.8, delay: 0.4 }, '<')
      .from('.title-reveal', { opacity: 0, y: 30, duration: 0.8, delay: 0.3 }, '<')
      .from('.divider-reveal', { width: 0, duration: 1.2, delay: 0.5 }, '<')
      .from('.meta-reveal', { opacity: 0, y: 20, duration: 0.6, delay: 0.6, stagger: 0.1 }, '<')
      .from('.description-reveal', { opacity: 0, y: 20, duration: 0.6, delay: 0.7 }, '<')
      .from('.cta-reveal', { opacity: 0, y: 20, duration: 0.6, delay: 0.8 }, '<')

    gsap.from('.highlights-reveal', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: 0.9,
      scrollTrigger: {
        trigger: '.highlights-reveal',
        start: 'top 80%',
      },
    })

    gsap.to('.back-arrow-anim', { x: -4, repeat: -1, yoyo: true, duration: 2, ease: 'power1.inOut' })
    gsap.to('.visit-arrow-anim', { x: 4, repeat: -1, yoyo: true, duration: 2, ease: 'power1.inOut' })
    gsap.to('.more-arrow-anim', { x: 4, repeat: -1, yoyo: true, duration: 2, ease: 'power1.inOut' })
    gsap.to('.floating-accent-1', { y: -10, opacity: 0.8, repeat: -1, yoyo: true, duration: 4, ease: 'power1.inOut' })
    gsap.to('.floating-accent-2', { y: -8, opacity: 0.7, repeat: -1, yoyo: true, duration: 5, ease: 'power1.inOut', delay: 2 })

  }, { scope: pageRef })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-brand-base via-brand-surface to-brand-base text-white overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-accent/6 to-brand-strong/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s', animationDelay: '0s' }}></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-tl from-brand-strong/5 to-brand-accent/2 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '18s', animationDelay: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-brand-accent/4 to-brand-strong/2 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '22s', animationDelay: '12s' }}></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255, 165, 134, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 165, 134, 0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="relative z-10">
        <div className="pt-24 pb-8 nav-reveal">
          <div className="max-w-6xl mx-auto px-8">
            <Link href="/#projects" className="inline-flex items-center space-x-2 text-brand-accent hover:text-white transition-colors duration-300 group">
              <div className="back-arrow-anim">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="font-medium">Back to Projects</span>
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 project-info-reveal">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-brand-accent font-josefin mb-4 leading-tight title-reveal" style={{ textShadow: '0 0 30px rgba(255, 165, 134, 0.3)' }}>
                  {project.title}
                </h1>
                <div className="h-1 bg-gradient-to-r from-brand-accent to-brand-strong rounded-full divider-reveal"></div>
              </div>

              <div className="flex flex-wrap gap-4 meta-reveal">
                <div className="flex items-center space-x-2 px-4 py-2 bg-brand-accent/10 backdrop-blur-sm rounded-full border border-brand-accent/20">
                  <Tag className="w-4 h-4 text-brand-accent" />
                  <span className="text-white/80 text-sm font-medium">Featured Project</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-brand-strong/10 backdrop-blur-sm rounded-full border border-brand-strong/20">
                  <Globe className="w-4 h-4 text-brand-strong" />
                  <span className="text-white/80 text-sm font-medium">Live Project</span>
                </div>
              </div>

              <div className="space-y-4 description-reveal">
                <h2 className="text-xl font-semibold text-brand-accent font-josefin">About This Project</h2>
                <div className="prose prose-invert">
                  <p className="text-white/80 leading-relaxed whitespace-pre-line" style={{ fontSize: '16px' }}>
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 cta-reveal">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-brand-accent to-brand-strong text-white font-semibold rounded-xl relative overflow-hidden group shadow-xl transform transition-transform duration-300 hover:scale-105" style={{ background: 'linear-gradient(135deg, rgba(255, 165, 134, 0.9) 0%, rgba(181, 26, 43, 0.9) 100%)', backdropFilter: 'blur(20px)' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-strong opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative z-10">Visit Project</span>
                  <div className="relative z-10 visit-arrow-anim">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
                <Link href="/#projects" className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-brand-surface/60 backdrop-blur-sm text-brand-accent font-semibold rounded-xl border border-brand-accent/30 hover:border-brand-accent/60 hover:bg-brand-accent/10 transition-all duration-300 transform transition-transform duration-300 hover:scale-105">
                  <span>View More Projects</span>
                  <span className="more-arrow-anim">→</span>
                </Link>
              </div>
            </div>

            <div className="relative group project-image-reveal">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 to-brand-strong/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" style={{ transform: 'scale(1.05)' }}></div>
              <div className="relative transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm"
                  style={{ boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 165, 134, 0.1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-base/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-end p-6">
                  <div className="text-white">
                    <p className="font-semibold mb-1">Click to visit project</p>
                    <p className="text-sm text-white/70">Experience the live version</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-accent/60 rounded-full blur-sm floating-accent-1"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-brand-strong/50 rounded-full blur-sm floating-accent-2"></div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 pb-20 highlights-reveal">
          <div className="bg-gradient-to-br from-brand-surface/40 to-brand-base/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-brand-accent mb-6 font-josefin">Project Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-brand-accent/5 rounded-xl border border-brand-accent/10">
                <div className="w-12 h-12 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-brand-accent" />
                </div>
                <h4 className="font-semibold text-white mb-2">Live & Functional</h4>
                <p className="text-white/70 text-sm">Fully deployed and operational project</p>
              </div>
              <div className="text-center p-6 bg-brand-strong/5 rounded-xl border border-brand-strong/10">
                <div className="w-12 h-12 bg-brand-strong/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="w-6 h-6 text-brand-strong" />
                </div>
                <h4 className="font-semibold text-white mb-2">Modern Tech Stack</h4>
                <p className="text-white/70 text-sm">Built with cutting-edge technologies</p>
              </div>
              <div className="text-center p-6 bg-brand-accent/5 rounded-xl border border-brand-accent/10">
                <div className="w-12 h-12 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-brand-accent" />
                </div>
                <h4 className="font-semibold text-white mb-2">User-Focused</h4>
                <p className="text-white/70 text-sm">Designed for optimal user experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
