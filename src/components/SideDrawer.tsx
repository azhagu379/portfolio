import React from 'react';
import { styled, Theme, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactsIcon from '@mui/icons-material/Contacts';
import SchoolIcon from '@mui/icons-material/School';
import { CSSObject } from '@emotion/react';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  position: 'relative',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: '-15px',
  transform: 'translateY(-50%)',
  borderRadius: '50%',
  boxShadow: theme.shadows[3],
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth - 20,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  // border: `2px solid ${theme.palette.secondary.main}`, // Yellow outline for drawer
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  // border: `2px solid ${theme.palette.secondary.main}`, // Yellow outline for drawer
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

interface SideDrawerProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const menuItems = [
    { text: 'Home', icon: <HomeIcon sx={{ color: theme.palette.primary.main }} />, link: '/' },
    { text: 'About', icon: <InfoIcon sx={{ color: theme.palette.primary.main }} />, link: '/about' },
    { text: 'Skills', icon: <BuildIcon sx={{ color: theme.palette.primary.main }} />, link: '/skills' },
    { text: 'Contact', icon: <ContactsIcon sx={{ color: theme.palette.primary.main }} />, link: '/contact' },
    { text: 'Tutorial', icon: <SchoolIcon sx={{ color: theme.palette.primary.main }} />, link: '/tutorial' },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <StyledIconButton onClick={handleDrawerClose}>
          {open ? (
            <ChevronLeftIcon sx={{ color: theme.palette.primary.main }} />
          ) : (
            <ChevronRightIcon sx={{ color: theme.palette.primary.main }} />
          )}
        </StyledIconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              component={Link}
              href={item.link}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default SideDrawer;
