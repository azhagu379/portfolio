import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import { Email, LinkedIn, GitHub, Twitter, WhatsApp, Phone } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsAppMessage = () => {
    const { name, message } = formData;
    const phoneNumber = '+1234567890'; // Replace with your phone number
    const text = `Hello, my name is ${name}.\n\n${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {/* Page Heading */}
      <Typography
        variant="h3"
        component={motion.h1}
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#32CD32', textAlign: 'center', mb: 2 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </Typography>

      {/* Social Media Links */}
 

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={6} sm={3}>
          <Card
            sx={{ textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
          >
            <CardContent>
              <IconButton
                href="mailto:your-email@example.com"
                target="_blank"
                color="success"
              >
                <Email fontSize="large" />
              </IconButton>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Email
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Card
            sx={{ textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
          >
            <CardContent>
              <IconButton
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                color="primary"
              >
                <LinkedIn fontSize="large" />
              </IconButton>
              <Typography variant="body1" sx={{ mt: 1 }}>
                LinkedIn
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Card
            sx={{ textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
          >
            <CardContent>
              <IconButton
                href="https://github.com/your-github"
                target="_blank"
                color="default"
              >
                <GitHub fontSize="large" />
              </IconButton>
              <Typography variant="body1" sx={{ mt: 1 }}>
                GitHub
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Card
            sx={{ textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
          >
            <CardContent>
              <IconButton
                href="https://twitter.com/your-twitter"
                target="_blank"
                color="info"
              >
                <Twitter fontSize="large" />
              </IconButton>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Twitter
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Card
            sx={{ textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
          >
            <CardContent>
              <IconButton
                href="https://wa.me/1234567890"
                target="_blank"
                color="success"
              >
                <WhatsApp fontSize="large" />
              </IconButton>
              <Typography variant="body1" sx={{ mt: 1 }}>
                WhatsApp
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Card
            sx={{ textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
          >
            <CardContent>
              <IconButton
                href="tel:+1234567890"
                target="_blank"
                color="secondary"
              >
                <Phone fontSize="large" />
              </IconButton>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Phone
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography
        variant="h5"
        sx={{ fontWeight: 'bold', color: '#32CD32', mt: 6, mb: 3, textAlign: 'center' }}
      >
        Connect with Me
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4, textAlign: 'center' }}
      >
        Feel free to reach out using the form below. I’ll get back to you as soon as possible.
      </Typography>

      {/* Contact Form */}
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          padding: 4,
          borderRadius: '15px',
   
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleWhatsAppMessage();
        }}
      >
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <TextField
          fullWidth
          label="Your Email"
          type="email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <TextField
          fullWidth
          label="Your Message"
          multiline
          rows={4}
          variant="outlined"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="success"
          size="large"
          sx={{ alignSelf: 'flex-start' }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactPage;
