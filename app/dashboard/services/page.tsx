'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, TrendingUp, Bot, BarChart3, Zap, Shield } from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Mobile First'],
      price: 'From $1,500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Complete digital marketing solutions to grow your online presence',
      features: ['SEO Strategy', 'Content Marketing', 'Social Media', 'PPC Campaigns'],
      price: 'From $800/month'
    },
    {
      icon: Bot,
      title: 'AI Integration',
      description: 'Implement AI solutions to automate and enhance your business processes',
      features: ['Chatbots', 'Automation', 'Data Analysis', 'Custom AI Solutions'],
      price: 'From $2,000'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track, analyze, and optimize your business performance with data',
      features: ['Custom Dashboards', 'Performance Tracking', 'A/B Testing', 'Reporting'],
      price: 'From $500/month'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your website and improve user experience',
      features: ['Site Speed Audit', 'Performance Tuning', 'CDN Setup', 'Monitoring'],
      price: 'From $800'
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Keep your website secure and up-to-date with ongoing maintenance',
      features: ['Security Audits', 'Regular Updates', 'Backup Solutions', '24/7 Monitoring'],
      price: 'From $300/month'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">My Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I offer a comprehensive range of digital services to help your business grow and succeed online
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <service.icon className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{service.description}</p>

            <ul className="space-y-2 mb-6">
              {service.features.map((feature, featureIndex) => (
                <motion.li
                  key={feature}
                  className="flex items-center text-sm text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.05 }}
                >
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
              <motion.button
                className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/30 text-center"
        variants={itemVariants}
      >
        <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Every business is unique. Let's discuss your specific needs and create a tailored solution that fits your budget and goals.
        </p>
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Consultation
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default ServicesPage