import { Box, Card, CardActionArea } from "@mui/material";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import cardType from "../../models/types/cardType";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

const BusinessCard = ({ card, events }) => {
  const navigate = useNavigate();

  const { image } = card;
  return (
    <Card sx={{ width: "250px" }} variant="outlined">
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)}
      >
        <CardHead image={image} />
        <CardBody card={card} />
      </CardActionArea>
      <CardActionBar card={card} events={events} />
    </Card>
  );
};

BusinessCard.propTypes = {
  card: cardType.isRequired,
};

export default BusinessCard;
