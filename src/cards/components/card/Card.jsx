import { Box, Card } from "@mui/material";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import cardType from "../../models/types/cardType";

const BusinessCard = ({ card, events }) => {
  const { image } = card;
  return (
    <Card sx={{ width: "250px" }} variant="outlined">
      <CardHead image={image} />
      <Box m={0} p={0}>
        <CardBody card={card} />
        <CardActionBar card={card} events={events} />
      </Box>
    </Card>
  );
};

BusinessCard.propTypes = {
  card: cardType.isRequired,
};

export default BusinessCard;
