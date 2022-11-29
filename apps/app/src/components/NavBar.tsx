import React from 'react';

import { Box, Stack, styled, Typography } from '@mui/material';
import { paletteColors } from '@wb/ui';

const NAV_HEIGHT = 48;

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: NAV_HEIGHT,
  background: theme.palette.primary.main
}));

const InnerContainer = styled(Stack)(() => ({
  justifyContent: 'space-between',
  height: '100%',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box'
}));

const sharedStyles = {
  sx: {
    color: paletteColors.platinum
  }
};

const NavBar: React.FC = () => {
  return (
    <Container>
      <InnerContainer direction="row" py={2} px={1.5}>
        <Box>
          <Typography variant="h4">CHAMEE</Typography>
        </Box>
        <Stack direction="row" gap={1}>
          <Typography variant="h4" {...sharedStyles}>
            Bean
          </Typography>
          <Typography variant="h4" {...sharedStyles}>
            About
          </Typography>
        </Stack>
      </InnerContainer>
    </Container>
  );
};

export default NavBar;
