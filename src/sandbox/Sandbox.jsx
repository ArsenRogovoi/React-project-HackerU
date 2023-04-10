import { AppBar, Container, Toolbar } from "@mui/material";
import NavItem from "../routes/NavItem";
import { Outlet } from "react-router-dom";

const Sandbox = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavItem label="Events" to="events" color={"black"} />
          <NavItem label="Layout" to="layout" color={"black"} />
          <NavItem
            label="Lyfecycle hooks"
            to="lyfecycle-hooks"
            color={"black"}
          />
          <NavItem label="PropTypes" to="prop-types" color={"black"} />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
};

export default Sandbox;
