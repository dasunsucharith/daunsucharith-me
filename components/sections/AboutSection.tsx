'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <>
      <section id="about" className="relative py-24 bg-brand-surface text-white overflow-hidden">
        {/* Enhanced background with floating elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Floating background orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-brand-accent/10 to-brand-strong/5 rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '8s', animationDelay: '0s' }}></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-l from-brand-strong/8 to-brand-accent/5 rounded-full blur-2xl animate-pulse" 
               style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-t from-brand-accent/8 to-transparent rounded-full blur-xl animate-pulse" 
               style={{ animationDuration: '12s', animationDelay: '6s' }}></div>
               
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 165, 134, 0.3) 1px, transparent 0)',
                 backgroundSize: '40px 40px'
               }}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-8 relative z-10"
        >
          {/* Enhanced heading with gradient effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-brand-accent font-josefin mb-4"
              style={{ textShadow: '0 0 20px rgba(255, 165, 134, 0.3)' }}
            >
              About Me
            </motion.h2>
            
            {/* Decorative line under heading */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto"
            ></motion.div>
          </motion.div>

          {/* Enhanced profile image with floating effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mb-12 flex justify-center"
          >
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-strong rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" 
                   style={{ transform: 'scale(1.1)' }}></div>
              
              {/* Profile image */}
              <motion.img
                src="/assets/dasun.png"
                alt="Dasun Sucharith"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-44 h-44 object-cover rounded-full border-4 border-brand-accent/60 shadow-2xl backdrop-blur-sm"
                style={{ 
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 165, 134, 0.2)' 
                }}
              />
              
              {/* Floating particles around image */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2 w-3 h-3 bg-brand-accent rounded-full"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-1 -left-3 w-2 h-2 bg-brand-strong rounded-full"
              ></motion.div>
            </div>
          </motion.div>

          {/* Enhanced content layout */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="leading-relaxed text-white/90 text-center max-w-3xl mx-auto"
              style={{ 
                fontSize: '16px',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' 
              }}
            >
              I'm currently working as a <span className="text-brand-accent font-semibold">Marketing Automation Developer</span> at Wavenet Pvt Ltd since October 2022. So yes, you could say I'm a developer with a marketer's mindset, combining code and strategy to solve real business problems.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="leading-relaxed text-white/90 text-center max-w-3xl mx-auto"
              style={{ 
                fontSize: '16px',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' 
              }}
            >
              With a background in <span className="text-brand-accent font-semibold">marketing automation, SEO, and web development</span>, I help brands create seamless digital systems, from high-converting email flows to fast, scalable websites and search-first content strategies.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="leading-relaxed text-white/90 text-center max-w-3xl mx-auto"
              style={{ 
                fontSize: '16px',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' 
              }}
            >
              I work with a wide range of tools across marketing, SEO, AI, and web development, giving me the flexibility to plug into any part of a digital growth engine, technical or creative.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="leading-relaxed text-white/90 text-center max-w-3xl mx-auto font-medium"
              style={{ 
                fontSize: '16px',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' 
              }}
            >
              I believe great digital experiences aren't just beautiful, they're <span className="text-brand-accent">purposeful, measurable, and built to evolve</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="leading-relaxed text-white/90 text-center max-w-3xl mx-auto font-medium"
              style={{ 
                fontSize: '16px',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' 
              }}
            >
              If you're looking for someone who can bridge the gap between marketing and tech, I'm your guy.
            </motion.p>
          </div>

          {/* Enhanced CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-12"
          >
            <motion.a
              href="/assets/files/dasun%20sucharith%20CV%206172025.pdf"
              download
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255, 165, 134, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative inline-block px-8 py-3 rounded-full font-semibold text-sm text-white border-2 border-brand-accent/30 group overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 165, 134, 0.9) 0%, rgba(181, 26, 43, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 25px rgba(255, 165, 134, 0.2)'
              }}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-strong opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                <span>Download My CV</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default AboutSection