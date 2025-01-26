import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendMessage = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    const encodedMessage = `Name: ${encodeURIComponent(name)}\nEmail: ${encodeURIComponent(email)}\nMessage: ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/7903427452?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box
      id="contact"
      sx={{
        background: 'linear-gradient(135deg, #1f4037, #99f2c8)',
        padding: '3rem',
        height: '98vh',
      }}
    >
      <Container className="myContactContainer">
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: '2rem',
          }}
        >
          Get in Touch
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            variant="outlined"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            sx={{
              fontWeight: 'bold',
              backgroundColor: '#fff',
              borderRadius: '8px',
            }}
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            sx={{
              backgroundColor: '#fff',
              borderRadius: '8px',
            }}
          />
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            margin="normal"
            value={formData.message}
            onChange={handleChange}
            sx={{
              backgroundColor: '#fff',
              borderRadius: '8px',
            }}
          />
          <Button
            variant="contained"
            size="large"
            onClick={handleSendMessage}
            sx={{
              backgroundColor: '#1f4037',
              color: '#fff',
              fontWeight: 'bold',
              width: '100%',
              marginTop: '1rem',
              padding: '0.75rem',
              ':hover': {
                backgroundColor: '#145c4a',
              },
            }}
          >
            Send Message
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
