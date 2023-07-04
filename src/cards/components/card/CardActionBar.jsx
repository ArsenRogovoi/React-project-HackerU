import { Delete, Edit, Favorite, Phone } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { useUser } from "../../../users/providers/UserProvider";
import { useEffect, useState } from "react";
import useCards from "../../hooks/useCards";
import CardDeleteDialog from "./CardDeleteDialog";

const CardActionBar = ({ onDelete, cardId }) => {
  const { user } = useUser();
  const { handleGetCard } = useCards();
  const [isDialogOpen, setDialog] = useState(false);
  const [card, setCard] = useState(null);

  // why we pass cardId as prop instead of card???

  useEffect(() => {
    const settingCard = async () => {
      const card = await handleGetCard(cardId);
      setCard(card);
    };
    settingCard();
  }, []);

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
        {user && card && user._id === card.user_id && (
          <>
            <IconButton onClick={() => {}}>
              <Edit />
            </IconButton>
          </>
        )}
        {user && card && (user._id === card.user_id || user.isAdmin) && (
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
