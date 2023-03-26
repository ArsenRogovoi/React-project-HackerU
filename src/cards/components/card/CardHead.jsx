import { CardMedia } from "@mui/material";

const CardHead = ({ image }) => {
  return (
    <CardMedia
      sx={{ p: "5px", borderRadius: "10px" }}
      component="img"
      height="140"
      image={image.url}
    />
  );
};

export default CardHead;
