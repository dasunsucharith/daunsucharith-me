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

    tl.from('.heading-reveal', { 
      opacity: 0, 
      scale: 0.9, 
      duration: 0.8 
    })
    .from('.contact-info-reveal', { 
      opacity: 0, 
      x: -40, 
      duration: 0.8, 
      delay: 0.2 
    }, '<')
    .from('.form-reveal', { 
      opacity: 0, 
      x: 40, 
      duration: 0.8, 
      delay: 0.2 
    }, '<')

    // Continuous animations
    gsap.to('.send-arrow', { 
      x: 4, 
      repeat: -1, 
      yoyo: true, 
      duration: 2, 
      ease: 'power1.inOut' 
    })

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
    <section ref={sectionRef} id="contact" className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#0C0A0E' }}>
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
              Let's Work Together
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-primary-sky to-transparent mx-auto w-32 mb-6"></div>
            <p className="text-body-lg text-white/80 max-w-2xl mx-auto">
              Ready to bring your digital vision to life? Let's discuss how we can create something amazing together.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Contact Info Card */}
          <div className="contact-info-reveal">
            <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/8 transition-all duration-500">
              <h3 className="heading-subsection text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-primary-sky rounded-full mr-4 animate-pulse"></span>
                Get In Touch
              </h3>
              <p className="text-body-lg text-white/90 leading-relaxed mb-8">
                Whether you need <span className="text-primary-sky font-semibold">marketing automation</span>, web development, or digital strategy consulting, I'm here to help transform your ideas into reality.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-primary-sky/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary-sky/30 group-hover:border-primary-sky/60 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-primary-sky" />
                  </div>
                  <div>
                    <p className="text-white/60 text-body-sm">Email</p>
                    <p className="text-white font-medium text-body-lg">sucharith.dasun@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-primary-sky/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary-sky/30 group-hover:border-primary-sky/60 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-primary-sky" />
                  </div>
                  <div>
                    <p className="text-white/60 text-body-sm">Location</p>
                    <p className="text-white font-medium text-body-lg">Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-primary-sky/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary-sky/30 group-hover:border-primary-sky/60 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-primary-sky" />
                  </div>
                  <div>
                    <p className="text-white/60 text-body-sm">Response Time</p>
                    <p className="text-white font-medium text-body-lg">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="form-reveal">
            <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/8 transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="Your Name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:border-primary-sky/60 focus:outline-none transition-all duration-300 text-body"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="Your Email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:border-primary-sky/60 focus:outline-none transition-all duration-300 text-body"
                    />
                  </div>
                </div>
                <div>
                  <textarea 
                    name="message" 
                    required 
                    placeholder="Tell me about your project..." 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:border-primary-sky/60 focus:outline-none transition-all duration-300 resize-none text-body"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isLoading} 
                  className="btn-primary btn-glass w-full text-white bg-white/10 border-white/20 hover:bg-white/20 hover:border-primary-sky/50 group shadow-2xl rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="send-arrow group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-sky/10 to-primary-sky-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </button>
                
                {submitted && (
                  <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-xl backdrop-blur-sm">
                    <p className="text-green-400 font-medium text-body-lg">
                      ✨ Thanks for reaching out! I'll get back to you soon.
                    </p>
                  </div>
                )}
                
                {error && (
                  <div className="text-center p-4 bg-red-500/20 border border-red-500/30 rounded-xl backdrop-blur-sm">
                    <p className="text-red-400 font-medium text-body-lg">
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
