import { PaletteMode, ThemeOptions } from '@mui/material';
import themeComponents from './components';
import palettes from './palette';

const themeOptions = (mode: PaletteMode): ThemeOptions => ({
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
  components: themeComponents,
  palette: {
    mode,
    ...palettes[mode],
  },
});

export default themeOptions;
