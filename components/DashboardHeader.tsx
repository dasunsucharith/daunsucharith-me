'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Bell, Settings, Search } from 'lucide-react'

const DashboardHeader = () => {
  const pathname = usePathname()
  
  const getPageTitle = () => {
    const routes: { [key: string]: string } = {
      '/dashboard/about': 'About Me',
      '/dashboard/projects': 'Projects',
      '/dashboard/services': 'Services',
      '/dashboard/contact': 'Contact Me',
    }
    return routes[pathname] || 'Dashboard'
  }

  return (
    <header className="bg-white/10 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6 flex-1">
          <motion.h1
            className="text-3xl font-bold text-white font-mono"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {getPageTitle()}
          </motion.h1>
          
          <motion.div
            className="hidden md:flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 min-w-[250px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Search className="text-gray-400 mr-3 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white placeholder-gray-400 flex-1 outline-none"
            />
          </motion.div>
        </div>
        
        <div className="flex items-center gap-3">
          <motion.button
            className="bg-white/10 backdrop-blur-md border border-white/20 text-cyan-400 rounded-lg w-12 h-12 flex items-center justify-center hover:bg-white/20 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            className="bg-white/10 backdrop-blur-md border border-white/20 text-cyan-400 rounded-lg w-12 h-12 flex items-center justify-center hover:bg-white/20 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings className="w-5 h-5" />
          </motion.button>
          
          <motion.div
            className="ml-3 w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-white/20 cursor-pointer hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DS
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader