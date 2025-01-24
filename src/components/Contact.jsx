import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <Container id="contact">
      <Typography variant="h4" color="primary" gutterBottom>
        Contact Me
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Your Email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Your Message"
          variant="outlined"
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" color="primary" size="large">
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default Contact;