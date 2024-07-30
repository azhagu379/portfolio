import { createTheme } from '@mui/material/styles';

const green = {
  light: '#66bb6a', // Light green
  main: '#388e3c',  // Main green
  dark: '#00701a',  // Dark green
  contrastText: '#fff', // White text color
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: green,
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: green,
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
