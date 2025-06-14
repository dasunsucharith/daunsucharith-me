import React from 'react';
import { Code, TrendingUp, SmartToy, Analytics } from '@mui/icons-material';

const AboutPage = () => {
  const skills = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and applications'
    },
    {
      icon: TrendingUp,
      title: 'SEO & Marketing',
      description: 'Data-driven strategies for growth'
    },
    {
      icon: SmartToy,
      title: 'AI Integration',
      description: 'Intelligent automation solutions'
    },
    {
      icon: Analytics,
      title: 'Analytics',
      description: 'Performance tracking and optimization'
    }
  ];

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Welcome to My Digital Space
      </h2>
      
      <p className="text-gray-600 leading-relaxed mb-8">
        I'm Dasun Sucharith, a marketing-tech-driven developer and automation strategist 
        helping brands grow smarter with SEO, web development, and AI-powered marketing systems.
      </p>

      <h3 className="text-xl font-semibold text-indigo-600 mb-6">
        What I Do
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map(({ icon: Icon, title, description }) => (
          <div 
            key={title}
            className="bg-indigo-50 p-6 rounded-xl text-center transition-transform duration-300 hover:-translate-y-2"
          >
            <Icon className="text-indigo-600 text-5xl mb-4 mx-auto" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {title}
            </h4>
            <p className="text-gray-600 text-sm">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;