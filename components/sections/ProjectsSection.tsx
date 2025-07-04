"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../../lib/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 bg-light-muted dark:bg-brand-base text-gray-800 dark:text-white overflow-hidden">
      {/* Enhanced background with floating elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dynamic floating orbs */}
        <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-br from-light-accent/5 to-light-strong/3 dark:from-brand-accent/8 dark:to-brand-strong/4 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '0s' }}></div>
        <div className="absolute bottom-32 left-20 w-64 h-64 bg-gradient-to-tr from-light-strong/4 to-light-accent/2 dark:from-brand-strong/6 dark:to-brand-accent/3 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '15s', animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-light-accent/3 to-light-strong/2 dark:from-brand-accent/5 dark:to-brand-strong/3 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '20s', animationDelay: '10s' }}></div>
             
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 165, 134, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 165, 134, 0.1) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}></div>
             
        {/* Floating particles */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-1/4 w-4 h-4 bg-light-accent/60 dark:bg-brand-accent/60 rounded-full"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-40 right-1/3 w-3 h-3 bg-light-strong/70 dark:bg-brand-strong/70 rounded-full"
        ></motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Enhanced heading section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-light-accent via-gray-800 to-light-accent dark:from-brand-accent dark:via-white dark:to-brand-accent font-josefin mb-4"
            style={{ textShadow: '0 0 20px rgba(255, 165, 134, 0.3)' }}
          >
            Featured Projects
          </motion.h2>
          
          {/* Decorative elements */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-light-accent dark:via-brand-accent to-transparent mx-auto mb-6"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto"
            style={{ fontSize: '16px' }}
          >
            A showcase of innovative solutions spanning marketing automation, web development, and digital strategy.
          </motion.p>
        </motion.div>

        {/* Enhanced projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block group relative"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-light-surface to-light-muted/50 dark:from-brand-surface dark:to-brand-base/50 backdrop-blur-sm border border-gray-200/20 dark:border-white/10 shadow-2xl group-hover:shadow-light-accent/20 dark:group-hover:shadow-brand-accent/20 transition-all duration-500"
                  style={{ 
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Project image with enhanced overlay */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-48 object-cover"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-light-surface/90 via-light-surface/20 to-transparent dark:from-brand-base/90 dark:via-brand-base/20 dark:to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    {/* Floating project number */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="absolute top-4 right-4 w-8 h-8 bg-light-accent/20 dark:bg-brand-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center text-light-accent dark:text-brand-accent text-sm font-bold border border-light-accent/30 dark:border-brand-accent/30"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>
                  </div>

                  {/* Enhanced content section */}
                  <div className="p-6 relative">
                    {/* Project title */}
                    <motion.h3
                      className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-light-accent dark:group-hover:text-brand-accent transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-josefin)' }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    {/* Project description */}
                    <motion.p
                      className="text-gray-600 dark:text-white/70 mb-4 line-clamp-3 leading-relaxed"
                      style={{ fontSize: '14px' }}
                    >
                      {project.description}
                    </motion.p>
                    
                    {/* View project link with arrow */}
                    <div className="flex items-center text-light-accent dark:text-brand-accent font-semibold text-sm group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                      <span>View Project</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="ml-2"
                      >
                        →
                      </motion.span>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-light-accent/5 to-light-strong/5 dark:from-brand-accent/5 dark:to-brand-strong/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-light-accent to-light-strong dark:from-brand-accent dark:to-brand-strong"
                  ></motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="inline-block"
          >
            <div className="px-8 py-3 rounded-full bg-gradient-to-r from-light-accent/20 to-light-strong/20 dark:from-brand-accent/20 dark:to-brand-strong/20 border border-light-accent/30 dark:border-brand-accent/30 backdrop-blur-sm group cursor-pointer"
                 style={{ 
                   backdropFilter: 'blur(20px)'
                 }}>
              <span className="text-light-accent dark:text-brand-accent font-semibold text-sm flex items-center gap-2">
                <span>Explore All Projects</span>
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;