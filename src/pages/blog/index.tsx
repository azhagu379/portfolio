import React from 'react';
import { Box, Container, TextField, Typography, Button } from '@mui/material';

const BlogPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Feel free to reach out using the form below. Ill get back to you as soon as possible.
      </Typography>

      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          required
        />

        <TextField
          fullWidth
          label="Your Email"
          type="email"
          variant="outlined"
          required
        />

        <TextField
          fullWidth
          label="Your Message"
          multiline
          rows={4}
          variant="outlined"
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{ alignSelf: 'flex-start' }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default BlogPage;
