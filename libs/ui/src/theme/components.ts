import { ThemeOptions, experimental_sx as sx } from '@mui/material';

const themeComponents: Partial<ThemeOptions['components']> = {
  MuiButton: {
    styleOverrides: {
      root: sx({
        maxHeight: 42,
      }),
      disabled: sx({
        pointerEvents: 'auto',
      }),
    },
  },
};

export default themeComponents;
