import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/material";
import Menu from "./Menu";
import { node } from "prop-types";

const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  const theme = useMuiTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up("md"));

  const [isOpen, setOpen] = useState(true);
  const [anchorEL, setAnchor] = useState(null);
  const anchorRef = useRef();

  useEffect(() => {
    setAnchor(anchorRef.current);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [screenSize]);

  return (
    <>
      <MenuContext.Provider value={setOpen}>{children}</MenuContext.Provider>

      <Box
        ref={anchorRef}
        component={"span"}
        position={"fixed"}
        top={"70px"}
        right={"20px"}
      ></Box>
      {anchorEL && (
        <Menu
          anchorEl={anchorEL}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within a MenuProvider");
  return context;
};

MenuProvider.propTypes = {
  children: node.isRequired,
};
