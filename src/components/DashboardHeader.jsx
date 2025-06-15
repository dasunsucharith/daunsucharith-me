import React from 'react';
import { Notifications, Settings, Search } from '@mui/icons-material';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  InputBase, 
  Box, 
  Avatar,
  Paper,
  useTheme,
  alpha
} from '@mui/material';

const DashboardHeader = ({ title }) => {
  const theme = useTheme();
  
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{
        bgcolor: alpha(theme.palette.common.white, 0.08),
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{ px: 4, py: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold',
              color: 'text.primary',
              fontFamily: 'monospace'
            }}
          >
            {title}
          </Typography>
          
          <Paper
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              bgcolor: alpha(theme.palette.common.white, 0.08),
              backdropFilter: 'blur(10px)',
              border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
              borderRadius: '25px',
              px: 2,
              py: 1,
              minWidth: 250
            }}
          >
            <Search sx={{ color: 'text.secondary', mr: 1 }} />
            <InputBase
              placeholder="Search..."
              sx={{
                color: 'text.primary',
                '& .MuiInputBase-input::placeholder': {
                  color: 'text.secondary',
                  opacity: 1
                }
              }}
              fullWidth
            />
          </Paper>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton 
            sx={{
              bgcolor: alpha(theme.palette.common.white, 0.08),
              backdropFilter: 'blur(10px)',
              border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
              color: theme.palette.primary.main,
              borderRadius: 2,
              width: 48,
              height: 48,
              '&:hover': {
                bgcolor: alpha(theme.palette.common.white, 0.15),
                borderColor: theme.palette.primary.main,
                transform: 'scale(1.05)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <Notifications />
          </IconButton>
          
          <IconButton 
            sx={{
              bgcolor: alpha(theme.palette.common.white, 0.08),
              backdropFilter: 'blur(10px)',
              border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
              color: theme.palette.primary.main,
              borderRadius: 2,
              width: 48,
              height: 48,
              '&:hover': {
                bgcolor: alpha(theme.palette.common.white, 0.15),
                borderColor: theme.palette.primary.main,
                transform: 'scale(1.05)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <Settings />
          </IconButton>
          
          <Avatar
            sx={{
              ml: 2,
              width: 40,
              height: 40,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              border: `2px solid ${alpha(theme.palette.common.white, 0.2)}`,
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.3)}`
              },
              transition: 'all 0.3s ease'
            }}
          >
            DS
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;