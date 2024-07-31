// import React from 'react';
// import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// interface AppBarComponentProps {
//   open: boolean;
//   handleDrawerOpen: () => void;
//   toggleTheme: () => void;
//   isDarkMode: boolean;
// }

// const AppBarComponent: React.FC<AppBarComponentProps> = ({ open, handleDrawerOpen, toggleTheme, isDarkMode }) => {
//   return (
//     <AppBar position="fixed" open={open}>
//       <Toolbar>
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           onClick={handleDrawerOpen}
//           edge="start"
//           sx={{
//             marginRight: 5,
//             ...(open && { display: 'none' }),
//           }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography align='center' variant="h6" noWrap component="div">
//           Portfolio
//         </Typography>
//         <IconButton
//           color="inherit"
//           onClick={toggleTheme}
//           sx={{ marginLeft: 'auto' }}
//         >
//           {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default AppBarComponent;
