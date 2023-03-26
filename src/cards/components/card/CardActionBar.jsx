import { Delete, Edit, Favorite, Phone } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";

const CardActionBar = ({ card, events }) => {
  const { _id } = card;
  const { onDelete, onLike, onEdit } = events;
  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item>
        <IconButton onClick={() => onDelete(_id)}>
          <Delete />
        </IconButton>
        <IconButton onClick={() => onEdit(_id)}>
          <Edit />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <Phone />
        </IconButton>
        <IconButton onClick={() => onLike(_id)}>
          <Favorite />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CardActionBar;
