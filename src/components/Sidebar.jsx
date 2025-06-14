import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Person, 
  Work, 
  Build, 
  ContactMail 
} from '@mui/icons-material';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { path: '/dashboard/about', icon: Person, label: 'About Me' },
    { path: '/dashboard/projects', icon: Work, label: 'Projects' },
    { path: '/dashboard/services', icon: Build, label: 'Services' },
    { path: '/dashboard/contact', icon: ContactMail, label: 'Contact Me' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside className="w-80 bg-white/95 backdrop-blur-lg shadow-lg flex flex-col">
      {/* Profile Section */}
      <div className="p-8 border-b border-gray-200">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
            DS
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Dasun Sucharith
          </h3>
          <p className="text-sm text-gray-600">
            Developer & Strategist
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        {navigationItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          
          return (
            <button
              key={path}
              onClick={() => handleNavigation(path)}
              className={`w-full flex items-center px-6 py-4 text-left transition-all duration-200 border-l-4 ${
                isActive
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-700 hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-600'
              }`}
            >
              <Icon className="mr-4 text-xl" />
              <span className="font-medium">{label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;