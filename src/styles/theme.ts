import { createTheme } from '@mui/material/styles';

const green = {
  light: '#ff5722', // Light green
  main: '#ff3d00',  // Main green
  dark: '#f4511e',  // Dark green
  contrastText: '#fff', // White text color
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: green,
    secondary: {
      light: '#ff7961',
      main: '#e0e0e0',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background: {
      default: '#ffffff',
      paper: '#ff5722',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: green,
    secondary: {
      light: '#ff7961',
      main: '#e0e0e0',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background: {
      default: '#303030', // Semi-dark background color
      paper: '#ff5722',   // Semi-dark paper color
    },
  },
});
