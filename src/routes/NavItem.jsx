import { Button, Typography } from "@mui/material";
import NavBarLink from "./NavBarLink";
import { string } from "prop-types";

const NavItem = ({ label, to, color }) => {
  return (
    <NavBarLink to={to} color={color}>
      <Button color="inherit">
        <Typography>{label}</Typography>
      </Button>
    </NavBarLink>
  );
};

NavItem.propTypes = {
  label: string.isRequired,
  to: string.isRequired,
  color: string,
};

export default NavItem;
