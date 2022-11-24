import { Box, styled } from '@mui/material';
import React from 'react';

type IProps = {
  children: React.ReactNode;
};

const OuterWrapper = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  background: theme.palette.background.default,
}));

export default function AppContainer({ children }: IProps) {
  return <OuterWrapper>{children}</OuterWrapper>;
}
