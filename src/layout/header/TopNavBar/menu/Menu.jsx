import { Box, MenuItem } from "@mui/material";
import useUsers from "../../../../users/hooks/useUsers";
import { useUser } from "../../../../users/providers/UserProvider";
import MuiMenu from "@mui/material/Menu";
import MenuLink from "./MenuLink";
import ROUTES from "../../../../routes/routesModel";
import { useTheme } from "../../../../providers/ThemeProvider";

const Menu = ({ isOpen, anchorEl, onClose }) => {
  const { user } = useUser();
  const { handleLogout } = useUsers();
  const { isDark } = useTheme();

  const onLogout = () => {
    handleLogout();
    onClose();
  };

  const MenuLinkColor = isDark ? "white" : "black";

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box>
        <MenuLink
          text="about"
          navigateTo={ROUTES.ABOUT}
          onClick={onClose}
          styles={{
            dislay: { xs: "block", md: "none" },
            color: MenuLinkColor,
          }}
        />
        {!user && (
          <>
            <MenuLink
              text="login"
              navigateTo={ROUTES.LOGIN}
              onClick={onClose}
              styles={{
                dislay: { xs: "block", md: "none" },
                color: MenuLinkColor,
              }}
            />
            <MenuLink
              text="signup"
              navigateTo={ROUTES.SIGNUP}
              onClick={onClose}
              styles={{
                dislay: { xs: "block", md: "none" },
                color: MenuLinkColor,
              }}
            />
          </>
        )}
        {user && (
          <>
            <MenuLink
              text="profile"
              navigateTo={ROUTES.USER_PROFILE}
              onClick={onClose}
              styles={{
                dislay: { xs: "block", md: "none" },
                color: MenuLinkColor,
              }}
            />
            <MenuLink
              text="edit account"
              navigateTo={ROUTES.EDIT_USER}
              onClick={onClose}
              styles={{
                dislay: { xs: "block", md: "none" },
                color: MenuLinkColor,
              }}
            />

            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </>
        )}
      </Box>
    </MuiMenu>
  );
};
export default Menu;
