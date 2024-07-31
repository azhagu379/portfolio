// import React from 'react';
// import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { useTheme } from '@mui/material/styles';

// interface DrawerComponentProps {
//   open: boolean;
//   handleDrawerClose: () => void;
// }

// const DrawerComponent: React.FC<DrawerComponentProps> = ({ open, handleDrawerClose }) => {
//   const theme = useTheme();

//   return (
//     <Drawer variant="permanent" open={open}>
//       <div>
//         <IconButton onClick={handleDrawerClose} >
//           {!open ? <ChevronRightIcon sx={{ color: theme.palette.secondary.main }} /> : <ChevronLeftIcon sx={{ color: theme.palette.secondary.main }} />}
//         </IconButton>
//       </div>
//       <Divider />
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//             <ListItemButton
//               sx={{
//                 minHeight: 48,
//                 justifyContent: open ? 'initial' : 'center',
//                 px: 2.5,
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   minWidth: 0,
//                   mr: open ? 3 : 'auto',
//                   justifyContent: 'center',
//                 }}
//               >
//                 {index % 2 === 0 ? <InboxIcon sx={{ color: theme.palette.secondary.main }} /> : <MailIcon sx={{ color: theme.palette.secondary.main }} />}
//               </ListItemIcon>
//               <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//             <ListItemButton
//               sx={{
//                 minHeight: 48,
//                 justifyContent: open ? 'initial' : 'center',
//                 px: 2.5,
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   minWidth: 0,
//                   mr: open ? 3 : 'auto',
//                   justifyContent: 'center',
//                 }}
//               >
//                 {index % 2 === 0 ? <InboxIcon sx={{ color: theme.palette.secondary.main }} /> : <MailIcon sx={{ color: theme.palette.secondary.main }} />}
//               </ListItemIcon>
//               <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default DrawerComponent;
