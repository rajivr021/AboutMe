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
    },
    {
      degree: 'MCA',
      institution: "Lingaya's Vidyapeeth, Faridabad",
      cgpa: '9.3 CGPA',
      description: `Completed my Master's in Computer Applications (MCA) from Lingaya's Vidyapeeth, Faridabad. 
        The program enhanced my knowledge in advanced topics like software engineering, databases, and web development.`,
    },
  ];

  return (
    <Container id="education" maxWidth="xl" className="education-container">
      <Typography variant="h4" color="primary" gutterBottom className="section-title">
        My Education
      </Typography>

      <Box className="education-cards">
        {educationData.map((item, index) => (
          <Box key={index} className="education-card">
            <Typography variant="h5" className="education-degree">
              {item.degree} - {item.institution}
            </Typography>
            <Typography variant="body1" className="education-cgpa">
              {item.cgpa}
            </Typography>
            <Typography variant="body2" className="education-description">
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default MyEducation;
