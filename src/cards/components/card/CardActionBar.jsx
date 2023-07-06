import { Delete, Edit, Favorite, Phone } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { useUser } from "../../../users/providers/UserProvider";
import { useState } from "react";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

const CardActionBar = ({ onDelete, cardId, cardUserId }) => {
  const [isDialogOpen, setDialog] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  const handleDialog = (term) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDeleteCard = () => {
    handleDialog();
    onDelete(cardId);
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
          <IconButton onClick={() => {}}>
            <Favorite />
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
