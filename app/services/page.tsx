'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Zap, Search, Globe, Shield, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'TypeScript', 'API Integration', 'Database Design', 'Performance Optimization'],
      price: 'Starting at $2,500',
      popular: false
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that convert visitors into customers and enhance user satisfaction.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing'],
      price: 'Starting at $1,500',
      popular: false
    },
    {
      icon: Zap,
      title: 'Full-Stack Solutions',
      description: 'Complete web solutions from concept to deployment, including frontend, backend, and database.',
      features: ['End-to-End Development', 'Cloud Deployment', 'Database Architecture', 'API Development', 'Maintenance & Support'],
      price: 'Starting at $4,000',
      popular: true
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      features: ['Technical SEO', 'Content Optimization', 'Performance Audit', 'Analytics Setup', 'Ongoing Monitoring'],
      price: 'Starting at $800',
      popular: false
    },
    {
      icon: Globe,
      title: 'E-Commerce Development',
      description: 'Powerful online stores that drive sales and provide exceptional shopping experiences.',
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Mobile Optimization', 'Security Features'],
      price: 'Starting at $3,500',
      popular: false
    },
    {
      icon: Shield,
      title: 'Website Maintenance',
      description: 'Keep your website secure, updated, and performing at its best with ongoing maintenance.',
      features: ['Security Updates', 'Performance Monitoring', 'Content Updates', 'Backup Management', '24/7 Support'],
      price: 'Starting at $300/month',
      popular: false
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business goals, target audience, and project requirements to create a strategic plan.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Creating wireframes, mockups, and detailed project specifications to ensure we\'re aligned on the vision.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building your solution with clean, efficient code while conducting thorough testing throughout the process.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Deploying your project to production and providing ongoing support to ensure continued success.'
    }
  ]

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, but most websites take 4-8 weeks from start to finish. I\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! I offer various maintenance packages to keep your website secure, updated, and performing optimally. Support includes security updates, content changes, and technical assistance.'
    },
    {
      question: 'Can you work with my existing brand and design?',
      answer: 'Absolutely! I can work with your existing brand guidelines and design assets, or help you develop new branding that aligns with your vision.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'I primarily work with React, Next.js, TypeScript, and modern web technologies. The specific tech stack depends on your project requirements and goals.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes! Every project is tailored to meet your specific needs. I don\'t use templates - everything is custom-built to match your requirements and brand.'
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
              Services That Drive Results
            </h1>
            <p className="text-xl text-brand-base/80 max-w-3xl mx-auto mb-8">
              From concept to launch, I provide comprehensive web development services 
              that help businesses grow and succeed online.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-brand-surface text-brand-strong px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              What I Can Do For You
            </h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              Comprehensive web development services tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`relative bg-brand-surface rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border-2 ${
                  service.popular ? 'border-brand-accent' : 'border-brand-muted'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-accent text-brand-base px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-strong rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-brand-base" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-brand-muted mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-brand-accent flex-shrink-0" />
                      <span className="text-brand-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-brand-muted pt-6">
                  <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                  <Link href="/contact">
                    <button className="w-full bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base py-3 rounded-full font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-brand-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My Process
            </h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              A proven methodology that ensures your project is delivered on time, 
              within budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-strong rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-brand-base">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-brand-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-brand-muted">
              Got questions? Here are answers to some common inquiries.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-brand-base/80 mb-8">
              Let's discuss your project and how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  className="bg-brand-surface text-brand-strong px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  className="border-2 border-white text-brand-base px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-surface hover:text-brand-strong transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage