import { Avatar, IconButton } from "@mui/material";
import NavBarLink from "../../../../routes/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

const LogoIcon = () => {
  return (
    <NavBarLink to={ROUTES.CARDS}>
      <IconButton
        sx={{
          display: {
            xs: "inline-flex",
            md: "none",
          },
        }}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <Avatar
          alt="Business Card Icon"
          src="/assets/images/business-card.jpg"
        />
      </IconButton>
    </NavBarLink>
  );
};

export default LogoIcon;
