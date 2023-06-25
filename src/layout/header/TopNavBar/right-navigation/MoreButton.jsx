import { Box, IconButton } from "@mui/material";
import { useMenu } from "../menu/MenuProvider";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MoreButton = () => {
  const setOpen = useMenu();
  return (
    <Box
      sx={{
        display: {
          xs: "inline-flex",
          md: "none",
        },
      }}
    >
      <IconButton
        onClick={() => setOpen(true)}
        size="large"
        color="inherit"
        aria-label="Menu"
        sx={{
          display: {
            xs: "inline-flex",
            md: "none",
          },
        }}
      >
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
};
export default MoreButton;
