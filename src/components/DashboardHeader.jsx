import React from 'react';
import { Notifications, Settings, Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const DashboardHeader = ({ title }) => {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/10 px-8 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold text-white">
          {title}
        </h1>
        <div className="hidden md:flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          <Search className="text-gray-300 mr-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent text-white placeholder-gray-300 outline-none text-sm"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <IconButton 
          className="w-12 h-12 bg-white/10 backdrop-blur-sm text-cyan-300 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-cyan-400"
          style={{ borderRadius: '12px' }}
        >
          <Notifications />
        </IconButton>
        <IconButton 
          className="w-12 h-12 bg-white/10 backdrop-blur-sm text-cyan-300 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-cyan-400"
          style={{ borderRadius: '12px' }}
        >
          <Settings />
        </IconButton>
        
        {/* Profile Picture */}
        <div className="ml-4 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 border-2 border-white/20 cursor-pointer hover:scale-105 transition-transform duration-300"></div>
      </div>
    </header>
  );
};

export default DashboardHeader;