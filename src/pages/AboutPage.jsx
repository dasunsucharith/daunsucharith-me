import React from 'react';
import { Code, TrendingUp, SmartToy, Analytics, Star, LocationOn, Email } from '@mui/icons-material';

const AboutPage = () => {
  const skills = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and applications',
      level: 95
    },
    {
      icon: TrendingUp,
      title: 'SEO & Marketing',
      description: 'Data-driven strategies for growth',
      level: 90
    },
    {
      icon: SmartToy,
      title: 'AI Integration',
      description: 'Intelligent automation solutions',
      level: 85
    },
    {
      icon: Analytics,
      title: 'Analytics',
      description: 'Performance tracking and optimization',
      level: 88
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '25+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Technologies', value: '20+' }
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <LocationOn className="text-cyan-400" />
              <span className="text-gray-300">Sri Lanka</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to My Digital Space
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I'm Dasun Sucharith, a marketing-tech-driven developer and automation strategist 
              helping brands grow smarter with SEO, web development, and AI-powered marketing systems.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 text-sm" />
                ))}
                <span className="text-gray-300 ml-2">5.0 Rating</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                DS
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center border-4 border-white/20">
                <span className="text-white font-bold">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value }) => (
          <div key={label} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{value}</div>
            <div className="text-gray-300 text-sm">{label}</div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
          What I Do
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(({ icon: Icon, title, description, level }) => (
            <div 
              key={title}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4">
                    {description}
                  </p>
                  
                  {/* Skill Level Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-cyan-400 text-xs mt-1">{level}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/30 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
        <p className="text-gray-300 mb-6">Let's discuss how I can help bring your ideas to life</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
            Start a Project
          </button>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:border-cyan-400 transition-all duration-300">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;