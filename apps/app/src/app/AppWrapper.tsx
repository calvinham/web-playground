import { HashRouter } from 'react-router-dom';
import React from 'react';
import { useInitMuiTheme } from '@wb/ui';
import { ThemeProvider, CssBaseline } from '@mui/material';

type IProps = {
  children: React.ReactNode;
};

export default function AppWrapper({ children }: IProps) {
  const theme = useInitMuiTheme();

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </HashRouter>
  );
}
