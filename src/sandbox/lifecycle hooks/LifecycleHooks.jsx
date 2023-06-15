import { AppBar, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavItem from "../../routes/NavItem";

const LifecycleHooks = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavItem
            label="LCH component"
            to="lifecycle-hooks-comp"
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
export default LifecycleHooks;
