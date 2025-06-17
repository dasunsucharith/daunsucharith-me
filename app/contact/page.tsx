'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@dasunsucharith.com',
      description: 'Send me an email anytime',
      link: 'mailto:hello@dasunsucharith.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 77 123 4567',
      description: 'Call me during business hours',
      link: 'tel:+94771234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Colombo, Sri Lanka',
      description: 'Available for local meetings',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'I typically respond quickly',
      link: null
    }
  ]

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Not sure yet'
  ]

  const timelineOptions = [
    'ASAP',
    '1-2 weeks',
    '1-2 months',
    '3-6 months',
    'No rush'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        budget: '',
        timeline: '',
        message: ''
      })
    }, 3000)
  }

  const faqs = [
    {
      question: 'How quickly can we start?',
      answer: 'I can typically start new projects within 1-2 weeks, depending on my current workload and project complexity.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! I work with clients worldwide and am comfortable with different time zones and communication preferences.'
    },
    {
      question: 'What\'s included in your services?',
      answer: 'Each project is tailored to your needs, but generally includes design, development, testing, deployment, and post-launch support.'
    }
  ]

  return (
    <div className="min-h-screen bg-brand-base">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-accent to-brand-strong text-brand-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-brand-base/80 max-w-3xl mx-auto mb-8">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can 
              bring your vision to life with exceptional web solutions.
            </p>
            <div className="flex items-center justify-center gap-8 text-brand-base/80">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Free Consultation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              Multiple ways to reach me. Choose whatever works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="text-center p-6 bg-brand-base rounded-2xl hover:bg-brand-surface hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-strong rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-brand-base" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-brand-strong font-medium hover:text-brand-accent transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-brand-strong font-medium">{info.value}</p>
                )}
                <p className="text-brand-muted text-sm mt-2">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-brand-base">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Project
            </h2>
            <p className="text-xl text-brand-muted">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            className="bg-brand-surface rounded-2xl shadow-sm p-8 lg:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-16 h-16 text-brand-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-brand-muted">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-muted mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-brand-muted rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-muted mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-brand-muted rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-muted mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-brand-muted rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors"
                    placeholder="What's your project about?"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-muted mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-brand-muted rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-muted mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-brand-muted rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-muted mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-brand-muted rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me more about your project, goals, and any specific requirements..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-brand-muted">
              Quick answers to questions you might have.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-brand-base rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-brand-muted">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
