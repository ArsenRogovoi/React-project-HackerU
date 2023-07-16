import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import UserChangeTypeDialog from "./UserChangeTypeDialog";

const UserTypeSelect = ({
  isAdmin,
  isBusiness,
  userId,
  userName,
  handleChangeUserType,
}) => {
  const [type, setType] = useState("");
  const [isDialogOpen, setDialog] = useState(false);

  const setSelectValue = () => {
    if (isAdmin) setType("Admin");
    if (isBusiness) setType("Business");
    if (!isAdmin && !isBusiness) setType("User");
  };

  useEffect(() => {
    setSelectValue();
  });

  const handleDialog = (term) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleChange = (event) => {
    setType(event.target.value);
    handleDialog("open");
  };

  const onChangeUserType = () => {
    handleChangeUserType(userId);
  };

  if (isAdmin)
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth disabled>
          <InputLabel id="user-type">Admin</InputLabel>
          <Select labelId="user-type" label="Type">
            <MenuItem>Admin</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="user-type">Type</InputLabel>
        <Select
          labelId="user-type"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={"Business"}>Business</MenuItem>
          <MenuItem value={"User"}>User</MenuItem>
        </Select>
      </FormControl>
      <UserChangeTypeDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onChangeType={onChangeUserType}
        userName={userName}
      />
    </Box>
  );
};

export default UserTypeSelect;
