// import React from 'react';
// import { Box, CssBaseline } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import AppBarComponent from './AppBarComponent';
// import DrawerComponent from './DrawerComponent';
// import FooterComponent from './FooterComponent';
// import MainContent from './MainContent.tsx';

// const Layout: React.FC<{ children: React.ReactNode, toggleTheme: () => void, isDarkMode: boolean }> = ({ children, toggleTheme, isDarkMode }) => {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(!open);
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <CssBaseline />
//       <AppBarComponent open={open} handleDrawerOpen={handleDrawerOpen} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
//       <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />
//       <MainContent>
//         {children}
//       </MainContent>
//       <FooterComponent />
//     </Box>
//   );
// };

// export default Layout;
