import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { func, string } from "prop-types";
import { bool } from "prop-types";

const UserChangeTypeDialog = ({
  isDialogOpen,
  onChangeDialog,
  onChangeType,
  userName,
}) => {
  return (
    <Dialog
      open={isDialogOpen}
      onClose={onChangeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to update user type?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`This oparation will update ${userName} user type in database and 
          it will change abilities of ${userName} in using the app.`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onChangeDialog} color="primary">
          cancel
        </Button>
        <Button onClick={onChangeType} autoFocus color="error">
          Change type
        </Button>
      </DialogActions>
    </Dialog>
  );
};

UserChangeTypeDialog.propTypes = {
  isDialogOpen: bool.isRequired,
  onChangeDialog: func.isRequired,
  onChangeType: func.isRequired,
  userName: string.isRequired,
};

export default UserChangeTypeDialog;
