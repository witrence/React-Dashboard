import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h3"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: ".5rem" }}
      >
        {title}
      </Typography>

      <Typography
        sx={{ fontSize: "1.2rem" }}
        variant="h5"
        color={theme.palette.secondary[300]}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
