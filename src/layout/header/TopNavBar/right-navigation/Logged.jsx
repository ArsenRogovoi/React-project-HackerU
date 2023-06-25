import { Avatar, IconButton, Tooltip } from "@mui/material";
import { useMenu } from "../menu/MenuProvider";
import PersonIcon from "@mui/icons-material/Person";

const Logged = () => {
  const setOpen = useMenu();

  return (
    <Tooltip title="Open settings">
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={() => setOpen(true)}
      >
        {/* <Avatar alt="Bird" src="/assets/images/avatar.png" /> */}
        <PersonIcon fontSize="large" />
      </IconButton>
    </Tooltip>
  );
};
export default Logged;
