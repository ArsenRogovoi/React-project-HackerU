import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "../../../../providers/ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useUser } from "../../../../users/providers/UserProvider";
import NotLogged from "./NotLogged";
import { useState } from "react";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routesModel";

const RightNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useUser();
  const handleCloseMenu = () => setAnchorEl(null);

  const { isDark, toggleDarkMode } = useTheme();

  return (
    <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
      {/* <SearchBar /> */}

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

        {!user && (
          <Box>
            <NavItem label="signup" to={ROUTES.SIGNUP} />
            <NavItem label="login" to={ROUTES.LOGIN} />
          </Box>
        )}

        {user && (
          <Tooltip title="Open settings">
            <IconButton
              sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
              onClick={(e) => setAnchorEl(e.target)}
            >
              <Avatar alt="Bird" src="/assets/images/avatar.png" />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};

export default RightNavigation;
