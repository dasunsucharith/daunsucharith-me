'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-24 bg-brand-surface text-white overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Floating background orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-brand-accent/8 to-brand-strong/4 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-tl from-brand-strong/6 to-brand-accent/3 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
             
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 165, 134, 0.3) 1px, transparent 0)',
               backgroundSize: '60px 60px'
             }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Enhanced heading section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-brand-accent font-josefin mb-4"
            style={{ textShadow: '0 0 20px rgba(255, 165, 134, 0.3)' }}
          >
            Let's Work Together
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-6"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 max-w-2xl mx-auto"
            style={{ fontSize: '16px' }}
          >
            Ready to bring your digital vision to life? Let's discuss how we can create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-brand-accent mb-6 font-josefin">Get In Touch</h3>
              <p className="text-white/80 mb-8 leading-relaxed" style={{ fontSize: '16px' }}>
                Whether you need marketing automation, web development, or digital strategy consulting, 
                I'm here to help transform your ideas into reality.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-brand-accent/20 to-brand-strong/20 rounded-full flex items-center justify-center border border-brand-accent/30 group-hover:border-brand-accent/60 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <p className="text-white font-medium">sucharith.dasun@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-brand-accent/20 to-brand-strong/20 rounded-full flex items-center justify-center border border-brand-accent/30 group-hover:border-brand-accent/60 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Location</p>
                  <p className="text-white font-medium">Sri Lanka</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-brand-accent/20 to-brand-strong/20 rounded-full flex items-center justify-center border border-brand-accent/30 group-hover:border-brand-accent/60 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Response Time</p>
                  <p className="text-white font-medium">Within 24 hours</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-brand-base/40 to-brand-surface/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
                 style={{ backdropFilter: 'blur(20px)' }}>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-brand-base/60 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:border-brand-accent/60 focus:outline-none transition-all duration-300"
                      style={{ fontSize: '16px' }}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-brand-base/60 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:border-brand-accent/60 focus:outline-none transition-all duration-300"
                      style={{ fontSize: '16px' }}
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <textarea
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-brand-base/60 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:border-brand-accent/60 focus:outline-none transition-all duration-300 resize-none"
                    style={{ fontSize: '16px' }}
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="w-full bg-gradient-to-r from-brand-accent to-brand-strong text-white font-semibold py-4 rounded-xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255, 165, 134, 0.9) 0%, rgba(181, 26, 43, 0.9) 100%)',
                    boxShadow: '0 8px 25px rgba(255, 165, 134, 0.3)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-strong opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </span>
                </motion.button>
                
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-xl backdrop-blur-sm"
                  >
                    <p className="text-green-400 font-medium" style={{ fontSize: '16px' }}>
                      ✨ Thanks for reaching out! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection