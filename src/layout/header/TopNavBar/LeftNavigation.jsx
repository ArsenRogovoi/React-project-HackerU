import { Box } from "@mui/material";
import LogoIcon from "./Logo/LogoIcon";
import Logo from "./Logo/Logo";
import NavItem from "../../../routes/NavItem";
import ROUTES from "../../../routes/routesModel";

const LeftNavigation = () => {
  return (
    <Box>
      <LogoIcon />

      <Logo />

      <Box
        sx={{
          display: {
            xs: "none",
            md: "inline-flex",
          },
        }}
      >
        <NavItem label="About" to={ROUTES.ABOUT} />
        <NavItem label="My Cards" to={ROUTES.MY_CARDS} />
        <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS} />
      </Box>
    </Box>
  );
};

export default LeftNavigation;
