import { Delete, Edit, Favorite, Phone } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { useUser } from "../../../users/providers/UserProvider";

const CardActionBar = ({ card, events }) => {
  const { user } = useUser();
  const { _id } = card;
  const { onDelete, onLike, onEdit } = events;
  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item>
        {user && user._id === card.user_id && (
          <>
            <IconButton onClick={() => onEdit(_id)}>
              <Edit />
            </IconButton>
          </>
        )}
        {user && (user._id === card.user_id || user?.isAdmin) && (
          <>
            <IconButton onClick={() => onDelete(_id)}>
              <Delete />
            </IconButton>
          </>
        )}
      </Grid>
      <Grid item>
        <IconButton>
          <Phone />
        </IconButton>
        {user && (
          <IconButton onClick={() => onLike(_id)}>
            <Favorite />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};

export default CardActionBar;
