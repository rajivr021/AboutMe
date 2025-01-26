import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Box, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { gsap } from 'gsap';
import "../styles/Navbar.css"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Detect scroll to add shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu items with SVG icons
  const menuItems = [
    { label: 'Home', href: '#hero', icon: '/Assets/icons/Home.gif' },
    { label: 'About', href: '#about', icon: '/Assets/icons/About.gif' },
    { label: 'Projects', href: '#projects', icon: '/Assets/icons/Projects.gif' },
    { label: 'Contact', href: '#contact', icon: '/Assets/icons/Contacts.gif' },
  ];

  // Hover animation
  const handleHover = (icon) => {
    gsap.to(icon, { scale: 1.2, rotationY: 360, duration: 0.6, ease: 'power2.out' });
  };

  const handleHoverOut = (icon) => {
    gsap.to(icon, { scale: 1, rotationY: 0, duration: 0.6, ease: 'power2.out' });
  };

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
          <Box sx={{ fontFamily: 'Poppins', fontWeight: 600, color: 'white', fontSize: '1.2rem' }}>
            My Portfolio
          </Box>

          {/* Menu for Desktop */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 4,
            }}
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onMouseEnter={(e) => handleHover(e.target.querySelector('img'))}
                onMouseLeave={(e) => handleHoverOut(e.target.querySelector('img'))}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{
                    width: '60px',
                    height: '60px',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </a>
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
                <Box
                  onMouseEnter={(e) => handleHover(e.target.querySelector('img'))}
                  onMouseLeave={(e) => handleHoverOut(e.target.querySelector('img'))}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    style={{
                      width: '40px',
                      height: '40px',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
