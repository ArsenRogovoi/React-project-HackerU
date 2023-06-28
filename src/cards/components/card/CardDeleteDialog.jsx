import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { func } from "prop-types";
import { bool } from "prop-types";

const CardDeleteDialog = ({ idDialogOpen, onDelete, onChangeDialog }) => {
  return (
    <Dialog
      open={idDialogOpen}
      onClose={onChangeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to delete this card?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This oparation will completely delete the business card and all its
          data from the database and it will not be possible to retrieve the
          card afterwards
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onChangeDialog} color="primary">
          cancel
        </Button>
        <Button onClick={onDelete} autoFocus color="error">
          Delete card
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CardDeleteDialog.propTypes = {
  isDialogOpen: bool.isRequired,
  onChangeDialog: func.isRequired,
  onDelete: func.isRequired,
};

export default CardDeleteDialog;
