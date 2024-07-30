// theme.d.ts
import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    icon: {
      main: string;
    };
  }
  interface PaletteOptions {
    icon?: {
      main: string;
    };
  }
}
