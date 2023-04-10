import { AppBar, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

const LifecycleHooks = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>{/* <NavItem label="" to="#" color={"black"} /> */}</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
};
export default LifecycleHooks;
