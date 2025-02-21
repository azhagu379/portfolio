import React from 'react';
import { Box, Typography, Grid, Divider, Avatar, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle } from '@mui/icons-material';

const AboutMe: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Introduction Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar
          src="/path/to/profile-photo.jpg"
          alt="Alagappan"
          sx={{
            width: 120,
            height: 120,
            margin: '0 auto',
            mb: 2,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        />
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#32CD32' }}>
          Hi, I&apos;m Alagappan ☕
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontStyle: 'italic', mt: 1 }}
        >
          Java Specialist | Full Stack Developer
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          👋 With 2.5 years of experience as a Software Engineer, I specialize
          in building scalable, secure, and responsive applications. 🎯 Holding
          a Master&apos;s degree in Computer Applications, I thrive on solving
          complex problems and creating impactful digital solutions. 🚀
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Skills Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          color={theme.palette.primary.main}
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          My Skills
        </Typography>
        <Grid container spacing={3}>
          {[
            { title: 'Frontend', skills: 'React, Redux, HTML5, CSS3, JavaScript, Next.js, TypeScript, MUI' },
            { title: 'Backend', skills: 'Java, Spring Boot, RESTful APIs, RabbitMQ, Redis' },
            { title: 'Database', skills: 'PostgreSQL, MySQL' },
            { title: 'Version Control', skills: 'Git, GitHub' },
            { title: 'Deployment', skills: 'Netlify, Render, GitHub Pages' },
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: '10px' }}>
                <Typography variant="subtitle1" color={''} sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{  }}>
                  {item.skills}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Education Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', color: '#32CD32', mb: 2 }}
        >
          Education
        </Typography>
        {[{
          degree: "Master's in Computer Applications",
          institution: "H.H. The Rajah's College, Bharathidasan University",
          year: "2020",
          grade: "CGPA: 7.73",
        }, {
          degree: "Bachelor's in Computer Science",
          institution: "H.H. The Rajah's College, Bharathidasan University",
          year: "2018",
          grade: "CGPA: 6.96",
        }].map((edu, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {edu.degree}
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              {edu.institution} ({edu.year}) - {edu.grade}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Certifications */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', color: '#32CD32', mb: 2 }}
        >
          Certifications
        </Typography>
        <Box>
          {[
            'Front End Development HTML',
            'Front End Development CSS',
            'Front End Development JavaScript',
            'Front End Development React',
            'CSS (Basic) Certification',
          ].map((cert, index) => (
            <Chip
              key={index}
              icon={<CheckCircle />}
              label={cert}
              sx={{
                margin: '5px',
                backgroundColor: '#32CD32',
                color: '#fff',
                fontWeight: 'bold',
              }}
            />
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Achievements */}
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', color: '#32CD32', mb: 2 }}
        >
          Achievements
        </Typography>
        {[{
          description: '🏆 2nd Prize in Debugging Competition - Awarded for exceptional debugging in a competitive debugging contest.',
        }, {
          description: '.',
        }].map((achievement, index) => (
          <Typography variant="body2" sx={{ mt: 2 }} key={index}>
            {achievement.description}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default AboutMe;
