import React, { useEffect, useRef } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import "../styles/Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Create a GSAP Timeline
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' },
        '-=0.6' // Start button animation earlier
      );
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1f4037, #99f2c8)', // Gradient background
        color: '#fff',
        textAlign: 'center',
        padding: 2,
        position: 'relative',
        overflow: 'hidden', // Prevent scroll artifacts
      }}
    >
      {/* Hero Heading */}
      <div ref={heroRef}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2.5rem', md: '4rem' },
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
            marginBottom: 2,
          }}
          gutterBottom
        >
          Hi, I'm <span style={{ color: '#64ffda' }}>Rajiv Kumar</span>
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            marginBottom: 4,
            fontSize: { xs: '1.2rem', md: '1.8rem' },
          }}
        >
          A Frontend Developer Crafting Amazing Experiences
        </Typography>
      </div>

      {/* Call-to-Action Buttons */}
      <div ref={buttonRef}>
        <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#64ffda',
              color: '#0a192f',
              padding: '12px 28px',
              fontWeight: 600,
              borderRadius: '30px',
              textTransform: 'capitalize',
              fontSize: '1rem',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                backgroundColor: '#52e0c4',
                transform: 'scale(1.05)',
              },
            }}
            href="#contact"
          >
            Contact Me
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#64ffda',
              color: '#64ffda',
              padding: '12px 28px',
              fontWeight: 600,
              borderRadius: '30px',
              textTransform: 'capitalize',
              fontSize: '1rem',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                backgroundColor: '#64ffda',
                color: '#0a192f',
                transform: 'scale(1.05)',
              },
            }}
            href="/Assets/Resume/Rajiv_Kumar_RSPL.pdf" 
            download="Rajiv_Kumar_RSPL.pdf"
          >
            Download Resume
          </Button>
        </Box>
      </div>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '12px',
            height: '40px',
            border: '2px solid white',
            borderRadius: '50px',
            position: 'relative',
          }}
        >
          <motion.div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              position: 'absolute',
              top: '5px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
