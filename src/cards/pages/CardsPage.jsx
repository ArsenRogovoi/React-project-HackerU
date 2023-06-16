import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";
import { useEffect, useState } from "react";
import { getCards } from "../services/cardService";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

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

  return (
    <Container>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all business cards from all categories"
      />
      {isPending && <Spinner />}
      {error && <Error errorMessage={error} />}
      {cards && !cards.length && (
        <p>
          Oops, there are no business cards in the database that match the
          parameters you entered
        </p>
      )}
      {cards && !!cards.length && <Cards cards={cards} />}
    </Container>
  );
};

export default CardsPage;
