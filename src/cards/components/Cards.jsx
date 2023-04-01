import { Container, Grid, Typography } from "@mui/material";
import BusinessCard from "./card/Card";
import { arrayOf } from "prop-types";
import cardType from "../models/types/cardType";

const BusinessCards = ({ cards }) => {
  const handleCardDelete = (_id) => {
    console.log("You deleted card no. " + _id);
  };

  const handleCardLike = (_id) => {
    console.log("You likeed card no. " + _id);
  };

  const handleCardEdit = (_id) => {
    console.log("You edited card no. " + _id);
  };

  const events = {
    onDelete: handleCardDelete,
    onLike: handleCardLike,
    onEdit: handleCardEdit,
  };

  if (!cards.length) {
    return (
      <Container>
        <Grid container justifyContent={"space-evenly"}>
          <Typography color="skyblue">
            Oops... it seems there are no business cards to display
          </Typography>
        </Grid>
      </Container>
    );
  } else {
    return (
      <Container>
        <Grid container justifyContent={"space-evenly"}>
          {cards.map((card, index) => {
            return (
              <Grid item key={card._id + index}>
                <BusinessCard
                  events={events}
                  card={card}
                  key={card._id + index}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
};

BusinessCards.propTypes = {
  cards: arrayOf(cardType).isRequired,
};

export default BusinessCards;