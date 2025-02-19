import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundImage: `url(/path/to/your/background.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
          // backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          I&apos;m a passionate Software Engineer with expertise in Java, HTML, CSS, JavaScript, React.js, Next.js, and Spring Boot.
        </Typography>
      </Box>

      <Box sx={{ padding: '40px 0' }}>
        <Typography variant="h4" component="h3" gutterBottom>
          About Me
        </Typography>
        <Typography paragraph>
          With 2 years of experience in the software development industry, I specialize in creating efficient and scalable web applications. My passion for technology drives me to continuously learn and adapt to new challenges.
        </Typography>
      </Box>

      <Grid container spacing={4} id="projects">
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              border: `2px solid ${theme.palette.secondary.main}`, // Yellow outline for the box
            }}
          >
            <Typography variant="h6" component="h4" gutterBottom>
              Project 1
            </Typography>
            <Typography paragraph>
              Description of Project 1.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              border: `2px solid ${theme.palette.secondary.main}`, // Yellow outline for the box
            }}
          >
            <Typography variant="h6" component="h4" gutterBottom>
              Project 2
            </Typography>
            <Typography paragraph>
              Description of Project 2.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              border: `2px solid ${theme.palette.secondary.main}`, // Yellow outline for the box
            }}
          >
            <Typography variant="h6" component="h4" gutterBottom>
              Project 3
            </Typography>
            <Typography paragraph>
              Description of Project 3.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
