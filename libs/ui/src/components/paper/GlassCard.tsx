import React, { useMemo } from 'react';
import Card, { CardProps } from '@mui/material/Card';

export interface IGlassCard {
  blur?: number;
  saturate?: number;
}

const GlassCard: React.FC<IGlassCard & CardProps> = ({ blur = 20, saturate = 100, ...props }) => {
  const styles = useMemo(
    () => ({
      backdropFilter: `blur(${blur}px) saturate(${saturate}%)`,
      '-webkit-backdrop-filter': `blur(${blur}px) saturate(${saturate}%)`,
      backgroundColor: 'rgba(17, 25, 39, 0.45)',
      borderRadius: 12,
      border: '1px solid rgba(255, 255, 255, 0.125)',
    }),
    [blur, saturate]
  );

  return <Card {...props} sx={{ ...props.sx, ...styles }} />;
};

export default GlassCard;

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
