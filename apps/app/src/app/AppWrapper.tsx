import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { useInitMuiTheme } from '@wb/ui';
import { HashRouter } from 'react-router-dom';
import { WagmiConfig } from 'wagmi';

import { web3Client } from '../util';

type IProps = {
  children: React.ReactNode;
};

export default function AppWrapper({ children }: IProps) {
  const theme = useInitMuiTheme();

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <WagmiConfig client={web3Client}>
          <CssBaseline />
          {children}
        </WagmiConfig>
      </ThemeProvider>
    </HashRouter>
  );
}
