import { AppBar, Toolbar } from "@mui/material";
import LeftNavigation from "./left-navigation/LeftNavigation";
import RightNavigation from "./right-navigation/RightNavigation";
import { MenuProvider } from "./menu/MenuProvider";

const NavBar = () => {
  return (
    <MenuProvider>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavigation />
          <RightNavigation />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
};

export default NavBar;
