import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <Box
      component={motion.div}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '90vh',
        padding: '20px',
        backgroundImage: `url(/path/to/background.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: { xs: 'center', md: 'left' },
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box>
        <Typography variant="h2" component="h1" gutterBottom>
          Hi, I&apos;m <span style={{ color: '#FFD700' }}>Azhagu</span>
        </Typography>
        <Typography variant="h5" gutterBottom>
          A Passionate Software Engineer
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: '10px', padding: '10px 20px' }}
            onClick={() => window.alert('Hire Me Clicked')}
          >
            Hire Me
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ padding: '10px 20px' }}
            onClick={() => window.open('/path/to/resume.pdf')}
          >
            Download Resume
          </Button>
        </Box>
      </Box>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/path/to/photo.jpg"
          alt="Azhagu"
          style={{ width: '300px', borderRadius: '50%', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}
        />
      </motion.div>
    </Box>
  );
};

export default HeroSection;
