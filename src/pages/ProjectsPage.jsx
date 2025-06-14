import React from 'react';
import { Launch, GitHub, Star, TrendingUp } from '@mui/icons-material';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack solution with AI-powered recommendations and real-time analytics',
      tags: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
      image: '🛒',
      status: 'Completed',
      rating: 4.9,
      visits: '15k+'
    },
    {
      title: 'Marketing Automation Tool',
      description: 'Streamlined campaign management with automated workflows and analytics',
      tags: ['Vue.js', 'Python', 'API', 'Redis'],
      image: '📊',
      status: 'In Progress',
      rating: 4.8,
      visits: '8k+'
    },
    {
      title: 'SEO Dashboard',
      description: 'Real-time monitoring and optimization insights with competitor analysis',
      tags: ['Angular', 'Express', 'Analytics', 'PostgreSQL'],
      image: '🔍',
      status: 'Completed',
      rating: 4.7,
      visits: '12k+'
    },
    {
      title: 'AI Content Generator',
      description: 'Smart content creation tool powered by machine learning algorithms',
      tags: ['React', 'Python', 'OpenAI', 'Firebase'],
      image: '🤖',
      status: 'Completed',
      rating: 4.9,
      visits: '20k+'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio with animations and contact forms',
      tags: ['Next.js', 'Tailwind', 'Framer Motion'],
      image: '💼',
      status: 'Completed',
      rating: 5.0,
      visits: '5k+'
    },
    {
      title: 'Social Media Analytics',
      description: 'Comprehensive social media monitoring and engagement tracking',
      tags: ['React', 'Node.js', 'Chart.js', 'MySQL'],
      image: '📱',
      status: 'In Progress',
      rating: 4.6,
      visits: '3k+'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Featured Projects
            </h2>
            <p className="text-gray-300">
              Showcasing innovative solutions and creative implementations
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
              <span className="text-cyan-400 font-semibold">{projects.length} Projects</span>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
              View All
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group shadow-xl"
          >
            {/* Project Image/Icon */}
            <div className="relative mb-6">
              <div className="w-full h-48 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-6xl border border-white/10">
                {project.image}
              </div>
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === 'Completed' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }`}>
                {project.status}
              </div>
            </div>

            {/* Project Info */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 mb-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400 text-sm" />
                <span className="text-gray-300">{project.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="text-cyan-400 text-sm" />
                <span className="text-gray-300">{project.visits}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-cyan-400 text-xs rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 text-sm">
                <Launch className="text-sm" />
                Live Demo
              </button>
              <button className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/20 hover:border-cyan-400 transition-all duration-300">
                <GitHub className="text-sm" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/30 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Have a Project in Mind?</h3>
        <p className="text-gray-300 mb-6">Let's collaborate and bring your ideas to life with cutting-edge technology</p>
        <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;