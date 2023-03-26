import { Button } from "@mui/material";

const OnClick = () => {
  const handleClick = () => console.log("You clicked!");

  return (
    <Button
      onClick={handleClick}
      variant="outlined"
      color="error"
      sx={{ m: 2 }}
    >
      Click
    </Button>
  );
};

export default OnClick;
