import { PaletteMode, ThemeOptions, experimental_sx as sx } from '@mui/material';
import themeComponents from './components';
import palettes from './palette';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary?: PaletteOptions['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

export const themeOptions = (mode: PaletteMode): ThemeOptions => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: 8,
  ...{
    palette: palettes[mode],
    components: themeComponents,
  },
});
