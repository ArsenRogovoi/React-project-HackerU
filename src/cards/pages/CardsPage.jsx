import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

const CardsPage = () => {
  const { isLoading, error, cards, handleGetCards } = useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = () => {};

  return (
    <Container>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all business cards from all categories"
      />
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
      />
    </Container>
  );
};

export default CardsPage;
