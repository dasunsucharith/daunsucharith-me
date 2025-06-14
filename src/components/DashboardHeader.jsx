import React from 'react';
import { Notifications, Settings } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const DashboardHeader = ({ title }) => {
  return (
    <header className="bg-white/95 backdrop-blur-lg px-8 py-6 flex justify-between items-center shadow-sm">
      <h1 className="text-3xl font-semibold text-gray-800">
        {title}
      </h1>
      
      <div className="flex items-center gap-3">
        <IconButton 
          className="w-11 h-11 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
        >
          <Notifications />
        </IconButton>
        <IconButton 
          className="w-11 h-11 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
        >
          <Settings />
        </IconButton>
      </div>
    </header>
  );
};

export default DashboardHeader;