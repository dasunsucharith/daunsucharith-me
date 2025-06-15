import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Box, Container, useTheme } from '@mui/material';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';

const Dashboard = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('About Me');
  const theme = useTheme();

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
    <Box 
      sx={{ 
        display: 'flex', 
        height: '100vh', 
        bgcolor: 'background.default',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: '-2.5rem',
            opacity: 0.3
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '25%',
              left: '25%',
              width: '24rem',
              height: '24rem',
              bgcolor: theme.palette.secondary.main,
              borderRadius: '50%',
              mixBlendMode: 'multiply',
              filter: 'blur(40px)',
              animation: 'pulse 4s infinite'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '75%',
              right: '25%',
              width: '24rem',
              height: '24rem',
              bgcolor: theme.palette.primary.main,
              borderRadius: '50%',
              mixBlendMode: 'multiply',
              filter: 'blur(40px)',
              animation: 'pulse 4s infinite 2s'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '25%',
              left: '33%',
              width: '24rem',
              height: '24rem',
              bgcolor: '#e91e63',
              borderRadius: '50%',
              mixBlendMode: 'multiply',
              filter: 'blur(40px)',
              animation: 'pulse 4s infinite 4s'
            }}
          />
        </Box>
      </Box>

      <Sidebar />
      
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          overflow: 'hidden',
          position: 'relative',
          zIndex: 10
        }}
      >
        <DashboardHeader title={pageTitle} />
        
        <Container 
          maxWidth="xl" 
          sx={{ 
            flexGrow: 1, 
            py: 3, 
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/about" replace />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;