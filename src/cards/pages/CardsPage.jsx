import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";
import { useEffect, useState } from "react";
import { getCards } from "../services/cardService";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import CardsFeedback from "../components/CardsFeedback";

const CardsPage = () => {
  const [cards, setCards] = useState();
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    getCards()
      .then((data) => {
        setPending(false);
        setCards(data);
      })
      .catch((error) => {
        setPending(false);
        setError(error);
      });
  }, []);

  const onDeleteCard = () => {};

  return (
    <Container>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all business cards from all categories"
      />
      <CardsFeedback
        isLoading={isPending}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
      />
    </Container>
  );
};

export default CardsPage;
