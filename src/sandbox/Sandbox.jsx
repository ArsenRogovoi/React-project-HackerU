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
          <NavItem label="Todo" to="todo" color={"black"} />
          <NavItem label="Custom hooks" to="custom-hooks" color={"black"} />
          <NavItem label="Context" to="A" color={"black"} />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
};

export default Sandbox;
