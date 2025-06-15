'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with AI-powered recommendations',
      image: 'https://via.placeholder.com/400x250',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      rating: 4.9,
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Marketing Dashboard',
      description: 'Real-time analytics dashboard for marketing campaigns',
      image: 'https://via.placeholder.com/400x250',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      rating: 4.8,
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool for social media',
      image: 'https://via.placeholder.com/400x250',
      technologies: ['Python', 'OpenAI API', 'Flask', 'React'],
      rating: 5.0,
      status: 'Completed'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
        <p className="text-gray-300">Showcasing my latest work and achievements</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-6 flex items-center justify-center">
              <div className="text-6xl font-bold text-white/20">
                {project.id}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 text-sm">{project.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs text-cyan-400 border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                }`}>
                  {project.status}
                </span>
                
                <div className="flex gap-2">
                  <motion.button
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 text-gray-400" />
                  </motion.button>
                  <motion.button
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default ProjectsPage