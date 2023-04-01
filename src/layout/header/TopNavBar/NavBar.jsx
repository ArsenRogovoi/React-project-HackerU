import { AppBar, Toolbar } from "@mui/material";
import LeftNavigation from "./LeftNavigation";

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftNavigation />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
