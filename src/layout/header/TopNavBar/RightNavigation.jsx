import { Box, IconButton } from "@mui/material";
import { useTheme } from "../../../providers/ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const RightNavigation = () => {
  const { isDark, toggleDarkMode } = useTheme();
  return (
    <Box>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "inline-flex",
          },
        }}
      >
        <IconButton onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default RightNavigation;
