import React from 'react';
import { Web, Campaign, AutoFixHigh } from '@mui/icons-material';

const ServicesPage = () => {
  const services = [
    {
      icon: Web,
      title: 'Web Development',
      description: 'Custom websites and applications built with modern technologies',
      features: ['Responsive design', 'Performance optimization', 'SEO integration']
    },
    {
      icon: Campaign,
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions to grow your online presence',
      features: ['SEO optimization', 'Content strategy', 'Analytics setup']
    },
    {
      icon: AutoFixHigh,
      title: 'Automation Solutions',
      description: 'Streamline your workflows with intelligent automation',
      features: ['Process automation', 'AI integration', 'System optimization']
    }
  ];

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        My Services
      </h2>

      <div className="space-y-6">
        {services.map(({ icon: Icon, title, description, features }) => (
          <div 
            key={title}
            className="flex items-start gap-6 p-6 bg-indigo-50 rounded-xl"
          >
            <Icon className="text-indigo-600 text-4xl mt-1" />
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {description}
              </p>
              <ul className="space-y-1">
                {features.map((feature) => (
                  <li key={feature} className="text-gray-600 text-sm">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;