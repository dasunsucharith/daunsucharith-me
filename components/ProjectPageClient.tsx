"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Tag, Globe } from "lucide-react";

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

interface ProjectPageClientProps {
  project: Project;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-base via-brand-surface to-brand-base text-white overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Floating background orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-brand-accent/6 to-brand-strong/3 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '15s', animationDelay: '0s' }}></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-tl from-brand-strong/5 to-brand-accent/2 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '18s', animationDelay: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-brand-accent/4 to-brand-strong/2 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '22s', animationDelay: '12s' }}></div>
             
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 165, 134, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 165, 134, 0.1) 1px, transparent 1px)',
               backgroundSize: '60px 60px'
             }}></div>
      </div>

      <div className="relative z-10">
        {/* Navigation and breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-24 pb-8"
        >
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link 
                href="/#projects" 
                className="inline-flex items-center space-x-2 text-brand-accent hover:text-white transition-colors duration-300 group"
              >
                <motion.div
                  animate={{ x: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowLeft className="w-4 h-4" />
                </motion.div>
                <span className="font-medium">Back to Projects</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero section for project */}
        <div className="max-w-6xl mx-auto px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Project info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Project title */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-brand-accent font-josefin mb-4 leading-tight"
                  style={{ textShadow: '0 0 30px rgba(255, 165, 134, 0.3)' }}
                >
                  {project.title}
                </motion.h1>
                
                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="h-1 bg-gradient-to-r from-brand-accent to-brand-strong rounded-full"
                ></motion.div>
              </div>

              {/* Project metadata */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2 px-4 py-2 bg-brand-accent/10 backdrop-blur-sm rounded-full border border-brand-accent/20">
                  <Tag className="w-4 h-4 text-brand-accent" />
                  <span className="text-white/80 text-sm font-medium">Featured Project</span>
                </div>
                
                <div className="flex items-center space-x-2 px-4 py-2 bg-brand-strong/10 backdrop-blur-sm rounded-full border border-brand-strong/20">
                  <Globe className="w-4 h-4 text-brand-strong" />
                  <span className="text-white/80 text-sm font-medium">Live Project</span>
                </div>
              </motion.div>

              {/* Project description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-brand-accent font-josefin">About This Project</h3>
                <div className="prose prose-invert">
                  <p className="text-white/80 leading-relaxed whitespace-pre-line" style={{ fontSize: '16px' }}>
                    {project.description}
                  </p>
                </div>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {/* Visit project button */}
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 165, 134, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-brand-accent to-brand-strong text-white font-semibold rounded-xl relative overflow-hidden group shadow-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255, 165, 134, 0.9) 0%, rgba(181, 26, 43, 0.9) 100%)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-strong opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  <span className="relative z-10">Visit Project</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative z-10"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </motion.a>

                {/* View more projects button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href="/#projects"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-brand-surface/60 backdrop-blur-sm text-brand-accent font-semibold rounded-xl border border-brand-accent/30 hover:border-brand-accent/60 hover:bg-brand-accent/10 transition-all duration-300"
                  >
                    <span>View More Projects</span>
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
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Project image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 to-brand-strong/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" 
                   style={{ transform: 'scale(1.05)' }}></div>
              
              {/* Main project image */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative w-full rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm"
                  style={{ 
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 165, 134, 0.1)' 
                  }}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-base/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-end p-6">
                  <div className="text-white">
                    <p className="font-semibold mb-1">Click to visit project</p>
                    <p className="text-sm text-white/70">Experience the live version</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating accent elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-brand-accent/60 rounded-full blur-sm"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-brand-strong/50 rounded-full blur-sm"
              ></motion.div>
            </motion.div>
          </div>
        </div>

        {/* Additional project details section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-6xl mx-auto px-8 pb-20"
        >
          <div className="bg-gradient-to-br from-brand-surface/40 to-brand-base/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-brand-accent mb-6 font-josefin">Project Highlights</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center p-6 bg-brand-accent/5 rounded-xl border border-brand-accent/10"
              >
                <div className="w-12 h-12 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-brand-accent" />
                </div>
                <h4 className="font-semibold text-white mb-2">Live & Functional</h4>
                <p className="text-white/70 text-sm">Fully deployed and operational project</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-center p-6 bg-brand-strong/5 rounded-xl border border-brand-strong/10"
              >
                <div className="w-12 h-12 bg-brand-strong/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="w-6 h-6 text-brand-strong" />
                </div>
                <h4 className="font-semibold text-white mb-2">Modern Tech Stack</h4>
                <p className="text-white/70 text-sm">Built with cutting-edge technologies</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center p-6 bg-brand-accent/5 rounded-xl border border-brand-accent/10"
              >
                <div className="w-12 h-12 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-brand-accent" />
                </div>
                <h4 className="font-semibold text-white mb-2">User-Focused</h4>
                <p className="text-white/70 text-sm">Designed for optimal user experience</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}