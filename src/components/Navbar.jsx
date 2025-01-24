import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Detect scroll to add shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* AppBar for Desktop */}
      <AppBar
        position="fixed"
        elevation={isScrolled ? 4 : 0}
        style={{
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? '#0a192f' : 'transparent',
        }}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography variant="h6" style={{ fontFamily: 'Poppins', fontWeight: 600 }}>
            My Portfolio
          </Typography>

          {/* Menu for Desktop */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 4,
            }}
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.1, color: '#64ffda' }}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </Box>

          {/* Hamburger Icon for Mobile */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setIsDrawerOpen(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            height: '100%',
            backgroundColor: '#0a192f',
            color: 'white',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: 2,
            }}
          >
            <IconButton onClick={() => setIsDrawerOpen(false)} color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component="a"
                href={item.href}
                onClick={() => setIsDrawerOpen(false)}
                sx={{
                  textAlign: 'center',
                  padding: 2,
                  '&:hover': {
                    backgroundColor: '#64ffda',
                    color: '#0a192f',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    textAlign: 'center',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
