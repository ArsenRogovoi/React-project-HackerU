import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "../../../../providers/ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useUser } from "../../../../users/providers/UserProvider";
import { useState } from "react";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routesModel";
import Logged from "./Logged";
import SearchBar from "./SearchBar";

const RightNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useUser();
  const handleCloseMenu = () => setAnchorEl(null);

  const { isDark, toggleDarkMode } = useTheme();

  return (
    <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "inline-flex",
          },
        }}
      >
        <SearchBar />
        <IconButton onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {!user && (
          <Box>
            <NavItem label="signup" to={ROUTES.SIGNUP} />
            <NavItem label="login" to={ROUTES.LOGIN} />
          </Box>
        )}

        {user && <Logged />}
      </Box>
    </Box>
  );
};

export default RightNavigation;
