import React from 'react';
import { Chip } from '@mui/material';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack solution with AI-powered recommendations',
      tags: ['React', 'Node.js', 'AI/ML']
    },
    {
      title: 'Marketing Automation Tool',
      description: 'Streamlined campaign management and analytics',
      tags: ['Vue.js', 'Python', 'API']
    },
    {
      title: 'SEO Dashboard',
      description: 'Real-time monitoring and optimization insights',
      tags: ['Angular', 'Express', 'Analytics']
    }
  ];

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.title}
            className="bg-indigo-50 p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  className="bg-indigo-600 text-white"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;