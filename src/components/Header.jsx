import { Typography, Box, useTheme, useMediaQuery } from '@mui/material'
import { tokens } from '../theme'

export default function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box textAlign={isMobile ? "center" : "left"}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ maxWidth: '700px', m: "0 auto" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}