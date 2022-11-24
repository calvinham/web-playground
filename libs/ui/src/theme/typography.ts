import { ThemeOptions } from '@mui/material';

const typographyOptions: ThemeOptions['typography'] = {
  fontSize: 16,
  htmlFontSize: 16,
  fontFamily:
    '-apple-system, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
  h1: {
    fontSize: '2rem', // 32px
    fontWeight: 600,
  },
  h2: {
    fontSize: '1.5rem', // 24px
    fontWeight: 500,
  },
  h3: {
    fontSize: '1.1rem', // 18px
    fontWeight: 500,
  },
  h4: {
    fontSize: '1rem', // 16px
    fontWeight: 500,
  },
  h5: {
    fontSize: '0.9rem', // 14px
    fontWeight: 500,
  },
  h6: {
    fontSize: '0.8rem', // 12px
    fontWeight: 500,
  },
  body1: {
    fontSize: '1rem', // 16px
  },
  body2: {
    fontSize: '0.9rem', // 14px
  },
  caption: {
    fontSize: '0.75rem', // 12px
  },
  button: {
    fontSize: '1rem',
    lineHeight: '1.188rem',
    borderWidth: '1px !important',
    textTransform: 'none',
  },
};

export default typographyOptions;
