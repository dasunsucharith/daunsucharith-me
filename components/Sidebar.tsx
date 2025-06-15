'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { User, Briefcase, Settings, Mail } from 'lucide-react'

const Sidebar = () => {
  const pathname = usePathname()
  const router = useRouter()

  const navigationItems = [
    { path: '/dashboard/about', icon: User, label: 'About Me' },
    { path: '/dashboard/projects', icon: Briefcase, label: 'Projects' },
    { path: '/dashboard/services', icon: Settings, label: 'Services' },
    { path: '/dashboard/contact', icon: Mail, label: 'Contact Me' },
  ]

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <div className="w-80 flex-shrink-0 bg-white/10 backdrop-blur-xl border-r border-white/20 relative z-10">
      {/* Profile Section */}
      <div className="p-6 border-b border-white/10">
        <div className="text-center">
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg shadow-cyan-500/30 border-2 border-white/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            DS
          </motion.div>
          <h3 className="text-xl font-semibold text-white mb-1">
            Dasun Sucharith
          </h3>
          <p className="text-cyan-400 font-mono text-sm">
            Developer & Strategist
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-4">
        <nav>
          {navigationItems.map(({ path, icon: Icon, label }) => {
            const isActive = pathname === path
            
            return (
              <motion.div
                key={path}
                className="px-2 mb-2"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => handleNavigation(path)}
                  className={`
                    w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300
                    border-l-4 
                    ${isActive 
                      ? 'border-l-cyan-400 bg-white/15 text-cyan-400' 
                      : 'border-l-transparent bg-transparent text-gray-400 hover:bg-white/10 hover:border-l-cyan-400 hover:text-cyan-400'
                    }
                  `}
                >
                  <Icon 
                    className={`
                      w-5 h-5 mr-3 transition-all duration-300
                      ${isActive ? 'text-cyan-400 scale-110' : 'text-gray-400'}
                    `}
                  />
                  <span className={`
                    text-base transition-all duration-300
                    ${isActive ? 'font-bold' : 'font-medium'}
                  `}>
                    {label}
                  </span>
                </button>
              </motion.div>
            )
          })}
        </nav>
      </div>

      {/* Bottom decoration */}
      <div className="p-6 border-t border-white/10">
        <p className="text-center text-gray-500 font-mono text-xs opacity-70">
          v2.0.1
        </p>
      </div>
    </div>
  )
}

export default Sidebar