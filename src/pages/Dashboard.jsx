import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';

const Dashboard = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('About Me');

  useEffect(() => {
    const routes = {
      '/dashboard/about': 'About Me',
      '/dashboard/projects': 'Projects',
      '/dashboard/services': 'Services',
      '/dashboard/contact': 'Contact Me',
    };
    setPageTitle(routes[location.pathname] || 'Dashboard');
  }, [location.pathname]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <Sidebar />
      
      <main className="flex-1 flex flex-col overflow-hidden relative z-10">
        <DashboardHeader title={pageTitle} />
        
        <div className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/about" replace />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;