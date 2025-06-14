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
    <aside className="w-80 bg-white/10 backdrop-blur-md border-r border-white/20 flex flex-col relative z-10">
      {/* Profile Section */}
      <div className="p-8 border-b border-white/10">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-xl ring-2 ring-white/20">
            DS
          </div>
          <h3 className="text-lg font-semibold text-white mb-1">
            Dasun Sucharith
          </h3>
          <p className="text-sm text-cyan-200">
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
              className={`w-full flex items-center px-6 py-4 text-left transition-all duration-300 border-l-4 mx-2 rounded-r-xl group ${
                isActive
                  ? 'bg-white/20 border-cyan-400 text-cyan-300 shadow-lg'
                  : 'border-transparent text-gray-300 hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-300'
              }`}
            >
              <Icon className={`mr-4 text-xl transition-transform duration-300 group-hover:scale-110 ${
                isActive ? 'text-cyan-300' : 'text-gray-400'
              }`} />
              <span className="font-medium">{label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom decoration */}
      <div className="p-6 border-t border-white/10">
        <div className="text-center text-xs text-gray-400 font-mono">
          v2.0.1
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;