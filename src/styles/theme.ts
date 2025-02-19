import { createTheme } from '@mui/material/styles';

const neonGreen = {
  light: '#76FF7A', // Slightly softer green
  main: '#32CD32',  // LimeGreen shade for primary color
  dark: '#228B22',  // ForestGreen for contrast
  contrastText: '#FFFFFF',
};

const goldenYellow = {
  light: '#FFECB3', // Softer light yellow
  main: '#FFC107',  // Keep the original for brand consistency
  dark: '#FFA000',  // Slightly darker yellow for contrast
  contrastText: '#000000',
};

const typography = {
  fontFamily: ['Poppins', 'Roboto', 'Arial', 'sans-serif'].join(','),
  fontSize: 14,
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
};

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none', // Prevent all caps text on buttons
        borderRadius: '8px',   // Rounded corners for buttons
        padding: '8px 16px',   // Consistent padding
        variants: [],          // Add an empty variants array
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      colorPrimary: {
        backgroundColor: neonGreen.main,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        padding: '16px', // Ensure consistent padding inside cards
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      h1: {
        color: neonGreen.main,
      },
      h2: {
        color: goldenYellow.main,
      },
    },
  },
};

const baseTheme = {
  typography,
  components,
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: neonGreen,
    secondary: goldenYellow,
    background: {
      default: '#F0F2F5', // Softer light grey
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2B2D42', // Main text color
      secondary: '#6C757D', // Muted text color
    },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: neonGreen,
    secondary: goldenYellow,
    background: {
      default: '#121212',   // Dark theme background
      paper: '#1E1E1E',     // Slightly lighter than default
    },
    text: {
      primary: '#E5E5E5',   // Main text color for dark theme
      secondary: '#9CA3AF', // Muted text color
    },
  },
});
