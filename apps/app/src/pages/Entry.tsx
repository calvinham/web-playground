import { Box, Button, Stack, Typography } from '@mui/material';
import { useThemeMode, paletteColors } from '@wb/ui';
import React from 'react';

const Entry: React.FC = () => {
  const [mode, toggle] = useThemeMode();
  const palette = paletteColors;
  return (
    <Stack gap={1}>
      Entry
      <div>{`mode: ${mode}`}</div>
      <Button variant="contained" onClick={toggle}>
        toggle
      </Button>
      <Stack gap={1}>
        {Object.entries(palette).map(([color, colorValue], i) => (
          <Stack direction="row" gap={1} alignItems="center">
            <Box
              sx={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: colorValue,
                border: '1px solid black',
              }}
            />
            <Typography>{color}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Entry;
