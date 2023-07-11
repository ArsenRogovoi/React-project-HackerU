import { Delete, Edit, Favorite, Phone } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { useUser } from "../../../users/providers/UserProvider";
import { useState } from "react";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import useCards from "../../hooks/useCards";

const CardActionBar = ({ onDelete, cardId, cardUserId, cardLikes, onLike }) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { handleLikeCard } = useCards();

  const [isDialogOpen, setDialog] = useState(false);
  const [isLike, setLike] = useState(
    () => !!cardLikes.find((id) => id === user._id)
  );

  const handleDialog = (term) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDeleteCard = () => {
    handleDialog();
    onDelete(cardId);
  };

  const handleLike = async () => {
    setLike((prev) => !prev);
    await handleLikeCard(cardId);
    onLike();
  };

  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item>
        {user && user._id === cardUserId && (
          <>
            <IconButton
              aria-label="edit card"
              onClick={() => navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}
            >
              <Edit />
            </IconButton>
          </>
        )}
        {user && (user._id === cardUserId || user.isAdmin) && (
          <>
            <IconButton
              aria-label="delete card"
              onClick={() => handleDialog("open")}
            >
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
          <IconButton aria-label="add to favorites" onClick={handleLike}>
            <Favorite color={isLike ? "error" : "inherit"} />
          </IconButton>
        )}
      </Grid>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeleteCard}
      />
    </Grid>
  );
};

export default CardActionBar;
