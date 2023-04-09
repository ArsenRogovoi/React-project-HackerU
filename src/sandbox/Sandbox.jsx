import { AppBar, Container, Toolbar } from "@mui/material";
import NavItem from "../routes/NavItem";
import { Outlet } from "react-router-dom";

const Sandbox = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavItem
            label="MuiBottomNavigators"
            to="MuiBottomNavigators"
            color={"black"}
          />
          <NavItem label="OnClick" to="OnClick" color={"black"} />
          <NavItem
            label="FatherPropTypes"
            to="FatherPropTypes"
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

export default Sandbox;
