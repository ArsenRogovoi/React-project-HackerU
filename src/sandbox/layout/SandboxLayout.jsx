import { AppBar, Container, Toolbar } from "@mui/material";
import NavItem from "../../routes/NavItem";
import { Outlet } from "react-router-dom";

const SandboxLayout = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavItem
            label="MuiBottomNavigators"
            to="MuiBottomNavigators"
            color={"black"}
          />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
};
export default SandboxLayout;
