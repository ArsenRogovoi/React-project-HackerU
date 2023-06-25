import MenuItem from "@mui/material/MenuItem";
import NavBarLink from "../../../../routes/NavBarLink";
import { makeFirstLetterCapital } from "../../../../forms/utils/algoMethods";
import { func, string } from "prop-types";

const MenuLink = ({ text, navigateTo, onClick, styles }) => {
  return (
    <NavBarLink to={navigateTo}>
      <MenuItem sx={{ ...styles }} onClick={onClick}>
        {makeFirstLetterCapital(text)}
      </MenuItem>
    </NavBarLink>
  );
};

MenuLink.propTypes = {
  navigateTo: string.isRequired,
  onClick: func.isRequired,
  text: string.isRequired,
};

MenuLink.defaultProps = {
  styles: {},
};

export default MenuLink;
