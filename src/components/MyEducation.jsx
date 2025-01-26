import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import "../styles/MyEducation.css"

const MyEducation = () => {
  const educationData = [
    {
      degree: 'BCA',
      institution: "Lingaya's Vidyapeeth, Faridabad",
      cgpa: '8.3 CGPA',
      description: `Completed my Bachelor's in Computer Applications (BCA) from Lingaya's Vidyapeeth, Faridabad. 
        The program helped me master programming languages, algorithms, and data structures.`,
      color: '#ff7f50', // Coral color
    },
    {
      degree: 'MCA',
      institution: "Lingaya's Vidyapeeth, Faridabad",
      cgpa: '9.3 CGPA',
      description: `Completed my Master's in Computer Applications (MCA) from Lingaya's Vidyapeeth, Faridabad. 
        The program enhanced my knowledge in advanced topics like software engineering, databases, and web development.`,
      color: '#87ceeb', // Sky Blue color
    },
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1f4037, #99f2c8)', // Gradient background for the component
        padding: '4rem 0',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Title */}
        <Typography
          variant="h4"
          color="primary"
          gutterBottom
          sx={{
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '2rem',
            color: 'white',
            fontFamily: 'Poppins',
          }}
        >
          My Education
        </Typography>

        {/* Education Cards */}
        {educationData.map((item, index) => (
          <Box className='CourseContainer'
            key={index}
            sx={{
              marginBottom: '2rem',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              backgroundColor: item.color, // Unique background color for each box
              color: 'white',
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                marginBottom: '1rem',
              }}
            >
              {item.degree} - {item.institution}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                marginBottom: '0.5rem',
              }}
            >
              {item.cgpa}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                lineHeight: '1.6',
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default MyEducation;
