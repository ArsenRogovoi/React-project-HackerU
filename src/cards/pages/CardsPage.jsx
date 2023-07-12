import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

const CardsPage = () => {
  const { isLoading, error, filteredCards, handleGetCards, handleDeleteCard } =
    useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  const onLikeCard = () => {};

  return (
    <Container>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all business cards from all categories"
      />
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={filteredCards}
        onDelete={onDeleteCard}
        onLike={onLikeCard}
      />
    </Container>
  );
};

export default CardsPage;
