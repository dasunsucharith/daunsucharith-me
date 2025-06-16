'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Palette, Zap, Users, Star, ChevronDown } from 'lucide-react'

const HomePage = () => {
  const skills = [
    { icon: Code, title: 'Development', description: 'Modern web applications with React, Next.js, and TypeScript' },
    { icon: Palette, title: 'Design', description: 'Beautiful, user-centered interfaces and experiences' },
    { icon: Zap, title: 'Performance', description: 'Fast, optimized websites that rank well on search engines' },
    { icon: Users, title: 'Strategy', description: 'Digital strategies that drive growth and engagement' },
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '20+', label: 'Technologies' },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Dasun delivered an exceptional website that exceeded our expectations. Professional, fast, and incredibly talented.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, DigitalFlow',
      content: 'Working with Dasun was a game-changer for our business. The results speak for themselves.',
      rating: 5
    },
    {
      name: 'Emma Wilson',
      role: 'Marketing Director, InnovateCorp',
      content: 'Amazing attention to detail and excellent communication throughout the project.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-brand-base overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-strong/20 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-glow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-accent/20 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-glow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-accent/10 to-brand-strong/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">
                Dasun
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-brand-muted mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A passionate <span className="font-semibold text-brand-accent">Developer</span> & <span className="font-semibold text-brand-strong">Digital Strategist</span> who crafts exceptional web experiences that drive results.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <motion.button 
                  className="bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:shadow-lg transition-all glow-primary hover:animate-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's Work Together
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button 
                  className="border-2 border-brand-muted text-brand-muted px-8 py-4 rounded-full font-semibold text-lg hover:border-brand-accent hover:text-brand-accent transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                </motion.button>
              </Link>
            </motion.div>

            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <ChevronDown className="w-8 h-8 text-brand-muted animate-bounce" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
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
              What I Do Best
            </h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              I combine technical expertise with creative vision to deliver exceptional digital solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="text-center p-6 rounded-2xl bg-brand-base hover:bg-brand-surface hover:glow-primary transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-strong rounded-2xl flex items-center justify-center mx-auto mb-4 glow-primary">
                  <skill.icon className="w-8 h-8 text-brand-base" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-brand-muted">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Track Record
            </h2>
            <p className="text-xl text-brand-base/80 max-w-2xl mx-auto">
              Numbers that showcase my commitment to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-brand-base/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Clients Say
            </h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-brand-surface p-8 rounded-2xl border border-brand-muted hover:glow-primary transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-accent fill-current" />
                  ))}
                </div>
                <p className="text-brand-muted mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-brand-muted text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-brand-muted mb-8">
              Let's discuss how I can help bring your vision to life with exceptional web solutions.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-gradient-to-r from-brand-accent to-brand-strong text-brand-base px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all glow-primary hover:animate-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage