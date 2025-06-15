'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@dasunsucharith.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 77 123 4567',
      description: 'Call me during business hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Colombo, Sri Lanka',
      description: 'Available for local meetings'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

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
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Ready to start your project? Have a question? I'd love to hear from you. Let's create something amazing together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
          
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                  <p className="text-cyan-400 font-medium mb-1">{info.value}</p>
                  <p className="text-gray-300 text-sm">{info.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Quick Actions */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </motion.button>
            
            <motion.button
              className="w-full flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white py-3 px-6 rounded-xl font-semibold border border-white/20 hover:border-cyan-400 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Chat
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="lg:col-span-2"
          variants={itemVariants}
        >
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Your full name"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>
            </div>
            
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="What's this about?"
                required
              />
            </motion.div>
            
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project or question..."
                required
              />
            </motion.div>
            
            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ContactPage