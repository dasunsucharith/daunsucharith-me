import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Person, 
  Work, 
  Build, 
  ContactMail 
} from '@mui/icons-material';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,  
  ListItemText,
  Avatar,
  Typography,
  Divider,
  useTheme,
  alpha
} from '@mui/material';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const navigationItems = [
    { path: '/dashboard/about', icon: Person, label: 'About Me' },
    { path: '/dashboard/projects', icon: Work, label: 'Projects' },
    { path: '/dashboard/services', icon: Build, label: 'Services' },
    { path: '/dashboard/contact', icon: ContactMail, label: 'Contact Me' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const drawerWidth = 320;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: alpha(theme.palette.common.white, 0.08),
          backdropFilter: 'blur(20px)',
          borderRight: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
          borderLeft: 'none',
          position: 'relative',
          zIndex: 10
        },
      }}
    >
      {/* Profile Section */}
      <Box sx={{ p: 4, borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.1)}` }}>
        <Box sx={{ textAlign: 'center' }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              fontSize: '1.5rem',
              fontWeight: 'bold',
              mx: 'auto',
              mb: 2,
              boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.3)}`,
              border: `2px solid ${alpha(theme.palette.common.white, 0.2)}`
            }}
          >
            DS
          </Avatar>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.primary', 
              fontWeight: 'semibold',
              mb: 0.5
            }}
          >
            Dasun Sucharith
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: theme.palette.primary.main,
              fontFamily: 'monospace'
            }}
          >
            Developer & Strategist
          </Typography>
        </Box>
      </Box>

      {/* Navigation */}
      <Box sx={{ flexGrow: 1, py: 2 }}>
        <List>
          {navigationItems.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path;
            
            return (
              <ListItem key={path} disablePadding sx={{ px: 1, mb: 1 }}>
                <ListItemButton
                  onClick={() => handleNavigation(path)}
                  sx={{
                    borderRadius: 2,
                    mx: 1,
                    py: 1.5,
                    pl: 2,
                    pr: 3,
                    borderLeft: `4px solid ${isActive ? theme.palette.primary.main : 'transparent'}`,
                    bgcolor: isActive ? alpha(theme.palette.common.white, 0.15) : 'transparent',
                    color: isActive ? theme.palette.primary.main : 'text.secondary',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.common.white, 0.1),
                      borderLeftColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '& .MuiListItemIcon-root': {
                        color: theme.palette.primary.main,
                        transform: 'scale(1.1)'
                      }
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive ? theme.palette.primary.main : 'text.secondary',
                      transition: 'all 0.3s ease',
                      minWidth: 40
                    }}
                  >
                    <Icon />
                  </ListItemIcon>
                  <ListItemText 
                    primary={label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 'bold' : 'medium',
                      fontSize: '0.95rem'
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Bottom decoration */}
      <Box sx={{ p: 3, borderTop: `1px solid ${alpha(theme.palette.common.white, 0.1)}` }}>
        <Typography 
          variant="caption" 
          sx={{ 
            textAlign: 'center',
            display: 'block',
            color: 'text.secondary',
            fontFamily: 'monospace',
            opacity: 0.7
          }}
        >
          v2.0.1
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;