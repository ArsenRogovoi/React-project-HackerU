import { Box } from "@mui/material";
import LogoIcon from "../Logo/LogoIcon";
import Logo from "../Logo/Logo";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

const LeftNavigation = () => {
  const { user } = useUser();
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
        {user && user.isBusiness && (
          <>
            <NavItem label="My Cards" to={ROUTES.MY_CARDS} />
            <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS} />
          </>
        )}
        {user && user.isAdmin && <NavItem label="sandbox" to={"/sandbox"} />}
      </Box>
    </Box>
  );
};

export default LeftNavigation;
