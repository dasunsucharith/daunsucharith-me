'use client'

import { motion } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'

const PodcastSection = () => {
  return (
    <>
      <section id="podcast" className="relative py-24 bg-gradient-to-br from-light-base to-light-surface dark:from-brand-base dark:to-brand-surface text-gray-800 dark:text-white overflow-hidden">
        {/* Enhanced background with floating elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Floating background orbs */}
          <div className="absolute top-16 right-16 w-72 h-72 bg-gradient-to-r from-green-500/10 to-blue-500/5 rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          <div className="absolute bottom-16 left-16 w-56 h-56 bg-gradient-to-l from-purple-500/8 to-green-400/5 rounded-full blur-2xl animate-pulse" 
               style={{ animationDuration: '12s', animationDelay: '5s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-t from-blue-500/8 to-transparent rounded-full blur-xl animate-pulse" 
               style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
               
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.3) 1px, transparent 0)',
                 backgroundSize: '50px 50px'
               }}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-8 relative z-10"
        >
          {/* Banner-style layout */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-blue-500/20 backdrop-blur-sm"></div>
            
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Podcast Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative flex-shrink-0"
              >
                <div className="relative group">
                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-light-strong dark:from-green-400 dark:to-blue-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" 
                       style={{ transform: 'scale(1.1)' }}></div>
                  
                  {/* Podcast banner image */}
                  <motion.img
                    src="/assets/files/ehema-wenne-ai.jpeg"
                    alt="Ehema Wenne AI Podcast"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-72 h-auto md:w-80 md:h-auto object-contain rounded-2xl border-2 border-light-accent/40 dark:border-green-400/40 shadow-2xl"
                    style={{ 
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(34, 197, 94, 0.2)' 
                    }}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mb-6"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-light-accent via-gray-800 to-light-strong dark:from-green-400 dark:via-white dark:to-blue-400 font-josefin mb-2"
                    style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.3)' }}
                  >
                    Ehema Wenne AI?
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-light-accent/80 dark:text-green-300/80 font-medium text-lg mb-2"
                  >
                    The Sinhala Podcast Exploring the Future of Artificial Intelligence
                  </motion.p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-gray-700 dark:text-white/90 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
                  style={{ 
                    fontSize: '16px',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' 
                  }}
                >
                  I co-host Ehema Wenne AI?, a YouTube podcast where we unpack the real-world impact of artificial intelligence—from tech breakthroughs to cultural shifts—all in Sinhala.
                  <br /><br />
                  Whether you're curious, confused, or just want to stay ahead of the curve, this show makes AI easy to understand and fun to explore.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <motion.a
                    href="https://www.youtube.com/@EhemaWenne-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative inline-block px-8 py-4 rounded-full font-semibold text-sm text-white border-2 border-light-accent/30 dark:border-green-400/30 group overflow-hidden bg-gradient-to-r from-light-accent to-light-strong dark:from-green-400 dark:to-blue-500"
                    style={{ 
                      backdropFilter: 'blur(20px)'
                    }}
                  >
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-light-strong dark:from-green-400 dark:to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                    
                    <span className="relative z-10 flex items-center gap-3">
                      <Play className="w-4 h-4" fill="currentColor" />
                      <span>Watch on YouTube</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.span>
                    </span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default PodcastSection