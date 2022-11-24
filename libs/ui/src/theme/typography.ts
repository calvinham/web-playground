import { ThemeOptions } from '@mui/material';

const typographyOptions: ThemeOptions['typography'] = {
  fontSize: 16,
  htmlFontSize: 16,
  fontFamily:
    '-apple-system, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
  h1: {
    fontSize: '2rem', // 32px
    lineHeight: '2.375rem',
    fontWeight: 600,
  },
  h2: {
    fontSize: '1.5rem', //24px
    lineHeight: '1.813rem',
    fontWeight: 500,
  },
  h3: {
    fontSize: '1.25rem', // 20px
    lineHeight: '1.5rem',
    fontWeight: 500,
  },
  h4: {
    fontSize: '1rem', // 16px
    lineHeight: '1.188rem',
    fontWeight: 500,
  },
  body1: {
    fontSize: '1rem', // 16px
    lineHeight: '1.188rem',
  },
  body2: {
    fontSize: '0.875rem', // 14px
    lineHeight: '1.063rem',
  },
  caption: {
    fontSize: '0.75rem', // 12px
    lineHeight: '0.875rem',
  },
  button: {
    fontSize: '1rem',
    lineHeight: '1.188rem',
    borderWidth: '1px !important',
    textTransform: 'none',
  },
};

export default typographyOptions;
