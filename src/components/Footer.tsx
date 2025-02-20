import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const FooterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
}));

const SocialMediaLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
  '& a': {
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
    transition: 'color 0.3s, transform 0.3s', // Add transition for animation
    '&:hover': {
      color: theme.palette.secondary.main,
      transform: 'scale(1.2)', // Scale up on hover
    },
  },
}));

const Footer = () => {
  return (
    <FooterBox>
      <Typography variant="body2" align="center" gutterBottom>
        &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center">
        Crafted with ❤️ by [Your Name]
      </Typography>
      <SocialMediaLinks>
        <Link href="https://github.com/yourusername" passHref>
          <Icon icon="akar-icons:github-fill" width="24" height="24" />
        </Link>
        <Link href="https://linkedin.com/in/yourusername" passHref>
          <Icon icon="akar-icons:linkedin-box-fill" width="24" height="24" />
        </Link>
        <Link href="https://twitter.com/yourusername" passHref>
          <Icon icon="akar-icons:twitter-fill" width="24" height="24" />
        </Link>
        <Link href="https://instagram.com/yourusername" passHref>
          <Icon icon="akar-icons:instagram-fill" width="24" height="24" />
        </Link>
      </SocialMediaLinks>
    </FooterBox>
  );
};

export default Footer;
