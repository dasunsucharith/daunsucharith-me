'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, Star, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'mobile', label: 'Mobile Apps' }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'ecommerce',
      description: 'A modern e-commerce platform built with Next.js and Stripe integration, featuring real-time inventory management and analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      date: '2024',
      client: 'TechStart Inc.',
      results: ['40% increase in conversions', '60% faster page loads', '99.9% uptime']
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      category: 'web',
      description: 'A comprehensive dashboard for SaaS businesses with analytics, user management, and billing integration.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Material-UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      date: '2024',
      client: 'DataFlow Solutions',
      results: ['50% reduction in admin time', 'Real-time analytics', 'Automated billing']
    },
    {
      id: 3,
      title: 'Restaurant Mobile App',
      category: 'mobile',
      description: 'A React Native app for restaurant ordering with real-time tracking and payment integration.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      date: '2023',
      client: 'Gourmet Bistro',
      results: ['300% increase in mobile orders', 'Real-time order tracking', '4.8 app store rating']
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'design',
      description: 'A stunning portfolio website for a creative agency with smooth animations and interactive elements.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Framer Motion', 'Sanity CMS', 'Vercel'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      date: '2023',
      client: 'Creative Studio',
      results: ['100% increase in leads', 'Award-winning design', 'Featured on design blogs']
    },
    {
      id: 5,
      title: 'Learning Management System',
      category: 'web',
      description: 'A comprehensive LMS with video streaming, progress tracking, and interactive quizzes.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      date: '2023',
      client: 'EduTech Platform',
      results: ['10,000+ active users', '95% completion rate', 'Mobile-responsive design']
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'A React Native fitness app with workout tracking, nutrition logging, and social features.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'Redux', 'Health Kit API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      date: '2023',
      client: 'FitLife Co.',
      results: ['50,000+ downloads', 'Social workout sharing', 'Health data integration']
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Work
            </h1>
            <p className="text-xl text-background/80 max-w-3xl mx-auto mb-8">
              Explore a collection of projects that showcase my expertise in web development, 
              design, and digital strategy.
            </p>
            <div className="flex items-center justify-center gap-8 text-background/80">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>50+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>5+ Years</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              A selection of my most impactful and innovative projects.
            </p>
          </motion.div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center text-text-secondary mb-4">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🚀</div>
                      <div className="text-sm">Project Screenshot</div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-2 text-accent mb-4">
                    <Star className="w-5 h-5" />
                    <span className="font-semibold">Featured Project</span>
                  </div>
                  <h3 className="text-3xl font-bold text-text-primary mb-4">{project.title}</h3>
                  <p className="text-text-secondary mb-6 text-lg">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2 text-text-secondary">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-background px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-gray-300 text-text-secondary px-6 py-3 rounded-full font-semibold hover:border-gray-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              All Projects
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              Browse through my complete portfolio of work across different categories.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-primary to-accent text-background'
                      : 'bg-surface text-text-secondary hover:bg-gray-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-surface rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gray-100 aspect-video flex items-center justify-center text-text-secondary relative overflow-hidden">
                    <div className="text-center">
                      <div className="text-4xl mb-2">💻</div>
                      <div className="text-sm">Project Preview</div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-surface text-text-primary p-3 rounded-full hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-surface text-text-primary p-3 rounded-full hover:scale-110 transition-transform"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-accent font-medium">{project.client}</span>
                      <span className="text-sm text-text-secondary">{project.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">{project.title}</h3>
                    <p className="text-text-secondary mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-text-secondary px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-100 text-text-secondary px-2 py-1 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent font-medium flex items-center gap-2 hover:gap-3 transition-all"
                      >
                        View Project
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Like What You See?
            </h2>
            <p className="text-xl text-background/80 mb-8">
              Let's create something amazing together. I'd love to hear about your next project.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-surface text-accent px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage