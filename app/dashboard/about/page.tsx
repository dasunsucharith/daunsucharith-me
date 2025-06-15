'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, TrendingUp, Bot, BarChart3, Star, MapPin, Mail } from 'lucide-react'

const AboutPage = () => {
  const skills = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and applications',
      level: 95
    },
    {
      icon: TrendingUp,
      title: 'SEO & Marketing',
      description: 'Data-driven strategies for growth',
      level: 90
    },
    {
      icon: Bot,
      title: 'AI Integration',
      description: 'Intelligent automation solutions',
      level: 85
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Performance tracking and optimization',
      level: 88
    }
  ]

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '25+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Technologies', value: '20+' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      {/* Hero Section */}
      <motion.div 
        className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl"
        variants={itemVariants}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <motion.div 
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <MapPin className="text-cyan-400" />
              <span className="text-gray-300">Sri Lanka</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Welcome to My Digital Space
            </motion.h2>
            <motion.p 
              className="text-gray-300 leading-relaxed mb-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I'm Dasun Sucharith, a marketing-tech-driven developer and automation strategist 
              helping brands grow smarter with SEO, web development, and AI-powered marketing systems.
            </motion.p>
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <Star className="text-yellow-400 text-sm fill-current" />
                  </motion.div>
                ))}
                <span className="text-gray-300 ml-2">5.0 Rating</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                DS
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center border-4 border-white/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-white font-bold">✓</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        variants={itemVariants}
      >
        {stats.map(({ label, value }, index) => (
          <motion.div 
            key={label}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <motion.div 
              className="text-3xl font-bold text-cyan-400 mb-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              {value}
            </motion.div>
            <div className="text-gray-300 text-sm">{label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl"
        variants={itemVariants}
      >
        <motion.h3 
          className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
          What I Do
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(({ icon: Icon, title, description, level }, index) => (
            <motion.div 
              key={title}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.15 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="text-white w-6 h-6" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4">
                    {description}
                  </p>
                  
                  {/* Skill Level Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${level}%` }}
                      transition={{ delay: 1 + index * 0.2, duration: 1 }}
                    />
                  </div>
                  <div className="text-right text-cyan-400 text-xs mt-1">{level}%</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div 
        className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/30 text-center"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <motion.h3 
          className="text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          Ready to Start Your Project?
        </motion.h3>
        <motion.p 
          className="text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          Let's discuss how I can help bring your ideas to life
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <motion.button 
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-xl font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.button>
          <motion.button 
            className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:border-cyan-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default AboutPage