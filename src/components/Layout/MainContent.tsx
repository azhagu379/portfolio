// import React from 'react';
// import { Box, Fab } from '@mui/material';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// interface MainContentProps {
//   children: React.ReactNode;
// }

// const MainContent: React.FC<MainContentProps> = ({ children }) => {
//   const [showScrollButton, setShowScrollButton] = React.useState(false);

//   const handleScroll = () => {
//     const scrolled = document.documentElement.scrollTop;
//     setShowScrollButton(scrolled > 300);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const scrollToBottom = () => {
//     window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
//   };

//   React.useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: 'auto', position: 'relative' }}>
//       {children}
//       <Fab 
//         color="primary" 
//         aria-label="scroll" 
//         onClick={showScrollButton ? scrollToTop : scrollToBottom}
//         sx={{ position: 'fixed', bottom: 16, right: 16 }}
//       >
//         {showScrollButton ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//       </Fab>
//     </Box>
//   );
// };

// export default MainContent;
