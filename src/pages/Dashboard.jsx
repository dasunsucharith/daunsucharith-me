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
    <div className="flex h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <Sidebar />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader title={pageTitle} />
        
        <div className="flex-1 p-8 overflow-y-auto">
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