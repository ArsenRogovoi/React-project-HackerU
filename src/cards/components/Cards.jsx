import { Container, Grid, Typography } from "@mui/material";
import Card from "./card/Card";
import { arrayOf } from "prop-types";
import cardType from "../models/types/cardType";

const Cards = ({ cards, onDelete, onLike }) => {
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
        <Grid container spacing={2} justifyContent={"space-evenly"}>
          {cards.map((card, index) => {
            return (
              <Grid
                item
                maxWidth={{ xs: "12", md: "6", lg: "4", xl: "3" }}
                key={card._id + index}
              >
                <Card card={card} onDelete={onDelete} onLike={onLike} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
};

Cards.propTypes = {
  cards: arrayOf(cardType).isRequired,
};

export default Cards;
