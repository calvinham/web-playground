import { ThemeOptions } from '@mui/material';

export const paletteColors = {
  richBlack: '#04080f',
  oxfordBlue: '#041029',
  steelBlue: '#5B85AA',
  platinum: '#E8E9EB',
  gainsboro: '#DAE3E5',
  alloyOrange: '#C16200',
  darkRed: '#881600',
  inchworm: '#A1E44D', // light neon green
  mayGreen: '#60993E', // green,
  white: '#FFFFFF',
  black: '#04080f',
  cultured: '#EFF2EF', // white
};

declare module '@mui/material/styles' {
  interface Palette {
    tertiary?: PaletteOptions['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

const darkPalette: Partial<ThemeOptions['palette']> = {
  primary: {
    main: paletteColors.steelBlue,
    contrastText: paletteColors.platinum,
  },
  secondary: {
    main: paletteColors.inchworm,
    contrastText: paletteColors.platinum,
  },
  tertiary: {
    main: paletteColors.alloyOrange,
  },
  error: {
    main: paletteColors.darkRed,
  },
  background: {
    default: paletteColors.richBlack,
  },
  text: {
    primary: paletteColors.platinum,
  },
};

const lightPalette: Partial<ThemeOptions['palette']> = {
  primary: {
    main: paletteColors.steelBlue,
    contrastText: paletteColors.platinum,
  },
  secondary: {
    main: paletteColors.inchworm,
    contrastText: paletteColors.platinum,
  },
  tertiary: {
    main: paletteColors.alloyOrange,
  },
  error: {
    main: paletteColors.darkRed,
  },
  background: {
    default: paletteColors.platinum,
  },
  text: {
    primary: paletteColors.black,
  },
};

const palettes = {
  dark: { ...darkPalette },
  light: {
    ...lightPalette,
  },
};

export default palettes;

/**
 * glassmorphism card-effect
body {
  background-color: #111927;
  background-image: 
      radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), 
      radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%);
}

.card {
  backdrop-filter: blur(20px) saturate(100%);
  -webkit-backdrop-filter: blur(20px) saturate(100%);
  background-color: rgba(17, 25, 39, 0.45);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
}
*/
