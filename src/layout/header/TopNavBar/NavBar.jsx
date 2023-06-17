import { AppBar, Toolbar } from "@mui/material";
import LeftNavigation from "./LeftNavigation";
import RightNavigation from "./RightNavigation";

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
