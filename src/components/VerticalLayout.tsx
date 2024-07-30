// components/Layout.js
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Divider, useTheme, ThemeProvider, CssBaseline, Switch, createTheme, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from 'react';
import theme from '../styles/theme';
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

const VerticalLayoutWrapper = styled('div')({
    height: '100%',
    display: 'flex'
  })
  
  const MainContentWrapper = styled(Box)<BoxProps>({
    flexGrow: 1,
    minWidth: 0,
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  })
  
  const AppBarBgBlur = styled(Box)<BoxProps>({
    top: 0,
    zIndex: 10,
    width: '100%',
    position: 'fixed',
    backdropFilter: 'saturate(200%) blur(10px)'
  })
  
  const ContentWrapper = styled('main')(({ theme }) => ({
    flexGrow: 1,
    width: '100%',
    padding: theme.spacing(6),
    transition: 'padding .25s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  }))
  

const Layout1 = ({ children}:any) => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const appliedTheme = darkMode ? createTheme({ ...theme, palette: { ...theme.palette, mode: 'dark' } }) : theme;

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <VerticalLayoutWrapper className='layout-wrapper'>
     {/* Right Side Navigation Drawer */}
     <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: false }}
        >
          <List>
            <ListItemButton>
              <ListItemText primary="Item 1" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Item 2" />
            </ListItemButton>
          </List>
          <Divider />
        </Drawer>
    </VerticalLayoutWrapper>
    <MainContentWrapper
          className='layout-content-wrapper'
          sx={{ ...( { maxHeight: '100vh' }) }}
        >
             <AppBarBgBlur
              sx={{
                height: theme => theme.spacing( 3.25),
                // background: theme =>
                //   hexToRGBA(
                //     skin === 'bordered' ? theme.palette.background.paper : theme.palette.background.default,
                //     0.6
                //   )
              }}
            />
              {/* App Bar */}
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              MyApp
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <IconButton color="inherit" onClick={handleThemeChange}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>

             {/* Content */}
          <ContentWrapper
            className='layout-page-content'
            sx={{
              ...(true && {
                overflow: 'hidden',
                '& > :first-of-type': { height: '100%' }
              }),
              ...('boxed' === 'boxed' && {
                mx: 'auto',
                '@media (min-width:1440px)': { maxWidth: 1440 },
                '@media (min-width:1200px)': { maxWidth: '100%' }
              })
            }}
          >
            {children}
          </ContentWrapper>


        </MainContentWrapper>
      
    </ThemeProvider>
  );
};

export default Layout1;

