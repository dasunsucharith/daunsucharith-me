'use client'

import { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, MapPin, Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const sectionRef = useRef<HTMLElement>(null)

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
      .from('.contact-info-reveal', { opacity: 0, x: -40, duration: 0.8, delay: 0.2, stagger: 0.2 }, '<')
      .from('.form-reveal', { opacity: 0, x: 40, duration: 0.8, delay: 0.4 }, '<')

    gsap.to('.send-arrow', { x: 4, repeat: -1, yoyo: true, duration: 2, ease: 'power1.inOut' })

  }, { scope: sectionRef })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (error) setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        let errorMessage = 'Failed to send message';
        try {
          const data = await response.json();
          errorMessage = data.error || data.details || errorMessage;
        } catch {
          errorMessage = `Server error: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    } catch (error) {
      console.error('Error sending message:', error)
      setError(error instanceof Error ? error.message : 'Failed to send message')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 bg-light-muted dark:bg-brand-surface text-gray-800 dark:text-white overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-light-accent/5 to-light-strong/3 dark:from-brand-accent/8 dark:to-brand-strong/4 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-tl from-light-strong/4 to-light-accent/2 dark:from-brand-strong/6 dark:to-brand-accent/3 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 165, 134, 0.3) 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 heading-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-light-accent via-gray-800 to-light-accent dark:from-brand-accent dark:via-white dark:to-brand-accent font-josefin mb-4" style={{ textShadow: '0 0 20px rgba(255, 165, 134, 0.3)' }}>
            Let's Work Together
          </h2>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-light-accent dark:via-brand-accent to-transparent mx-auto mb-6 divider-reveal"></div>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto subheading-reveal" style={{ fontSize: '16px' }}>
            Ready to bring your digital vision to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 contact-info-reveal">
            <div>
              <h3 className="text-2xl font-bold text-light-accent dark:text-brand-accent mb-6 font-josefin">Get In Touch</h3>
              <p className="text-gray-600 dark:text-white/80 mb-8 leading-relaxed" style={{ fontSize: '16px' }}>
                Whether you need marketing automation, web development, or digital strategy consulting, I'm here to help transform your ideas into reality.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-light-accent/20 to-light-strong/20 dark:from-brand-accent/20 dark:to-brand-strong/20 rounded-full flex items-center justify-center border border-light-accent/30 dark:border-brand-accent/30 group-hover:border-light-accent/60 dark:group-hover:border-brand-accent/60 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-light-accent dark:text-brand-accent" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-white/60 text-sm">Email</p>
                  <p className="text-gray-800 dark:text-white font-medium">sucharith.dasun@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-light-accent/20 to-light-strong/20 dark:from-brand-accent/20 dark:to-brand-strong/20 rounded-full flex items-center justify-center border border-light-accent/30 dark:border-brand-accent/30 group-hover:border-light-accent/60 dark:group-hover:border-brand-accent/60 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-light-accent dark:text-brand-accent" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-white/60 text-sm">Location</p>
                  <p className="text-gray-800 dark:text-white font-medium">Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-light-accent/20 to-light-strong/20 dark:from-brand-accent/20 dark:to-brand-strong/20 rounded-full flex items-center justify-center border border-light-accent/30 dark:border-brand-accent/30 group-hover:border-light-accent/60 dark:group-hover:border-brand-accent/60 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-light-accent dark:text-brand-accent" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-white/60 text-sm">Response Time</p>
                  <p className="text-gray-800 dark:text-white font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative form-reveal">
            <div className="bg-gradient-to-br from-light-surface/80 to-light-muted/60 dark:from-brand-base/40 dark:to-brand-surface/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/20 dark:border-white/10 shadow-2xl" style={{ backdropFilter: 'blur(20px)' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input type="text" name="name" required placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-light-surface/60 dark:bg-brand-base/60 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-white/50 border border-gray-200/30 dark:border-white/20 focus:border-light-accent/60 dark:focus:border-brand-accent/60 focus:outline-none transition-all duration-300" style={{ fontSize: '16px' }} />
                  </div>
                  <div>
                    <input type="email" name="email" required placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-light-surface/60 dark:bg-brand-base/60 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-white/50 border border-gray-200/30 dark:border-white/20 focus:border-light-accent/60 dark:focus:border-brand-accent/60 focus:outline-none transition-all duration-300" style={{ fontSize: '16px' }} />
                  </div>
                </div>
                <div>
                  <textarea name="message" required placeholder="Tell me about your project..." rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-light-surface/60 dark:bg-brand-base/60 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-white/50 border border-gray-200/30 dark:border-white/20 focus:border-light-accent/60 dark:focus:border-brand-accent/60 focus:outline-none transition-all duration-300 resize-none" style={{ fontSize: '16px' }} />
                </div>
                <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong text-white font-semibold py-4 rounded-xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="send-arrow">→</span>
                      </>
                    )}
                  </span>
                </button>
                {submitted && (
                  <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-xl backdrop-blur-sm">
                    <p className="text-green-400 font-medium" style={{ fontSize: '16px' }}>
                      ✨ Thanks for reaching out! I'll get back to you soon.
                    </p>
                  </div>
                )}
                {error && (
                  <div className="text-center p-4 bg-red-500/20 border border-red-500/30 rounded-xl backdrop-blur-sm">
                    <p className="text-red-400 font-medium" style={{ fontSize: '16px' }}>
                      ⚠️ {error}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
