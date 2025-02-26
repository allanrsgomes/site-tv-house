import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

export default function Title({ title, highlight }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box textAlign="center">
      <Typography
        variant="h2" 
        component="h2"
        color={colors.grey[100]}
        fontWeight="bold" 
        gutterBottom
        sx={{ maxWidth: '500px', m: "0 auto" }}
      >
        {title} 
        <strong style={{
          color: "#141b2d",
          background: "white",
          fontWeight: "bold",
          padding: "2px 6px",
          marginLeft: "8px",
          borderRadius: "4px"
        }}>
          {highlight}
        </strong>
      </Typography>
    </Box>
  );
}