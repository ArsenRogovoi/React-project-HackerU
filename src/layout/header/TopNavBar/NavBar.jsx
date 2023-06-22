import { AppBar, Toolbar } from "@mui/material";
import LeftNavigation from "./left-navigation/LeftNavigation";
import RightNavigation from "./right-navigation/RightNavigation";

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftNavigation />
        <RightNavigation />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
